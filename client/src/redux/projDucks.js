import {linux,linuxReplic,windows, windowsReplic} from "../database-connection";

//Constantes
const dataInicial = {
  all_projj: {},
  add_proj:{},
  delete_proj:{},
  update_proj:{},
  view_proj1:{},
  view_proj2:{},
  view_proj3:{},
};

//types
const GET_ALL_PROYECTOS_EXITO = "GET_ALL_PROYECTOS_EXITO";
const POST_ADD_PROYECTO_EXITO = "POST_ADD_PROYECTO_EXITO";
const DELETE_PROYECTO_EXITO = "DELETE_PROYECTO_EXITO";
const UPDATE_PROYECTO_EXITO = "UPDATE_PROYECTO_EXITO";
const GET_VIEW_INFO_PROJ1_EXITO = "GET_VIEW_INFO_PROJ1_EXITO";
const GET_VIEW_INFO_PROJ2_EXITO = "GET_VIEW_INFO_PROJ2_EXITO";
const GET_VIEW_INFO_PROJ3_EXITO = "GET_VIEW_INFO_PROJ3_EXITO";


//Reducer
export default function projyectoReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_PROYECTOS_EXITO:
      return { ...state, all_proj: action.payload };
      case POST_ADD_PROYECTO_EXITO:
        return { ...state, add_proj: action.payload };
      case DELETE_PROYECTO_EXITO:
        return { ...state, delete_proj: action.payload };
      case UPDATE_PROYECTO_EXITO:
        return { ...state, update_proj: action.payload };
      case GET_VIEW_INFO_PROJ1_EXITO:
        return { ...state, view_proj1: action.payload };
      case GET_VIEW_INFO_PROJ2_EXITO:
        return { ...state, view_proj2: action.payload };
      case GET_VIEW_INFO_PROJ3_EXITO:
        return { ...state, view_proj3: action.payload };
    default:
      return state;
  }
}

//Acciones

export const getAllProyectos = (arch) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   if(arch === "lnx"){

     try {
       const res = await linux.get('proj')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_ALL_PROYECTOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.get('proj')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PROYECTOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.get('proj')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PROYECTOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.get('proj')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PROYECTOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
  export const getAddProyectoAccion = (arch,payload) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('proj',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: POST_ADD_PROYECTO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('proj', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('proj', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('proj', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getDeleteProyectoAccion = (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){
     try {
       const res = await linux.post('proj/delete',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: DELETE_PROYECTO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('proj/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('proj/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('proj/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getUpdateProyectoAccion= (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('proj/update',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: UPDATE_PROYECTO_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('proj/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('proj/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('proj/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PROYECTO_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getViewProj1Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('proj1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('proj1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewProj2Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('proj2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('proj2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewProj3Accion = (arch) => async (dispatch) => {
   
   if(arch === "win"){

     try {
       const res = await windows.get('proj3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "winR"){

     try {
       const res = await windowsReplic.get('proj3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PROJ3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
