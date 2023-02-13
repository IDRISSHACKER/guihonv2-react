import React from "react";
import {Box} from "@mui/material";

export default function BlocTitle({title}:{title:string}, props:any){
    return (
     <React.Fragment {...props}>
         <Box className={"bloc-title"}>
             <h2 className="title2 white">{title}</h2>
         </Box>
     </React.Fragment>
    )
}
