import AddPhotoComponent from "./components/addPhoto";
import {Box} from "@mui/material";
import DisplayPhotos from "./components/displayPhotos";
import React from "react";
import "./photo.scss";

export default ()=>{
    return(
        <React.Fragment>
            <Box className={"galery-container"}>
                <Box className={"galery-container-header"}>
                    <AddPhotoComponent />
                </Box>
                <DisplayPhotos show={true}/>
            </Box>
        </React.Fragment>
    )
}
