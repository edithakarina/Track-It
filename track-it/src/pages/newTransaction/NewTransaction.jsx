import { useState } from "react";

import Grid from "@mui/material/Grid";
import { makeStyles } from '@mui/styles';

import Tag from "../../components/button/tag";
import NewTransactionButton from "../../components/button/newTransactionBtn";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  cardColor: {
    backgroundColor: theme.palette.white.main,
    color: theme.palette.white.contrastText
  },
  buttonColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

function NewTransaction() {
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState([["what", false], ["bruh", false], ["eyyyy", false]]);
  const [oneIsChosen, setOneIsChosen] = useState(false);
  const [chosenTag, setChosenTag] = useState("");
  const [amount, setAmount] = useState(0);
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  function handleChange(event) {
    const inputDesc = event.target.value;
    setDescription(inputDesc);
  }

  function handleChangeAmount(event) {
    const inputAmount = event.target.value;
    setAmount(inputAmount);
  }

  function handleTagClick(tag) {
    setChosenTag(tag);

    if (oneIsChosen) {
      // console.log("one is chosen");
      for (var i = 0; i < tagList.length; i++) {
        if (tagList[i][0] === tag && tagList[i][1]) {
          console.log("unchose a chosen one");
          tagList[i][1] = !tagList[i][1];
          setOneIsChosen(!oneIsChosen);
          break;
        } else if ((tagList[i][1] && tagList[i][0] !== tag) || tagList[i][0] === tag) {
          tagList[i][1] = !tagList[i][1];
          // console.log("making only 1 chosen");
          // console.log(tagList);
        }
      }
    } else {
      // console.log("nothing is chosen");
      setOneIsChosen(!oneIsChosen);
      tagList.forEach((content) => {
        if (content[0] === tag) {
          content[1] = !content[1];
        }
      });
    }
    setTagList([...tagList]);
    // console.log("clicked "+tag);
  }

  return (
    <>
      <Header/>
      <div className={classes.cardColor + " newTransactionBox content bodyContainer"}>
        <h3 className="bold block textCenter">New Transaction</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Grid container justifyContent="space-between" spacing={2}
            style={{ marginBottom: "30px" }}>
            <Grid item xs={3}>
              <p className="bold">Description </p>
            </Grid>
            <Grid item>
              <p className="bold">: </p>
            </Grid>
            <Grid item xs={8}>
              <input type="text" value={description} onChange={(e) => handleChange(e)} placeholder="ex: bought food" />
            </Grid>
            <Grid item xs={3}>
              <p className="bold">Amount </p>
            </Grid>
            <Grid item>
              <p className="bold">: </p>
            </Grid>
            <Grid item xs={8}>
              <input type="number" value={amount} onChange={(e) => handleChangeAmount(e)} />
            </Grid>
            <Grid item xs={12}>
              <h4 className="bold block textCenter">Tags</h4>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="center" alignItems="center" spacing={4}>
                {
                  tagList.map((content, index) => {
                    console.log("came here");
                    return (
                      <Grid item key={index}>
                        <Tag action={handleTagClick} color={content[1] ? "tertiary" : "secondary"} content={content[0]} />
                      </Grid>
                    )
                  })}
              </Grid>
            </Grid>
          </Grid>
          {/* <input type="submit" value="Submit" className={classes.buttonColor +" submitButton bold "}/> */}
          <NewTransactionButton />
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default NewTransaction;