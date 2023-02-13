import React from "react";
import BlocTitle from "../../../../components/BlocTitle";
import {Alert, Box, Button, Card, CardMedia, CircularProgress, Grid} from "@mui/material";
import {useQuery} from "@apollo/client";
import {GET_IMAGES} from "../../../../store/image";
import resolveImg from "../../../../mixins/path";
import Empty from "../../../../components/Empty";
import {NavLink} from "react-router-dom";
import {AddCircle} from "@mui/icons-material";

function LastCatalogue(){
    let { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 5 }}>
            <CircularProgress />
        </Box>
    )


    if (error) return <Alert severity="warning">Impossible de récuperer la collection: {error.message}</Alert>

    if (data.getImages.length === 0) return <Empty message={"Aucun catalogue disponible"} />


    return(
        <Box className={"container"}>
            <Grid container spacing={2}>
                {
                    data && data.getImages && data.getImages.map((
                        {_id, label, path}:
                            {_id:string, label:string, path: string}, key: number)=>(
                        <Grid item key={_id} xs={12} sm={4} md={3}>
                            {key < 3 &&
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt={label}
                                        height="380"
                                        image={resolveImg(path)}
                                    />
                                </Card>
                            }
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default function LastCatalogueBanner(){

    return(
        <Box sx={{mb: 20}}>
            <Box className={"mt"} sx={{mb: 5}}>
                <BlocTitle title={"Les derniers articles du catalogue"} />
            </Box>
            <LastCatalogue />
            <Box className={"container"}>
                <Button
                    sx={{mt: 5}}
                    color={"primary"}
                    variant={"contained"}
                    className={"btn btn-link"}
                    size={"large"}
                    disableElevation
                    component={NavLink}
                    to={"/catalogue"}
                    startIcon={<AddCircle />}
                >
                    Voir plus
                </Button>
            </Box>
        </Box>
    )
}
