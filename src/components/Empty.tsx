import React, {Suspense} from "react";
import Loading from "./Loading";
import emptyImg from "/src/assets/illus/empty.webp"
import {Box, Typography} from "@mui/material";

export default function Empty({message}:{message:string}){


    return(
        <Suspense fallback={<Loading />}>
            <Box className={"container"}>
                <Box className={"empty"}>
                    <img className={"img"} src={emptyImg} alt="Empty img"/>
                    <Typography className={"msg"}> {message} </Typography>
                </Box>
            </Box>
        </Suspense>
    )
}
