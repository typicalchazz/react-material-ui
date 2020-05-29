import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

//functional component
const NavBar = () => {
    return (
        <div>
            <AppBar position ="static">
                <Toolbar>
                    <Typography variant="title" color ="inherit">
                        React & Material-UI Sample App
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

//lets me export NavBar into App.js
export default NavBar;