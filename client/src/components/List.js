import React from "react";
import ListItem from "./ListItem";

export default function List({ accion, setAccionUser, datos, setActive, architecture }) {
  return (
    <div className="content h-auto">
      <div className="flex items-center justify-center h-full my-4 pl-4 sm:pr-4">
        <div className="mr-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 ">
            {accion}
          </h2>
          <div className="font-base tracking-tight text-gray-600">
            Bienvenido a la página de {accion}.
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setAccionUser(null)}
            className="bg-gray-900 px-5 py-2 text-sm shadow-sm font-semibold tracking-wider text-white rounded-full hover:bg-gray-800"
          >
            Volver
          </button>
        </div>
      </div>
      {/* Ver proyectos de sistemas */}
      <div className="grid mt-8 ml-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {Object.keys(datos).length > 0 ? (accion === "Ver lista empleados" || accion === "Ver programadores" || accion === "Ver ingenieros" || accion === "Ver demás empleados" 
          ? datos.map(({ eno, ename, title }) => (
              <ListItem key={eno} dato1={eno} dato2={ename} dato3={title} task={accion} setTask={setAccionUser} setActive={setActive} architecture={architecture}/>
            ))
          : accion === "Ver lista de proyectos"|| accion === "Ver proyectos de sistemas" || 
          accion === "Ver proyectos desarrollo web"  ||
          accion === "Ver proyectos con precios de entre  $150000 a $300000" 
          ? datos.map(({ pno, pname, budget}) => (
              <ListItem key={pno} dato1={pno} dato2={budget} dato3={pname} task={accion} setTask={setAccionUser} setActive={setActive} architecture={architecture}  />
            ))
          : accion === "Ver lista de salarios de profesiones" || accion ==="Ver salarios de ingenieros"
          || accion === "Ver salarios de licenciados" ||
          accion === "Ver salarios de $45000 a $1000000" 
          ? datos.map(({ payno, title, salary }) => (
              <ListItem key={payno} dato1={payno} dato2={salary} dato3={title} task={accion} setTask={setAccionUser} setActive={setActive} architecture={architecture}/>
            ))
          : accion === "Ver proyectos asignados" || accion ==="Ver asignaciones de proyectos con duración mayor a 25" ||
          accion ==="Ver asignaciones de proyectos con responsabilidad de programador" || 
          accion ==="Ver asignaciones de proyectos con el proyecto llamado 'Mechanic Robot'"
          ? datos.map(({ eno, pno, resp, dur },index) => (
              <ListItem key={index} dato1={eno} dato2={pno} dato3={resp} dato4={dur} task={accion} setTask={setAccionUser} setActive={setActive} architecture={architecture}/>
            )) : null)  : null}
      </div>
    </div>
  );
}
