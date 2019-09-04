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
    student: state.student
});
  
const mapDispatchToProps = dispatch => ({
    createStudent: (studentName, studentCode) => dispatch(ACTIONS.createStudent(studentName, studentCode)),
});

class FirstStep extends Component {
  constructor() {
      super();
      this.state = {
          studentName: "",
          studentCode: ""
      };
  }

  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ studentName: "", studentCode: "" });
    if (this.state.studentName !== "" && this.state.studentCode !== "") {
      // add the item to the store
      this.props.createStudent(this.state.studentName, this.state.studentCode);
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
        label="Student Name"
        name="studentName"
        className={classes.textField}
        value={this.state.studentName}
        onChange={this.handleChange}
        margin="normal"
        />
        <TextField
        id="standard-name"
        label="Student Code"
        name="studentCode"
        className={classes.textField}
        value={this.state.studentCode}
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
  )(withStyles(styles)(FirstStep));