import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LinuxDash from './Dashboard'

export default function LinuxReplic() {
  const [modalActivo,setModalActivo] = useState(null)
  return (
    <>
      <div className="h-screen w-screen flex bg-gray-200 ">
        <Sidebar arch="l" active={modalActivo} setActive={setModalActivo}/>
        <LinuxDash active={modalActivo} setActive={setModalActivo} architecture="lnx"/>
      </div>
    </>
  );
}
