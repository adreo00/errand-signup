import React, { PureComponent } from "react"
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
} from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"

const Header = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    // className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">{props.headerName}</Typography>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header
