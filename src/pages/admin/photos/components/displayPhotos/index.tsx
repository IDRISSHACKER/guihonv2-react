import { useMutation, useQuery} from "@apollo/client";
import {
    Alert,
    Box, Card, CardMedia,
    CircularProgress, Grid, IconButton,
    ImageList, ImageListItem, ImageListItemBar,
} from "@mui/material";
import React, {useState} from "react";
import {DeleteSweep, StarBorder} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import "./displayPhotos.scss"
import {toast} from "react-toastify";
import client from "../../../../../providers/apollo";
import {DELETE_IMAGE, GET_IMAGES} from "../../../../../store/image";
import Empty from "../../../../../components/Empty";
import resolveImg from "../../../../../mixins/path";


const ImageItem = ({id, label, path, show=false}:{id: string, label:string, path:string, show: boolean})=>{
    const [deleteImage] = useMutation(DELETE_IMAGE);
    const [deleting, setDeleting] = useState(false)

    const handlerDelete = async ()=>{
        const deleteAction = new Promise((resolve, reject)=>{
            try {
                resolve(deleteImage({variables: {id: id}}))
            }catch (err:any){
                reject("Error")
            }
        })

        setDeleting(true)
        await toast.promise(deleteAction, {
            pending: "Supression en cours...",
            error: "Impossible de suprimer",
            success: "Suprimer avec success",
        })
        setDeleting(false)

        await client.refetchQueries({include:[GET_IMAGES]})

    }
    return(
        <React.Fragment>
            <ImageListItem className={"image-item"}>
                <img
                    className={"img"}
                    src={resolveImg(path)}
                    srcSet={resolveImg(path)}
                    alt={label}
                    loading="lazy"
                />
                <ImageListItemBar
                    className={"title"}
                    sx={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    title={label}
                    position="top"
                    actionIcon={
                        <IconButton
                            sx={{ color: 'white' }}
                            aria-label={`star ${label}`}
                        >
                            <StarBorder />
                        </IconButton>
                    }
                    actionPosition="left"
                />
                {show && <Box className={"delete"}>
                    <LoadingButton disableElevation
                                   loading={deleting}
                                   disabled={deleting}
                                   onClick={handlerDelete}
                                   className={"delete-icon"}
                                   aria-label={"delete"}
                                   variant={"contained"}
                                   color={"error"}>
                        <DeleteSweep />
                    </LoadingButton>
                </Box>}
            </ImageListItem>
        </React.Fragment>
    )
}

const ImageItemSm = ({label, path}:{label:string, path:string})=>{
    return(<Card>
        <CardMedia
            component="img"
            alt={label}
            height="280"
            image={resolveImg(path)}
        />
    </Card>)
}

export default ({show=false}: {show: boolean})=> {

    let { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 5 }}>
            <CircularProgress />
        </Box>
    )


    if (error) return <Alert severity="warning">Impossible de récuperer la collection: {error.message}</Alert>

    if (data.getImages.length === 0) return <Empty message={"Aucun articles disponible"} />

    return (
        <Box>
            <Box className={"hide-sm"}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {data && data.getImages && data.getImages.map((
                        {_id, label, path}:{ _id: string, label: string, path: string }) => (
                            <ImageItem show={show} key={_id} id={_id} label={label} path={path} />
                    ))}
                </ImageList>
            </Box>
            <Box className={"hide-pc container"}>
                <Grid container spacing={2} sx={{mt: 5}}>
                    {data && data.getImages && data.getImages.map((
                        {_id, label, path}:{ _id: string, label: string, path: string }) => (
                        <Grid item key={_id} xs={12} sm={4} md={3}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={label}
                                    height="380"
                                    image={resolveImg(path)}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
