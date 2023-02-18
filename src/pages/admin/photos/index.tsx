import AddPhotoComponent from "./components/addPhoto";
import {Box} from "@mui/material";
import React from "react";
import "./photo.scss";
import {AdminImgItems} from "./components/displayPhotos";

export default ()=>{
    return(
        <React.Fragment>
            <Box className={"galery-container"}>
                <Box className={"galery-container-header"} sx={{mb: 5}}>
                    <AddPhotoComponent />
                </Box>
                <AdminImgItems />
            </Box>
        </React.Fragment>
    )
}
