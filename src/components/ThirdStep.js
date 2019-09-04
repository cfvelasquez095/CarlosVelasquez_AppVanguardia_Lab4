import React, { Component } from "react";
import {
  withStyles,
  TextField
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
  student: state.student,
  classi: state.classi
});
  
const mapDispatchToProps = dispatch => ({
  getStudent: () => dispatch(ACTIONS.getStudent()),
  getClass: () => dispatch(ACTIONS.getClass())
});

class ThirdStep extends Component {
  constructor() {
      super();
      this.state = {
          student: {},
          classi: {}
      };
  }

  componentDidMount() {
    this.props.getStudent();
    this.props.getClass();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
        disabled
        id="outlined-disabled"
        label="Student Code"
        defaultValue={this.props.student.studenCode}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
        <TextField
        disabled
        id="outlined-disabled"
        label="Student Name"
        defaultValue={this.props.student.studentName}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
        <div></div>
        <TextField
        disabled
        id="outlined-disabled"
        label="Class Code"
        defaultValue={this.props.classi.classCode}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
        <TextField
        disabled
        id="outlined-disabled"
        label="Class Name"
        defaultValue={this.props.classi.className}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        />
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ThirdStep));