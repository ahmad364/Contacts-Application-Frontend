import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    subTitle:{
        marginLeft: "20px",
        cursor: "pointer"
    }
}));

function Header() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}> Contacts Application</Typography>
                    <Typography color="inherit" onClick={()=> navigate("/")} className={classes.subTitle}>Contacts List</Typography>
                    <Typography color="inherit" onClick={()=> navigate("/create")}  className={classes.subTitle}>Create Contact</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
