import Header from "../../components/Header";
import calendar from "../../images/Calendar_perspective_matte.png";
import money from "../../images/Coin_perspective_matte.png";

import { makeStyles } from '@mui/styles';
import SignUpButton from "../../components/button/signupBtn";

const useStyles = makeStyles((theme) => ({
  whiteColor: {
    color: theme.palette.white.main
  },
  yellowColor: {
    color: theme.palette.secondary.main
  },
  bgColor: {
    backgroundColor: theme.palette.primary.main
  }
}));
function LandingPage() {
  const classes = useStyles();
  return (
    <div className={"landingContainer "+classes.bgColor}>

      <Header login={true} />
      <div className="textCenter afterHeader">
      <img src={calendar} className="calendarImg" />
      <img src={money} className="moneyImg" />
        <div className="landingCenter">
          <h1 className={classes.whiteColor + " block bold"}>Track & Categorize</h1>
          <h1 className={classes.yellowColor + " block bold"}>your expenses</h1>
          <p className={classes.whiteColor + " block bold"}>with</p>
          <h1 className={classes.yellowColor + " block black"}>TRACK IT</h1>
          <a href="/signUp"><SignUpButton /></a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;