import React, {useEffect} from "react"
import Loading from "../../../../../components/Loading";
import {Avatar, Box, Typography} from "@mui/material";
import "./hero.scss"
import {useQuery} from "@apollo/client";
import {GET_IMAGES} from "../../../../../store/image";
import logo from "/src/assets/icon/logo.png"
import {CollectionsBookmark} from "@mui/icons-material";
import mascot from "/src/assets/img/mascot.jpg";

function User(props:any){
    const { data } = useQuery(GET_IMAGES);
    return(
        <React.Suspense fallback={<Loading />}>
            <Box {...props} className={"user"}>
                <Avatar
                    src={logo}
                    alt={"Guihon"}
                    className={"avatar"}
                />
                <Box className={"data"}>
                    <Typography className={"name"}>Catalogue</Typography>
                    <Typography className={"description"}>
                       <CollectionsBookmark />
                        <span>{data.getImages && data.getImages.length} articles</span>
                    </Typography>
                </Box>
            </Box>
        </React.Suspense>
    )
}

export default function Hero(){
    const { loading, error, data } = useQuery(GET_IMAGES);

    if (loading) return <Loading />

    if (error) return <Typography>Err!</Typography>

    return(
        <React.Suspense fallback={<Loading />}>
            <React.Fragment>
                <Box className={"bg-dark hero"}
                     style={{
                         background: `url(${mascot}) no-repeat`,
                         backgroundSize: 'cover'
                }}>
                    <Box className={"hero-cover"}>
                        <Box className={"hero-action"}>
                            <User />
                        </Box>
                    </Box>
                </Box>
            </React.Fragment>
        </React.Suspense>
    )
}
