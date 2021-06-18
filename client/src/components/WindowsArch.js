import React, { useState } from "react";
import Sidebar from "./Sidebar";
import WindDash from './Dashboard'

export default function WindowsArch() {
  const [modalActivo,setModalActivo] = useState(null)
  return (
    <>
      <div className="h-screen w-screen flex bg-gray-200">
        <Sidebar arch="w" active={modalActivo} setActive={setModalActivo}/>
       <WindDash active={modalActivo} setActive={setModalActivo} architecture="win"/>
      </div>
    </>
  );
}
