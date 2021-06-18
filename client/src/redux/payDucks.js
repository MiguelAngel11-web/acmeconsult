import {linux,linuxReplic,windows, windowsReplic} from "../database-connection";

//Constantes
const dataInicial = {
  all_pay: {},
  add_pay:{},
  delete_pay:{},
  update_pay:{},
  view_pay1:{},
  view_pay2:{},
  view_pay3:{},
};

//types
const GET_ALL_PAGOS_EXITO = "GET_ALL_PAGOS_EXITO";
const POST_ADD_PAGOS_EXITO = "POST_ADD_PAGOS_EXITO";
const DELETE_PAGOS_EXITO = "DELETE_PAGOS_EXITO";
const UPDATE_PAGOS_EXITO = "UPDATE_PAGOS_EXITO";
const GET_VIEW_INFO_PAY1_EXITO = "GET_VIEW_INFO_PAY1_EXITO";
const GET_VIEW_INFO_PAY2_EXITO = "GET_VIEW_INFO_PAY2_EXITO";
const GET_VIEW_INFO_PAY3_EXITO = "GET_VIEW_INFO_PAY3_EXITO";

//types
//Reducer
export default function pagosReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_ALL_PAGOS_EXITO:
      return { ...state, all_pay: action.payload };
      case POST_ADD_PAGOS_EXITO:
        return { ...state, add_pay: action.payload };
      case DELETE_PAGOS_EXITO:
        return { ...state, delete_pay: action.payload };
      case UPDATE_PAGOS_EXITO:
        return { ...state, update_pay: action.payload };
      case GET_VIEW_INFO_PAY1_EXITO:
        return { ...state, view_pay1: action.payload };
      case GET_VIEW_INFO_PAY2_EXITO:
        return { ...state, view_pay2: action.payload };
      case GET_VIEW_INFO_PAY3_EXITO:
        return { ...state, view_pay3: action.payload };
    default:
      return state;
  }
}

//Acciones
export const getAllPagos = (arch) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */

   if(arch === "lnx"){

     try {
       const res = await linux.get('pay')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_ALL_PAGOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.get('pay')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.get('pay')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.get('pay')
          .then((data) =>  data.data['array'])
          .catch((err) => console.log(err));
      dispatch({
        type: GET_ALL_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
  export const getAddPagosAccion = (arch,payload) => async (dispatch) => {
    /* 
    Aqui podemos acceder a los parametros que tiene nuestro dataInicial
    console.log(getState().usuario.login); 
    Forma abreviada
    const {login} = getState().usuario
    */
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('pay',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: POST_ADD_PAGOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('pay', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
    else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('pay', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
    else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('pay', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: POST_ADD_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getDeletePagosAccion = (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){
     try {
       const res = await linux.post('pay/delete',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: DELETE_PAGOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('pay/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('pay/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
   else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('pay/delete', payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: DELETE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getUpdatePagosAccion= (arch,payload) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.post('pay/update',payload)
           .then((data) =>  data)
           .catch((err) => console.log(err));
       dispatch({
         type: UPDATE_PAGOS_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } else if (arch === "win"){
    try {
      const res = await windows.post('pay/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
    else if (arch === "winR"){
    try {
      const res = await windowsReplic.post('pay/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
    else if (arch === "lnxR"){
    try {
      const res = await linuxReplic.post('pay/update',payload)
          .then((data) =>  data)
          .catch((err) => console.log(err));
      dispatch({
        type: UPDATE_PAGOS_EXITO,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
   }
  };
export const getViewPagos1Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('pay1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('pay1')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY1_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewPagos2Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('pay2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('pay2')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY2_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };
export const getViewPagos3Accion = (arch) => async (dispatch) => {
   
   if(arch === "lnx"){

     try {
       const res = await linux.get('pay3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
   if(arch === "lnxR"){

     try {
       const res = await linuxReplic.get('pay3')
           .then((data) =>  data.data['array'])
           .catch((err) => console.log(err));
       dispatch({
         type: GET_VIEW_INFO_PAY3_EXITO,
         payload: res,
       });
     } catch (error) {
       console.log(error);
     }
   } 
  };

