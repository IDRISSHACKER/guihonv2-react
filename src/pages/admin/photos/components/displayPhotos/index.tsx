import {gql, useMutation, useQuery} from "@apollo/client";
import {
    Alert,
    Box,
    CircularProgress, IconButton,
    ImageList, ImageListItem, ImageListItemBar,
} from "@mui/material";
import React from "react";
import {DeleteSweep, StarBorder} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import "./displayPhotos.scss"
import {toast} from "react-toastify";
import client from "../../../../../providers/apollo";
import {DELETE_IMAGE, GET_IMAGES} from "../../../../../store/image";


const ImageItem = ({id, label, path}:{id: string, label:string, path:string})=>{
    const [deleteImage] = useMutation(DELETE_IMAGE);

    const handlerDelete = async ()=>{
        await deleteImage({variables: {id: id}})
        await client.refetchQueries({include:[GET_IMAGES]})
        toast("L'image a été suprimer")
    }
    return(
        <React.Fragment>
            <ImageListItem className={"image-item"}>
                <img
                    className={"img"}
                    src={`http://localhost:8000/storage/${path}`}
                    srcSet={`http://localhost:8000/storage/${path}`}
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
                <Box className={"delete"}>
                    <LoadingButton disableElevation
                                   onClick={handlerDelete}
                                   className={"delete-icon"}
                                   aria-label={"delete"}
                                   variant={"contained"}
                                   color={"error"}>
                        <DeleteSweep />
                    </LoadingButton>
                </Box>
            </ImageListItem>
        </React.Fragment>
    )
}

export default ()=> {

    let { loading, error, data } = useQuery(GET_IMAGES, {
        fetchPolicy: "no-cache",
    });

    if (loading) return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 5 }}>
            <CircularProgress />
        </Box>
    )


    if (error) return <Alert severity="warning">Impossible de récuperer la collection: {error.message}</Alert>

    return (
        <React.Fragment>
            <ImageList variant="masonry" cols={3} gap={8}>
                    {data && data.getImages && data.getImages.map((
                        {_id, label, path}:{ _id: string, label: string, path: string }) => (
                        <ImageItem id={_id} key={_id} label={label} path={path} />
                    ))}
                </ImageList>
        </React.Fragment>
    )
}