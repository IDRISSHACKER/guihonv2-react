import {
    Button,
    Dialog,
    DialogTitle,
    Slide,
} from "@mui/material";
import React from "react";
import {TransitionProps} from "@mui/material/transitions";
import UploadPhoto from "./components/uploadPhoto.componet";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default ()=> {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={"btn"} variant="contained" disableElevation onClick={handleClickOpen} sx={{mt:5}}>
                Nouvelle publication
            </Button>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className={"dialog-title"}>{"Ajouter une photo au catalogue"}</DialogTitle>
                <UploadPhoto endEvent={()=>setOpen(false)} />
            </Dialog>
        </div>
    );
}
