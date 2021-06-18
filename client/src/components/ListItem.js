import React, { useState } from "react";
import Modal from "./Modal";

export default function ListItem({
  dato1,
  dato2,
  dato3,
  dato4,
  task,
  setTask,
  setActive,
  architecture,
}) {
  const [udpate, setUdpate] = useState(null);
  const [dataFirst, setDataFirst] = useState(dato1);
  const [dataSecond, setDataSecond] = useState(dato2);
  const [dataThree, setDataThree] = useState(dato3);
  const [dataFour, setDataFour] = useState(dato4);
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                Acmeconsult
              </div>
              <h2 className="flex-auto text-lg font-medium">{dato1}</h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4  text-sm text-gray-600">
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="none"
                    d="M10.001,9.658c-2.567,0-4.66-2.089-4.66-4.659c0-2.567,2.092-4.657,4.66-4.657s4.657,2.09,4.657,4.657
							C14.658,7.569,12.569,9.658,10.001,9.658z M10.001,1.8c-1.765,0-3.202,1.437-3.202,3.2c0,1.766,1.437,3.202,3.202,3.202
							c1.765,0,3.199-1.436,3.199-3.202C13.201,3.236,11.766,1.8,10.001,1.8z"
                  ></path>
                  <path
                    fill="none"
                    d="M9.939,19.658c-0.091,0-0.179-0.017-0.268-0.051l-7.09-2.803c-0.276-0.108-0.461-0.379-0.461-0.678
							c0-4.343,3.535-7.876,7.881-7.876c4.343,0,7.878,3.533,7.878,7.876c0,0.302-0.182,0.572-0.464,0.68l-7.213,2.801
							C10.118,19.64,10.03,19.658,9.939,19.658z M3.597,15.639l6.344,2.507l6.464-2.512c-0.253-3.312-3.029-5.927-6.404-5.927
							C6.623,9.707,3.848,12.326,3.597,15.639z"
                  ></path>
                  <path
                    fill="none"
                    d="M9.939,19.658c0,0-0.003,0-0.006,0c-0.347-0.003-0.646-0.253-0.709-0.596L7.462,9.567
							C7.389,9.172,7.65,8.79,8.046,8.718C8.442,8.643,8.82,8.906,8.894,9.301l1.076,5.796l1.158-5.741
							c0.08-0.394,0.461-0.655,0.86-0.569c0.396,0.08,0.649,0.464,0.569,0.859l-1.904,9.427C10.585,19.413,10.286,19.658,9.939,19.658z"
                  ></path>
                </svg>
                <p className="p-2">{dato2}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"></path>
                </svg>
                <p>{dato3}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <button
                onClick={() => setUdpate(true)}
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                type="button"
                aria-label="like"
              >
                Actualizar información
              </button>
            </div>
          </div>
        </div>
      </div>
      {task !== "Ver proyectos asignados" && udpate ? (
        <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
          <Modal
            realizarTarea={
              task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "Actualizar empleado"
                : task === "Ver lista de proyectos"
                ? "Actualizar proyecto"
                : task === "Ver lista de salarios de profesiones"
                ? "Actualizar profesión"
                : ""
            }
            setRealizarTarea={setTask}
            setActive={setActive}
            input1={
              task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "Nombre del empleado"
                : task === "Ver lista de proyectos"
                ? "Nombre del proyecto"
                : task === "Ver lista de salarios de profesiones"
                ? "Nombre de la profesión"
                : ""
            }
            estado={dataThree}
            setEstado={setDataThree}
            input2={
              task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "Titulo profesional"
                : task === "Ver lista de proyectos"
                ? "Costo del proyecto"
                : task === "Ver lista de salarios de profesiones"
                ? "Salario de la profesión"
                : ""
            }
            estado2={dataSecond}
            setEstado2={setDataSecond}
            input3={
              task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "Numero de empleado"
                : task === "Ver lista de proyectos"
                ? "Numero del proyecto"
                : task === "Ver lista de salarios de profesiones"
                ? "Numero del salario"
                : ""
            }
            estado3={dataFirst}
            setEstado3={setDataFirst}
            architecture={architecture}
            id1={
              task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "ename"
                : task === "Ver lista de proyectos"
                ? "pname"
                : task === "Ver lista de salarios de profesiones"
                ? "title"
                : ""
            }
            id2={
               task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "title"
                : task === "Ver lista de proyectos" ? "budget" : task === 
                  "Ver lista de salarios de profesiones"
                ? "salary"
                : ""
            }
            id3={
               task === "Ver lista empleados" || task === "Ver programadores" || task === "Ver demás empleados" || task === "Ver programadores"
                ? "eno"
                : task === "Ver lista de proyectos"
                ? "pno"
                : task === "Ver lista de salarios de profesiones"
                ? "payno"
                : ""
            }
            ocultar="hideen"
          />
        </div>
      ) : task === "Ver proyectos asignados" && udpate ? (
        <div className="fixed top-0 left-0 w-auto h-auto my-24 ">
          <Modal
            realizarTarea="Actualizar asignacion de proyecto"
            setRealizarTarea={setTask}
            setActive={setActive}
            input1="Nombre del empleado"
            estado={dataFirst}
            setEstado={setDataFirst}
            input2="Nombre del proyecto"
            estado2={dataSecond}
            setEstado2={setDataSecond}
            input3="Responsabilidad en el proyecto"
            estado3={dataThree}
            setEstado3={setDataThree}
            input4="Duración"
            estado4={dataFour}
            setEstado4={setDataFour}
            architecture={architecture}
            id1="ename"
            id2="pname"
            id3="resp"
            id4="dur"
          />
        </div>
      ) : null}
    </div>
  );
}
