import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {NavLink, Outlet} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "/src/assets/icon/logo.png"
import "/src/assets/style/main.scss"

import {
    Email,
    Facebook,
    LocationCity, Login,
    WhatsApp,
    WhereToVote
} from "@mui/icons-material";
import {Grid} from "@mui/material";

export default function MainLayout() {
    return (
        <Box>
            <CssBaseline />
            <AppBar className={"navbar"}>
                <Toolbar className={"navbar-toolbar"}>
                    <Button
                        size="large"
                        color="inherit"
                        aria-label="icon"
                        sx={{ mr: 0 }}
                        component={NavLink}
                        className={"btn-link link"}
                        to={"home"}
                    >
                        <img style={{width: '50px', height: 'auto'}} src={logo} alt="guihon group sarl"/>
                        <span className={"logo-text hide-sm"}>Guihon</span>
                    </Button>
                    <Box component="div" sx={{ flexGrow: 1 }}></Box>
                    <Button
                        disableElevation
                        variant={"contained"}
                        className={"navbar-item btn"}
                        color="primary"
                        sx={{ mr: 1 }}
                        component={NavLink}
                        to={"catalogue"}
                    >
                        Catalogue
                    </Button>
                    <Button
                        color={"inherit"}
                        variant={"outlined"}
                        className={"navbar-item btn hide-sm"}
                        disableElevation
                        startIcon={<WhatsApp />}
                        aria-label="Bienvenue chez guihon,
                                                nous vous repondrons dans quelques instant."
                        href="https://wa.me/237678322852"
                    >
                        <span className={""}>Nous contacter</span>
                    </Button>
                    <Button
                        className={"navbar-item"}
                        size="large"
                        color="inherit"
                        aria-label="icon"
                        component={NavLink}
                        to={"admin"}
                    >
                        <Login />
                    </Button>
                </Toolbar>
            </AppBar>
            <Box style={{maxWidth: '1200px', margin: 'auto', marginTop: '60px'}}>
                <Outlet />
            </Box>
            <Box sx={{mt: 10}} className={"footer"}>
                <Box className={"container"}>
                    <Grid container spacing={6} alignItems={"flex-start"} justifyContent={"center"}>
                        <Grid item xs={12} md={3}>
                            <Box className={"footer-content"}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px", mb: 4}}>
                                    <h3>Nous retrouver</h3>
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "10px"}}
                                     className={"text-mi-white"}
                                >
                                    <LocationCity />
                                    <p>Nous somme Situer à Logpom dans la ville de Daoula derriere charle de gaule</p>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        gap: "10px", mt: 2}}
                                    className={"text-mi-white"}
                                >
                                    <WhereToVote />
                                    <p>point de ventes  à Bonamoussadi</p>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box className={"footer-content fc2"}>
                                <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px", mb: 4}}>
                                    <h3>Nous contacter</h3>
                                </Box>
                                <Box className={"links2 text-mi-white"} sx={{mt: 3}}>
                                    <ul>
                                        <li>
                                            <a
                                                aria-label="Bienvenue chez guihon,
                                                nous vous repondrons dans quelques instant."
                                               href="https://wa.me/237678322852">
                                                <WhatsApp />
                                                +237 678322852
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Email /> contact@guihon.cm
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/GuihonGroupe/">
                                                <Facebook /> guihon
                                            </a>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={"authored"}>
                   <Box className={"container"}>
                       <p className={"text-mi-white"}>
                           Copiright by Guihon Group Sarl <strong>V.1.0</strong>
                       </p>
                   </Box>
                </Box>
            </Box>
        </Box>
    );
}
