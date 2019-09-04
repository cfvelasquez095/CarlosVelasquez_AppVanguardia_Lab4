// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    CREATE_STUDENT: "CREATE_STUDENT",
    GET_STUDENT: "GET_STUDENT",
    GET_STUDENT_SUCCESS: "GET_STUDENT_SUCCESS",
    CREATE_CLASS: "CREATE_CLASS",
    GET_CLASS: "GET_CLASS",
    GET_CLASS_SUCCESS: "GET_CLASS_SUCCESS"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getItems = () => ({
    type: Types.GET_ITEMS
  });

  const createStudent = (studentName, studentCode) => ({
    type: Types.CREATE_STUDENT,
    studentName: studentName,
    studentCode: studentCode
  });

  const createClass = (className, classCode) => ({
    type: Types.CREATE_CLASS,
    className: className,
    classCode: classCode
  });

  const getStudent = () => ({
    type: Types.GET_STUDENT
  })

  const getClass = () => ({
    type: Types.GET_CLASS
  })
  
  export default {
    createItem,
    deleteItem,
    getItems,
    createStudent,
    getStudent,
    createClass,
    getClass,
    Types
  };