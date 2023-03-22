 import React from "react"
 import { Link } from "react-router-dom";
 import {AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
 import useStyles from './styles'
 import { useState,useEffect } from "react";
import { useHistory ,useLocation} from "react-router-dom";
 import memories from "../../images/memories.png";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'

const  Navbar=()=>{
    const classes = useStyles();
    const history = useHistory(); 
    const dispatch = useDispatch();
    const location = useLocation();
    // const user = null;
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user);
    const logout = ()=>{ 
      dispatch({type:"LOGOUT"});
      history.push('/')
      setUser(null)

    }
    useEffect(()=>{

      console.log("Here",location);
      const token = user?.token;
      // console.log("here" ,token);
      if(token){
        const decodedToken = decode(token); 
        console.log("decoded token expiry ",decodedToken);
        if(decodedToken.exp*1000<new Date().getTime())logout();
      }
      setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <div
            className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2"  align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
              {user? (
                <div className={classes.profile}>
                        <Avatar className={classes.purple} alt ={user.result.name} src ={user.result.image}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant ="h6">{user.result.name}</Typography>
                        <Button variant ="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
              ):(
                <Button component={Link} to= "/auth" variant ="contained" color="primary" >Sign in</Button>
              )}

            </Toolbar>

      </AppBar>
    )
 }
 export default Navbar