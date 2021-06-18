import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";
import List from "./List";
//Hooks de react redux, accediendo a nuestra BD y APIs
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEmpleadosAccion,
  getViewEmp1Accion,
  getViewEmp2Accion,
  getViewEmp3Accion,
} from "../redux/empDucks";
import { getAllPagos, getViewPagos1Accion,getViewPagos2Accion,getViewPagos3Accion } from "../redux/payDucks";
import { getAllProyectos, getViewProj1Accion ,getViewProj2Accion, getViewProj3Accion } from "../redux/projDucks";
import { getAllAsignacionesAccion, getViewAsg1Accion, getViewAsg2Accion, getViewAsg3Accion } from "../redux/asgDucks";

export default function Dashboard({ active, setActive, architecture }) {
  const [accionUser, setAccionUser] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [proj, setProj] = useState(null);
  const [budget, setBudget] = useState(null);
  const [nameTitle, setNameTitle] = useState(null);
  const [salary, setSalary] = useState(null);
  const [responsable, setResponsable] = useState(null);
  const [duration, setDuration] = useState(null);
  /* Redux variables */
  const todo_empleados = useSelector((store) => store.emp.all_empleados);
  const todo_projs = useSelector((store) => store.proj.all_proj);
  const todo_pays = useSelector((store) => store.pay.all_pay);
  const todo_asgs = useSelector((store) => store.asg.all_asg);
  /* Linux */
  const todo_emp_view1 = useSelector((store) => store.emp.view_emp1);
  const todo_emp_view2 = useSelector((store) => store.emp.view_emp2);
  const todo_emp_view3 = useSelector((store) => store.emp.view_emp3);
  const todo_pay_view1 = useSelector((store) => store.pay.view_pay1);
  const todo_pay_view2 = useSelector((store) => store.pay.view_pay2);
  const todo_pay_view3 = useSelector((store) => store.pay.view_pay3);
  /* Windows */
  const todo_proj_view1 = useSelector((store) => store.proj.view_proj1);
  const todo_proj_view2 = useSelector((store) => store.proj.view_proj2);
  const todo_proj_view3 = useSelector((store) => store.proj.view_proj3);
  const todo_asg_view1 = useSelector((store) => store.asg.view_asg1);
  const todo_asg_view2 = useSelector((store) => store.asg.view_asg2);
  const todo_asg_view3 = useSelector((store) => store.asg.view_asg3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmpleadosAccion(architecture));
    dispatch(getAllProyectos(architecture));
    dispatch(getAllPagos(architecture));
    /* Linux */
    dispatch(getViewEmp1Accion(architecture));
    dispatch(getViewEmp2Accion(architecture));
    dispatch(getViewEmp3Accion(architecture));

    dispatch(getViewPagos1Accion(architecture));
    dispatch(getViewPagos2Accion(architecture));
    dispatch(getViewPagos3Accion(architecture));
    /* Windows */
    dispatch(getViewProj1Accion(architecture));
    dispatch(getViewProj2Accion(architecture));
    dispatch(getViewProj3Accion(architecture));

    dispatch(getViewAsg1Accion(architecture));
    dispatch(getViewAsg2Accion(architecture));
    dispatch(getViewAsg3Accion(architecture));
    
  }, [dispatch, architecture]);

  const handleClick = (e) => {
    const { id } = e.target;
    if (id) {
      if (
        id === "Ver lista empleados" ||
        id === "Ver lista de proyectos" ||
        id === "Ver lista de salarios de profesiones" ||
        id === "Ver proyectos asignados" ||
        id === "Ver programadores" ||
        id === "Ver ingenieros" ||
        id === "Ver demás empleados" || id === "Ver proyectos de sistemas" || 
        id === "Ver proyectos desarrollo web"  ||
        id === "Ver proyectos con precios de entre  $150000 a $300000" || id ==="Ver salarios de ingenieros"
        || id === "Ver salarios de licenciados" ||
        id === "Ver salarios de $45000 a $1000000" ||  id ==="Ver asignaciones de proyectos con duración mayor a 25" ||
        id ==="Ver asignaciones de proyectos con responsabilidad de programador" || 
        id ==="Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'"
      ) {
        if (id === "Ver lista empleados") {
          dispatch(getAllEmpleadosAccion(architecture));
        }
        if (id === "Ver lista de proyectos") {
          dispatch(getAllProyectos(architecture));
        }
        if (id === "Ver lista de salarios de profesiones") {
          dispatch(getAllPagos(architecture));
        }
        if (id === "Ver proyectos asignados") {
          dispatch(getAllAsignacionesAccion(architecture));
        }
        if (id === "Ver programadores") {
          dispatch(getViewEmp1Accion(architecture));
        }
        if (id === "Ver ingenieros") {
          dispatch(getViewEmp2Accion(architecture));
        }
        if (id === "Ver demás empleados") {
          dispatch(getViewEmp3Accion(architecture));
        }
        if (id === "Ver proyectos de sistemas") {
        
          dispatch(getViewProj1Accion(architecture));
        }
        if (id === "Ver proyectos desarrollo web") {
          dispatch(getViewProj2Accion(architecture));
        }
        if (id === "Ver proyectos con precios de entre  $150000 a $300000") {
          dispatch(getViewProj3Accion(architecture));
        }
        if (id === "Ver salarios de ingenieros") {
          dispatch(getViewPagos1Accion(architecture));
        }
        if (id === "Ver salarios de licenciados") {
          dispatch(getViewPagos2Accion(architecture));
        }
        if (id === "Ver salarios de $45000 a $1000000") {
          dispatch(getViewPagos3Accion(architecture));
        }
        if (id === "Ver asignaciones de proyectos con duración mayor a 25") {
          dispatch(getViewAsg1Accion(architecture));
        }
        if (id === "Ver asignaciones de proyectos con responsabilidad de programador") {
          dispatch(getViewAsg2Accion(architecture));
        }
        if (id === "Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'") {
          dispatch(getViewAsg3Accion(architecture));
        }
        setAccionUser(id);
      } else {
        setAccionUser(id);
        setActive(true);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <div
          className={`grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-3 ${
            accionUser === "Ver lista empleados" ||
            accionUser === "Ver lista de proyectos" ||
            accionUser === "Ver lista de salarios de profesiones" ||
            accionUser === "Ver proyectos asignados" ||
            accionUser === "Ver programadores" ||
            accionUser === "Ver ingenieros" ||
            accionUser === "Ver demás empleados" || accionUser === "Ver proyectos de sistemas" || 
            accionUser === "Ver proyectos desarrollo web"  ||
            accionUser === "Ver proyectos con precios de entre  $150000 a $300000" || accionUser ==="Ver salarios de ingenieros"
            || accionUser === "Ver salarios de licenciados" ||
            accionUser === "Ver salarios de $45000 a $1000000" || accionUser ==="Ver asignaciones de proyectos con duración mayor a 25" ||
            accionUser ==="Ver asignaciones de proyectos con responsabilidad de programador" || 
            accionUser ==="Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'"
              ? "hidden"
              : "grid"
          }`}
        >
          {/*       accion1="Ver asignaciones de proyectos con duración mayor a 25"
              accion2="Ver asignaciones de proyectos con responsabilidad de programador"
              accion3="Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'" */}
          {/* <!-- 1 card --> */}
          <Card
            title="Empleados"
            accion1="Añadir empleado"
            accion2="Eliminar empleado"
            accion3="Ver lista empleados"
            colorDivIcon="bg-pink-500"
            handleClick={handleClick}
            iconPath="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"
            active={active}
          />

          {/* <!-- 2 card --> */}
          <Card
            title="Proyecto"
            accion1="Añadir proyecto"
            accion2="Eliminar proyecto"
            accion3="Ver lista de proyectos"
            accion4="Asignar proyecto"
            accion5="Ver proyectos asignados"
            accion6="Eliminar asignacion de proyecto"
            handleClick={handleClick}
            colorDivIcon="bg-green-500"
            iconPath="M15.123,9.991c-0.944,0-1.71,0.766-1.71,1.71c0,0.945,0.766,1.711,1.71,1.711c0.945,0,1.711-0.766,1.711-1.711
								C16.834,10.756,16.068,9.991,15.123,9.991z M15.703,12.281h-1.141v-1.141h1.141V12.281z M17.984,4.867h-2.288v-0.57h-0.024
								c0.011-0.086,0.025-0.17,0.025-0.26V2.852c0-1.092-0.838-1.977-1.871-1.977H2.745C1.8,0.875,1.027,1.618,0.9,2.58H0.875v15.404
								c0,0.629,0.511,1.141,1.141,1.141h15.969c0.629,0,1.14-0.512,1.14-1.141V6.008C19.124,5.377,18.613,4.867,17.984,4.867z
								 M2.016,2.586c0-0.315,0.255-0.57,0.57-0.57h11.406c0.314,0,0.57,0.255,0.57,0.57v2.275H2.016V2.586z M17.984,17.414
								c0,0.314-0.257,0.57-0.57,0.57H2.586c-0.315,0-0.57-0.256-0.57-0.57V6.578c0-0.315,0.255-0.57,0.57-0.57h14.828
								c0.313,0,0.57,0.255,0.57,0.57V17.414z"
            active={active}
          />

          {/* <!-- 3 card --> */}
          <Card
            title="Salarios de profesiones"
            accion1="Añadir salario de profesión"
            accion2="Eliminar salario de profesión"
            accion3="Ver lista de salarios de profesiones"
            handleClick={handleClick}
            colorDivIcon="bg-blue-500"
            iconPath="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74"
            active={active}
          />
          {/* <!-- 4 card --> */}
          {(architecture === "lnx" || architecture === "lnxR") && (
            <>
            <Card
              title="Vistas empleados"
              accion1="Ver programadores"
              accion2="Ver ingenieros"
              accion3="Ver demás empleados"
              handleClick={handleClick}
              colorDivIcon="bg-blue-500"
              iconPath="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74"
              active={active}
            />
            <Card
              title="Vistas pagos"
              accion1="Ver salarios de ingenieros"
              accion2="Ver salarios de licenciados"
              accion3="Ver salarios de $45000 a $1000000"
              handleClick={handleClick}
              colorDivIcon="bg-blue-500"
              iconPath="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74"
              active={active}
            />
            </>
          )}
          {/* <!-- 5 card --> */}
          {(architecture === "win" || architecture === "winR") && (
            <>
            <Card
              title="Vistas"
              accion1="Ver proyectos de sistemas"
              accion2="Ver proyectos desarrollo web"
              accion3="Ver proyectos con precios de entre  $150000 a $300000"
              handleClick={handleClick}
              colorDivIcon="bg-blue-500"
              iconPath="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74"
              active={active}
            />
            <Card
              title="Vistas asignaciones de proyecto"
              accion1="Ver asignaciones de proyectos con duración mayor a 25"
              accion2="Ver asignaciones de proyectos con responsabilidad de programador"
              accion3="Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'"
              handleClick={handleClick}
              colorDivIcon="bg-blue-500"
              iconPath="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74"
              active={active}
            />
            </>
          )}
        </div>
        {accionUser === "Añadir empleado" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre completo"
              estado={name}
              setEstado={setName}
              input2="Titulo profesional"
              estado2={title}
              setEstado2={setTitle}
              architecture={architecture}
              id1="ename"
              id2="title"
            />
          </div>
        ) : accionUser === "Añadir proyecto" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre proyecto"
              estado={proj}
              setEstado={setProj}
              input2="Costo del proyecto"
              estado2={budget}
              setEstado2={setBudget}
              architecture={architecture}
              id1="pname"
              id2="budget"
            />
          </div>
        ) : accionUser === "Añadir salario de profesión" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre de la profesión"
              estado={nameTitle}
              setEstado={setNameTitle}
              input2="Salario de la profesión"
              estado2={salary}
              setEstado2={setSalary}
              architecture={architecture}
              id1="title"
              id2="salary"
            />
          </div>
        ) : accionUser === "Eliminar empleado" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre del empeleado"
              estado={name}
              setEstado={setName}
              architecture={architecture}
              id1="ename"
            />
          </div>
        ) : accionUser === "Eliminar proyecto" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre del proyecto"
              estado={proj}
              setEstado={setProj}
              architecture={architecture}
              id1="pname"
            />
          </div>
        ) : accionUser === "Eliminar salario de profesión" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre de la profesión"
              estado={nameTitle}
              setEstado={setNameTitle}
              architecture={architecture}
              id1="title"
            />
          </div>
        ) : accionUser === "Eliminar asignacion de proyecto" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre del empleado"
              estado={name}
              setEstado={setName}
              input2="Nombre del proyecto"
              estado2={proj}
              setEstado2={setProj}
              architecture={architecture}
              id1="ename"
              id2="pname"
            />
          </div>
        ): accionUser === "Ver lista empleados" ? (
          <div className="items-center justify-center h-screen">
            <List
              accion={accionUser}
              setAccionUser={setAccionUser}
              setActive={setActive}
              datos={todo_empleados}
              architecture={architecture}
            />
          </div>
        ) : accionUser === "Ver lista de proyectos" ? (
          <div className="items-center justify-center h-screen ">
            <List
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_projs}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Ver lista de salarios de profesiones" ? (
          <div className="items-center justify-center h-screen ">
            <List
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_pays}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Ver proyectos asignados" ? (
          <div className="items-center justify-center h-screen">
            <List
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_asgs}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Asignar proyecto" ? (
          <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
            <Modal
              realizarTarea={accionUser}
              setRealizarTarea={setAccionUser}
              setActive={setActive}
              input1="Nombre del empleado"
              estado={name}
              setEstado={setName}
              input2="Nombre del proyecto"
              estado2={proj}
              setEstado2={setProj}
              input3="Responsabilidad en el proyecto"
              estado3={responsable}
              setEstado3={setResponsable}
              input4="Duración"
              estado4={duration}
              setEstado4={setDuration}
              architecture={architecture}
              id1="ename"
              id2="pname"
              id3="resp"
              id4="dur"
            />
          </div>
        ) : accionUser === "Ver programadores" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_emp_view1}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Ver ingenieros" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_emp_view2}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Ver demás empleados" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_emp_view3}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : accionUser === "Ver proyectos de sistemas" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_proj_view1}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver proyectos desarrollo web" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_proj_view2}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver proyectos con precios de entre  $150000 a $300000" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_proj_view3}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        
        ): accionUser === "Ver salarios de ingenieros" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_pay_view1}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver salarios de licenciados" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_pay_view2}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver salarios de $45000 a $1000000" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_pay_view3}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver asignaciones de proyectos con duración mayor a 25" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_asg_view1}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver asignaciones de proyectos con responsabilidad de programador" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_asg_view2}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ): accionUser === "Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'" ? (
          <div className="items-center justify-center h-screen">
            <List
              key={accionUser}
              accion={accionUser}
              setAccionUser={setAccionUser}
              datos={todo_asg_view3}
              architecture={architecture}
              setActive={setActive}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
