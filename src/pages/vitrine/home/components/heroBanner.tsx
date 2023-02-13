import heroImg from "/src/assets/img/hero.jpg"
import {Box, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {WhatsApp} from "@mui/icons-material";

export default function HeroBanner(){

    return (
        <div className="presentation">
            <div className="container">
                <div className="media showMobile">
                    <img src={heroImg} alt="Guihon image de jardinage" className="round media"/>
                </div>
                <div className="presentation-content">
                    <div className="desc">
                        <h1 className="title1 white">Nettoyage et entretien du jardin</h1>
                        <p className="text desc-content styled white" id="propos">
                            Promotion de l'entreprenariat, de l'agriculture,
                            du benevolat, orientation, formation et insertion
                            des jeunes dans le monde socio-professionnel.
                        </p>
                        <Box sx={{display: "flex", gap: "5px"}} className={"btns"}>
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
                            <Button
                                variant={"outlined"}
                                className={"btn"}
                                color={"inherit"}
                                style={{textDecoration: "none !important", color: "#1D2424"}}
                                size={"large"}
                                disableElevation
                                startIcon={<WhatsApp />}
                                aria-label="Bienvenue chez guihon,
                                                nous vous repondrons dans quelques instant."
                                href="https://wa.me/237678322852"
                            >
                                Nous contacter
                            </Button>
                        </Box>
                    </div>
                    <div className="media hideMobile">
                        <img src={heroImg} alt="Guihon image de jardinage" className="round media"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
