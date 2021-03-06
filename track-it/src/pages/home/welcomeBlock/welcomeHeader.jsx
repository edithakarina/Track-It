import { useState, useEffect} from "react";

import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

import Balance from "./balance";

const useStyles= makeStyles((theme)=>({
  bgColor:{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

function WelcomeHeader() {
  const [userName, setUserName] = useState("John Doe");

  const classes = useStyles();

  return (
    <div className={classes.bgColor + " welcomeHeader"}>
      <Grid container className="content" alignItems="center" justifyContent="space-between">
        <Grid item xs={8} md={10} >
          <Grid container spacing={0} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <h1 className="greeting black">Welcome back, </h1>
            </Grid>
            <Grid item xs={12} md={8}>
              <h2>{userName}</h2>
            </Grid>
            <Grid item xs={12} md={8}>
              <Balance/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={"https://via.placeholder.com/150"} alt="profile picture" className="userProfPic"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default WelcomeHeader;