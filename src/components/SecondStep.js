import React, { Component } from "react";
import {
  withStyles,
  TextField,
  Button
} from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(4)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
});

const mapStateToProps = state => ({
    class: state.class
});
  
const mapDispatchToProps = dispatch => ({
    createClass: (className, classCode) => dispatch(ACTIONS.createClass(className, classCode)),
});

class SecondStep extends Component {
  constructor() {
      super();
      this.state = {
          className: "",
          classCode: ""
      };
  }

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ className: "", classCode: "" });
    if (this.state.className !== "" && this.state.classCode !== "") {
      // add the item to the store
      this.props.createClass(this.state.className, this.state.classCode);
    }
    event.preventDefault();
  };
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
        id="standard-name"
        label="Class Name"
        name="className"
        className={classes.textField}
        value={this.state.className}
        onChange={this.handleChange}
        margin="normal"
        />
        <TextField
        id="standard-name"
        label="Class Code"
        name="classCode"
        className={classes.textField}
        value={this.state.classCode}
        onChange={this.handleChange}
        margin="normal"
        />
        <Button onClick={this.handleSubmit} type="submit" variant="contained" color="primary" className={classes.button}>
            Add
        </Button>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SecondStep));