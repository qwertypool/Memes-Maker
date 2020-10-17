import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    display: "none",
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  formControl: {
    // color: "black",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [dark, setDark] = useState(false);
  const [bg, setbg] = useState("teal");
  const handleChange = (event) => {
    setDark(event.target.checked);
    if (event.target.checked === true) {
      setbg("black");
    } else {
      setbg("teal");
    }

    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach((result) => {
      result.classList.toggle("invert");
    });
  };
 
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: bg }} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          
              Meme Maker
       
          </Typography>
          <div className={classes.search}>
            
                       </div>
          <Box p={1.5} />
          <FormGroup>
            <FormControlLabel
              className={classes.formControl}
              control={
                <Switch
                  checked={dark}
                  onChange={handleChange}
                  aria-label="Dark switch"
                />
              }
              label={"Dark Mode"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
