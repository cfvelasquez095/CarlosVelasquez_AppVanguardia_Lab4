import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  student: {},
  classi: {},
  studentName: "",
  studentCode: "",
  className: "",
  classCode: ""
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_ITEMS_SUCCESS: {
      console.log('llega acas')
      let items = action.items;
      let newState = _.cloneDeep(state);
      newState.items = items;
      return newState;
    }

    case ACTIONS.Types.CREATE_ITEM: {
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.CREATE_STUDENT: {
      let newState = _.cloneDeep(state);
      let studentName = action.studentName;
      let studentCode = action.studentCode;
      newState.studentName = studentName;
      newState.studentCode = studentCode;
      return newState;
    }

    case ACTIONS.Types.CREATE_CLASS: {
      let newState = _.cloneDeep(state);
      let className = action.className;
      let classCode = action.classCode;
      newState.className = className;
      newState.classCode = classCode;
      return newState;
    }

    case ACTIONS.Types.GET_STUDENT_SUCCESS: {
      let newState = _.cloneDeep(state);
      let student = action.student;
      newState.student = student;
      return newState;
    }

    case ACTIONS.Types.GET_CLASS_SUCCESS: {
      let newState = _.cloneDeep(state);
      let classi = action.classi;
      newState.class = classi;
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;