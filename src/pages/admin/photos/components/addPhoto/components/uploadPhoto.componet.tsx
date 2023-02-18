import {
    Box, Button,
    Card,
    CardContent,
    CircularProgress,
    DialogActions, DialogContent,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {LoadingButton} from "@mui/lab";
import "./uploadPhoto.component.scss"
import {CloudCircle, DeleteSweep} from "@mui/icons-material";
import axios from "axios";
import {useMutation} from "@apollo/client";
import {toast} from "react-toastify";
import client from "../../../../../../providers/apollo";
import {GET_IMAGES, SET_IMAGE} from "../../../../../../store/image";
import env from "../../../../../../common/constants/settings";

function PreviewImg(
    {image, deleteEvent}:
        {image: Blob | MediaSource | undefined, deleteEvent: VoidFunction}){
    const [link, setUrl] = useState<string>()
    useEffect(()=>{
        setUrl(URL.createObjectURL(image as MediaSource));
    }, [image])
    return(
        <Box mt={1}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Box className={"preview"}>
                        <Box className={"img"}>
                            <img src={link} alt=""
                                 style={{width: "100%", height: "auto", borderRadius: "4px"}}
                            />
                        </Box>
                        <Box className={"delete"}>
                            <LoadingButton disableElevation
                                           onClick={deleteEvent}
                                           className={"delete-icon"}
                                           aria-label={"delete"}
                                           variant={"contained"}
                                           color={"error"}>
                                <DeleteSweep />
                            </LoadingButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default function UploadPhoto({endEvent}:{endEvent:CallableFunction}) {
    const [image, setImage] = useState<Blob | MediaSource>()
    const [selected, setSelected] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [label, setLabel] = useState("")
    const [createImage, { data, loading, error }] = useMutation(SET_IMAGE);
    const notify = (msg:string) => toast(msg);

    const handlerSelect = async (event:React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files && event.target.files[0]){
            setImage(event.target.files && event.target.files[0])
            setSelected(true)
            setUploading(true)

            const formData = new FormData()
            formData.append('file', event.target.files[0])

            try {
                const req = await axios.post("https://nfs.guihon.cm/drive", formData)

                console.log(req.data)

                setImageUrl(req.data.file)
            }catch (e) {
                toast.error("Erreur lors de la mise en ligne de l'image, le fichier doit faire moin de 4Mo")
                setUploading(false)
            }
            setUploading(false)

        }else {

        }
    }

    const handlerDraft = ()=>{
        setImage("" as unknown as MediaSource)
        setSelected(false)
    }

    const handlerPayloadInCloud = async ()=>{
        if(label.length && imageUrl.length) {
            await createImage({variables: {label: label, path: imageUrl}})
            await client.refetchQueries({include:[GET_IMAGES]})
            notify(`${label} sauvegarder avèc success`)

            setLabel('')
            setImageUrl('')
            setSelected(false)

            endEvent()
        }
    }


    return(
        <React.Fragment>
        <DialogContent>
        <Box className={"upload"}>
            <input className={"file"} type="file" id={"upload"} onChange={handlerSelect} />
            {uploading && <Box sx={{ display: 'flex' }} className={"uploadStatus"}>
                    <CircularProgress />
                </Box>
            }
            {!selected ? <label htmlFor={"upload"}>
                <Card variant={"outlined"} sx={{background: "#f0f3f5", borderStyle: "dashed"}}>
                    <CardContent>
                        <Box className={"upladContainer"}>
                            <CloudCircle className={"uploadIcon"} />
                            <Typography className={"uploadTitle"}>Faites glisser les photos ici
                            </Typography>
                            <LoadingButton
                                disableElevation
                                variant={"contained"}
                                className={"btn"}
                                component={Box}>Choisir une photo</LoadingButton>
                        </Box>
                    </CardContent>
                </Card>
            </label>:
                <React.Fragment>
                    <TextField
                        sx={{mt: 2}}
                        fullWidth
                        variant={"outlined"}
                        label={"Donnez-moi un nom"}
                        value={label}
                        onChange={
                            (event:React.ChangeEvent<HTMLInputElement>)=>{
                                setLabel(event.target.value)
                            }
                        }
                    />
                    <PreviewImg image={image} deleteEvent={handlerDraft} />
                </React.Fragment>
            }
        </Box>
        </DialogContent>
            <DialogActions>
                <Button
                    onClick={(event)=>{
                        event.stopPropagation()
                        return endEvent()
                    }
                    }
                    color={"error"}
                    disableElevation
                    className={"btn"}
                    component={Box}>Pas maintenant</Button>
                {selected &&
                    <LoadingButton
                        disabled={uploading || !label.length}
                        disableElevation
                        color={"primary"}
                        variant={"contained"}
                        loading={loading}
                        onClick={handlerPayloadInCloud}
                    >Publier maintenant</LoadingButton>
                }
            </DialogActions>
        </React.Fragment>
    )
}
