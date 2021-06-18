import {linux,windows,linuxReplic,windowsReplic} from "../database-connection";

//Constantes
const dataInicial = {
  all_asg: {},
  add_asg:{},
  delete_asg:{},
  update_asg:{},
  view_asg1:{},
  view_asg2:{},
  view_asg3:{},
};

//types
const GET_ALL_ASIGNACION_EXITO = "GET_ALL_ASIGNACION_EXITO";
const POST_ADD_ASIGNACION_EXITO = "POST_ADD_ASIGNACION_EXITO";
const DELETE_ASIGNACION_EXITO = "DELETE_ASIGNACION_EXITO";
const UPDATE_ASIGNACION_EXITO = "UPDATE_ASIGNACION_EXITO";
const GET_VIEW_INFO_ASG1_EXITO = "GET_VIEW_INFO_ASG1_EXITO";
const GET_VIEW_INFO_ASG2_EXITO = "GET_VIEW_INFO_ASG2_EXITO";
const GET_VIEW_INFO_ASG3_EXITO = "GET_VIEW_INFO_ASG3_EXITO";

//Reducer
export default function asignacionReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_ASIGNACION_EXITO:
      return { ...state, all_asg: action.payload };
      case POST_ADD_ASIGNACION_EXITO:
        return { ...state, add_asg: action.payload };
      case DELETE_ASIGNACION_EXITO:
        return { ...state, delete_asg: action.payload };
      case UPDATE_ASIGNACION_EXITO:
        return { ...state, update_asg: action.payload };
      case GET_VIEW_INFO_ASG1_EXITO:
        return { ...state, view_asg1: action.payload };
      case GET_VIEW_INFO_ASG2_EXITO:
        return { ...state, view_asg2: action.payload };
      case GET_VIEW_INFO_ASG3_EXITO:
        return { ...state, view_asg3: action.payload };
    default:
      return state;
  }
}

//Acciones
export const getAllAsignacionesAccion = (arch) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
  
   if(arch === "lnx"){

     try {
       const res = await linux.get('asg')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_ALL_ASIGNACION_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.get('asg')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.get('asg')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.get('asg')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };

  export const getAddAsignacionAccion = (arch,payload) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('asg',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: POST_ADD_ASIGNACION_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('asg', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('asg', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('asg', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getDeleteAsignacionAccion = (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){
     try {
       const res = await linux.post('asg/delete',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: DELETE_ASIGNACION_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('asg/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('asg/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('asg/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getUpdateAsignacionAccion= (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('asg/update',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: UPDATE_ASIGNACION_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('asg/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('asg/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('asg/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_ASIGNACION_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getViewAsg1Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('asg1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('asg1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewAsg2Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('asg2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('asg2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewAsg3Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('asg3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('asg3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_ASG3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
