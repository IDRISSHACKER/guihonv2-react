import fleurImg from "/src/assets/img/fleur.jpg"
import {Box, Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export default function SecurityBanner(){

    return (
        <div className="presentation">
            <div className="container">
                <div className="presentation-content">
                    <div className="media">
                        <img src={fleurImg} alt="Fleur de décoration" className="round media"/>
                    </div>
                    <div className="desc">
                        <h2 className="title1 white">Ventes de fleurs</h2>
                        <p className="text desc-content styled white" id="propos">
                            Vous êtes à la recherce de n'importe quelle type de fleurs naturel ou
                            artificiel pour enbelir votre espace? vous'y trouverez votre bonheur.
                        </p>
                        <Box sx={{display: "flex", gap: "5px"}}>
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                className={"btn btn-link"}
                                size={"large"}
                                disableElevation
                                component={NavLink}
                                to={"/catalogue"}
                            >
                                Consulter notre catalogue
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}
