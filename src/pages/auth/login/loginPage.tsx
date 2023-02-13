import React from "react"
import {Box, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import logo from "/src/assets/icon/logo.png"
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export default function LoginPage(){
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loading, setLoading ] = React.useState(false)
    const navigate = useNavigate()

    const handlerLogin = (event:any)=> {
        setLoading(true)
        if(username === "admin" && password === "admin"){
            setUsername("")
            setPassword("")
            localStorage.setItem("logged", "1")
            toast.success("Connexion reusis")
            setTimeout(()=>{
                navigate("/admin", {replace: true})
            },1200)
        }else{
            setLoading(false)
            toast.error("Utilisateur ou mot de passe incorect!")
        }
        event.preventDefault()
    }

    return(
        <Box className={"login"}>
            <div className={"container"}>
                <form action="" className={"form"} onSubmit={handlerLogin}>
                    <Box className={"form-head"}>
                        <NavLink to={"/home"}>
                            <img src={logo} alt="logo de guihon"/>
                        </NavLink>
                        <h3 className={"text-h3"}>Connexion</h3>
                    </Box>
                    <TextField
                        sx={{mb: 3, mt: 5}}
                        autoFocus
                        id="outlined-basic"
                        label="nom d'utilisateur"
                        variant="outlined"
                        type={"text"}
                        fullWidth
                        value={username}
                        onChange={(event)=>{
                            setUsername(event.target.value)
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Mot de passe"
                        variant="outlined"
                        type={"password"}
                        fullWidth
                        value={password}
                        onChange={(event)=>{
                            setPassword(event.target.value)
                        }}
                    />
                    <LoadingButton
                        sx={{mb: 3, mt: 3}}
                        loading={loading}
                        type={"submit"}
                        disableElevation
                        variant={"contained"}
                        className={"btn"}>Se connecter</LoadingButton>
                </form>
            </div>
        </Box>
    )
}
