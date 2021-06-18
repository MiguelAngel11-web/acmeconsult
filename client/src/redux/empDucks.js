import {linux,windows,linuxReplic,windowsReplic} from "../database-connection";

//Constantes
const dataInicial = {
  all_empleados: {},
  add_emp:{},
  delete_emp:{},
  update_emp:{},
  view_emp1:{},
  view_emp2:{},
  view_emp3:{},
};

//types
const GET_ALL_EMPLEADOS_EXITO = "GET_ALL_EMPLEADOS_EXITO";
const POST_ADD_EMPLEADO_EXITO = "POST_ADD_EMPLEADO_EXITO";
const DELETE_EMPLEADO_EXITO = "DELETE_EMPLEADO_EXITO";
const UPDATE_EMPLEADO_EXITO = "UPDATE_EMPLEADO_EXITO";
const GET_VIEW_INFO_EMP1_EXITO = "GET_VIEW_INFO_EMP1_EXITO";
const GET_VIEW_INFO_EMP2_EXITO = "GET_VIEW_INFO_EMP2_EXITO";
const GET_VIEW_INFO_EMP3_EXITO = "GET_VIEW_INFO_EMP3_EXITO";

//Reducer
export default function empleadoReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_EMPLEADOS_EXITO:
      return { ...state, all_empleados: action.payload };
    case POST_ADD_EMPLEADO_EXITO:
      return { ...state, add_emp: action.payload };
    case DELETE_EMPLEADO_EXITO:
      return { ...state, delete_emp: action.payload };
    case UPDATE_EMPLEADO_EXITO:
      return { ...state, update_emp: action.payload };
    case GET_VIEW_INFO_EMP1_EXITO:
      return { ...state, view_emp1: action.payload };
    case GET_VIEW_INFO_EMP2_EXITO:
      return { ...state, view_emp2: action.payload };
    case GET_VIEW_INFO_EMP3_EXITO:
      return { ...state, view_emp3: action.payload };
    default:
      return state;
  }
}

//Acciones
export const getAllEmpleadosAccion = (arch) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('emp')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_ALL_EMPLEADOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.get('emp')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_EMPLEADOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.get('emp')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_EMPLEADOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.get('emp')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_EMPLEADOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getAddEmpleadoAccion = (arch,payload) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('emp',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: POST_ADD_EMPLEADO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('emp', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('emp', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('emp', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getDeleteEmpleadoAccion = (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){
     try {
       const res = await linux.post('emp/delete',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: DELETE_EMPLEADO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('emp/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('emp/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('emp/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getUpdateEmpleadoAccion= (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('emp/update',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: UPDATE_EMPLEADO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('emp/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('emp/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('emp/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_EMPLEADO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getViewEmp1Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('emp1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('emp1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewEmp2Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('emp2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('emp2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewEmp3Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('emp3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('emp3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_EMP3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };

