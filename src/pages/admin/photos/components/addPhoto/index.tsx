import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
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
            <Button variant="contained" disableElevation onClick={handleClickOpen}>
                Nouvelle publication
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Ajouter une photo au catalogue"}</DialogTitle>
                <UploadPhoto endEvent={()=>setOpen(false)} />
            </Dialog>
        </div>
    );
}
