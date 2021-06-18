import React, { useRef, useState, useEffect } from "react";
import Input from "./Input";
//Hooks de react redux, accediendo a nuestra BD y APIs
import { useDispatch, useSelector } from "react-redux";
import {
  getAddEmpleadoAccion,
  getDeleteEmpleadoAccion,
  getUpdateEmpleadoAccion,
} from "../redux/empDucks";
import {
  getAddPagosAccion,
  getDeletePagosAccion,
  getUpdatePagosAccion,
} from "../redux/payDucks";
import {
  getAddProyectoAccion,
  getDeleteProyectoAccion,
  getUpdateProyectoAccion,
} from "../redux/projDucks";
import {
  getAddAsignacionAccion,
  getDeleteAsignacionAccion,
  getUpdateAsignacionAccion,
} from "../redux/asgDucks";

export default function Modal({
  realizarTarea,
  setRealizarTarea,
  setActive,
  estado,
  setEstado,
  estado2,
  setEstado2,
  estado3,
  setEstado3,
  estado4,
  setEstado4,
  input1,
  input2,
  input3,
  input4,
  id1,
  id2,
  id3,
  id4,
  architecture,
  ocultar,
}) {
  const [sendData, setSendData] = useState(false);
  /* Empleados */
  const add_emp_exito = useSelector((store) => store.emp.add_emp);
  const delete_emp_exito = useSelector((store) => store.emp.delete_emp);
  const update_emp_exito = useSelector((store) => store.emp.update_emp);
  /* Proyecto */
  const add_proj_exito = useSelector((store) => store.proj.add_proj);
  const delete_proj_exito = useSelector((store) => store.proj.delete_proj);
  const update_proj_exito = useSelector((store) => store.proj.update_proj);
  /* Pagos profesiones */
  const add_pay_exito = useSelector((store) => store.pay.add_pay);
  const delete_pay_exito = useSelector((store) => store.pay.delete_pay);
  const update_pay_exito = useSelector((store) => store.pay.update_pay);
  /* Asignaciones */
  const add_asg_exito = useSelector((store) => store.asg.add_asg);
  const delete_asg_exito = useSelector((store) => store.asg.delete_asg);
  const update_asg_exito = useSelector((store) => store.asg.update_asg);

  const statusModal = () => {
    setRealizarTarea(null);
    setActive(null);
  };

  const handleChange = (e) => {
    if (e.target.id === id1) {
      setEstado(e.target.value);
    }
    if (e.target.id === id2) {
      setEstado2(e.target.value);
    }
    if (e.target.id === id3) {
      setEstado3(e.target.value);
    }
    if (e.target.id === id4) {
      setEstado4(e.target.value);
    }
  };

  let form = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      ((Object.keys(add_emp_exito).length > 0 && add_emp_exito.data.success) ||
        (Object.keys(delete_emp_exito).length > 0 &&
          delete_emp_exito.data.success) ||
        (Object.keys(update_emp_exito).length > 0 &&
          update_emp_exito.data.success) ||
        (Object.keys(update_proj_exito).length > 0 &&
          update_proj_exito.data.success) ||
        (Object.keys(add_proj_exito).length > 0 &&
          add_proj_exito.data.success) ||
        (Object.keys(delete_proj_exito).length > 0 &&
          delete_proj_exito.data.success) ||
        (Object.keys(delete_pay_exito).length > 0 &&
          delete_pay_exito.data.success) ||
        (Object.keys(add_pay_exito).length > 0 && add_pay_exito.data.success) ||
        (Object.keys(update_pay_exito).length > 0 &&
          update_pay_exito.data.success) ||
        (Object.keys(update_asg_exito).length > 0 &&
          update_asg_exito.data.success) ||
        (Object.keys(add_asg_exito).length > 0 && add_asg_exito.data.success) ||
        (Object.keys(delete_asg_exito).length > 0 &&
          delete_asg_exito.data.success)) &&
      sendData
    ) {
      if (estado) {
        setEstado(null);
      }
      if (estado2) {
        setEstado2(null);
      }
      if (estado3) {
        setEstado3(null);
      }
      if (estado4) {
        setEstado4(null);
      }
      setTimeout(() => statusModal(null), 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
    add_emp_exito,
    delete_emp_exito,
    update_emp_exito,
    add_pay_exito,
    delete_pay_exito,
    update_pay_exito,
    add_proj_exito,
    delete_proj_exito,
    update_proj_exito,
    update_asg_exito,
    add_asg_exito,
    delete_asg_exito,
    sendData,
    estado,
    estado2,
    estado3,
    estado4,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    /* Empleados acciones */
    if (realizarTarea === "Añadir empleado") {
      dispatch(getAddEmpleadoAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Eliminar empleado") {
      dispatch(getDeleteEmpleadoAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Actualizar empleado") {
      dispatch(getUpdateEmpleadoAccion(architecture, payload));
      setSendData(true);
    }
    /* Poryecto acciones */
    if (realizarTarea === "Añadir proyecto") {
      dispatch(getAddProyectoAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Eliminar proyecto") {
      dispatch(getDeleteProyectoAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Actualizar proyecto") {
      dispatch(getUpdateProyectoAccion(architecture, payload));
      setSendData(true);
    }
    /* Pay o profesion acciones */
    if (realizarTarea === "Añadir salario de profesión") {
      dispatch(getAddPagosAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Eliminar profesion") {
      dispatch(getDeletePagosAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Actualizar profesion") {
      dispatch(getUpdatePagosAccion(architecture, payload));
      setSendData(true);
    }
    /* Asignacion acciones */
    if (realizarTarea === "Asignar proyecto") {
      dispatch(getAddAsignacionAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Eliminar asignacion de proyecto") {
      dispatch(getDeleteAsignacionAccion(architecture, payload));
      setSendData(true);
    }
    if (realizarTarea === "Actualizar asignacion de proyecto") {
      dispatch(getUpdateAsignacionAccion(architecture, payload));
      setSendData(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className="h-full w-1/2  inset-x-1/3 -translate-y-1/3   block fixed">
        <div className="flex flex-col w-full  mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">{realizarTarea}</p>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={statusModal}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                <p className="mb-2 font-semibold text-gray-700">{input1}</p>

                <Input
                  tipo="text"
                  name={id1}
                  id={id1}
                  value={estado}
                  placeholder="Ingresa los datos"
                  handelChange={handleChange}
                />
              </div>
              {input2 && (
                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                  <p className="mb-2 font-semibold text-gray-700">{input2}</p>
                  <Input
                    tipo={
                      id2 === "salary" || id2 === "budget" ? "number" : "text"
                    }
                    name={id2}
                    value={estado2}
                    id={id2}
                    placeholder="Ingresa los datos"
                    handelChange={handleChange}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              {input3 && (
                <div
                  className={`${ocultar ? "hidden" : null}  w-full sm:w-1/2`}
                >
                  <p className="mb-2 font-semibold text-gray-700">{input3}</p>

                  <Input
                    tipo="text"
                    name={id3}
                    id={id3}
                    value={estado3}
                    placeholder="Ingresa los datos"
                    handelChange={handleChange}
                  />
                </div>
              )}
              {input4 && (
                <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                  <p className="mb-2 font-semibold text-gray-700">{input4}</p>
                  <Input
                    tipo="number"
                    name={id4}
                    id={id4}
                    value={estado4}
                    placeholder="Ingresa los datos"
                    handelChange={handleChange}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <button
              onClick={statusModal}
              className="font-semibold text-gray-600"
            >
              Cancel
            </button>
            <div className="relative">
              <button
                type="submit"
                className="px-7 py-2 text-white font-semibold bg-blue-500 rounded "
              >
                <svg
                  className={`absolute ${
                    sendData ? "block" : "hidden"
                  } svg-icon animate-spin h-7 w-7 inset-y-0 left-0  my-1.5`}
                  viewBox="0 0 20 20"
                >
                  <path d="M3.254,6.572c0.008,0.072,0.048,0.123,0.082,0.187c0.036,0.07,0.06,0.137,0.12,0.187C3.47,6.957,3.47,6.978,3.484,6.988c0.048,0.034,0.108,0.018,0.162,0.035c0.057,0.019,0.1,0.066,0.164,0.066c0.004,0,0.01,0,0.015,0l2.934-0.074c0.317-0.007,0.568-0.271,0.56-0.589C7.311,6.113,7.055,5.865,6.744,5.865c-0.005,0-0.01,0-0.015,0L5.074,5.907c2.146-2.118,5.604-2.634,7.971-1.007c2.775,1.912,3.48,5.726,1.57,8.501c-1.912,2.781-5.729,3.486-8.507,1.572c-0.259-0.18-0.618-0.119-0.799,0.146c-0.18,0.262-0.114,0.621,0.148,0.801c1.254,0.863,2.687,1.279,4.106,1.279c2.313,0,4.591-1.1,6.001-3.146c2.268-3.297,1.432-7.829-1.867-10.101c-2.781-1.913-6.816-1.36-9.351,1.058L4.309,3.567C4.303,3.252,4.036,3.069,3.72,3.007C3.402,3.015,3.151,3.279,3.16,3.597l0.075,2.932C3.234,6.547,3.251,6.556,3.254,6.572z"></path>
                </svg>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
