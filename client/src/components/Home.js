import React from "react";
import imagen from "../assets/data-center.png";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://www.mobirama.com.mx/blog/wp-content/uploads/2020/12/big_data_center_server_racks_storage_binary_analytics_by_monsitj_gettyimages-951389152_3x2-100787358-large.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Acmeconsult
          </h1>
          <p className="text-3xl my-4">
            Proyecto de octavo semestre para la materia base de datos.
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://www.mobirama.com.mx/blog/wp-content/uploads/2020/12/big_data_center_server_racks_storage_binary_analytics_by_monsitj_gettyimages-951389152_3x2-100787358-large.jpg)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <img className="inline-flex" src={imagen} alt="Data center"></img>

          <p className="text-gray-100">Elije una base de datos a manejar.</p>
          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <button onClick={() => history.push('/windows')} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                Arquitectura Windows
              </button>
            </div>
            <div className="pb-2 pt-4">
              <button onClick={() => history.push('/linux')} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                Arquitectura Linux
              </button>
            </div>
            <div className="pb-2 pt-4">
              <button onClick={() => history.push('/windows/replic')} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                Base de datos replicada de Windows desde Linux
              </button>
            </div>
            <div className="pb-2 pt-4">
              <button onClick={() => history.push('/linux/replic')} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
              Base de datos replicada de Linux desde Windows
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
