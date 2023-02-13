import React from "react";
import {Box, CircularProgress} from "@mui/material";

export default function Loading(){

    return(
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress />
            </Box>
        </React.Fragment>
    )
}
