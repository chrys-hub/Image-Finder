import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from "../../logo.svg"


const NavBar = () =>{
    return(
        <div>
            <AppBar position="static">
        <Toolbar>
        <img src={Logo} style={{maxWidth:`50px`}}/>
          <Typography variant="h6">
            Pixabay API Image Finder ReactJs ft.Axios
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default NavBar;