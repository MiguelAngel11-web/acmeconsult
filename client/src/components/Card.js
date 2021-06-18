import React from "react";

export default function Card({ 
  title,
  accion1,
  accion2,
  accion3,
  accion4,
  accion5,
  accion6,
  colorDivIcon,
  iconPath,
  handleClick,
  active
}) {

  return (
    <div className={`relative bg-white ${active !== null ? "opacity-25" : null}  py-6 px-6 rounded-3xl w-80 my-4 mx-10 shadow-xl `}>
      <div
        className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${colorDivIcon} left-4 -top-6`}
      >
        {/* <!-- svg  --> */}
        <svg className=" h-8 w-8 " viewBox="0 0 24 24">
          <path fill="#ffff" d={iconPath}></path>
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-3">{title}</p>
        <div className="flex space-x-2 text-gray-400 text-base">
          {/* <!-- svg  --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-2 hover:text-green-500 cursor-pointer"
            id={accion1}
            onClick={handleClick}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          <p>{accion1}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-base my-3 ">
          {/* <!-- svg  --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-2 hover:text-red-500 cursor-pointer"
            fill="none"
            id={accion2}
            onClick={handleClick}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
                             0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
          </svg>
          <p>{accion2}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-base my-3 ">
          {/* <!-- svg  --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-2 hover:text-blue-500 cursor-pointer"
            fill="none"
            id={accion3}
            onClick={handleClick}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              fill="none"
              d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"
            ></path>
          </svg>
          <p>{accion3}</p>
        </div>
        {accion4 && (
          <div className="flex space-x-2 text-gray-400 text-base my-3 ">
            {/* <!-- svg  --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-2 hover:text-yellow-500 cursor-pointer"
              stroke="currentColor"
              id={accion4}
              onClick={handleClick}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.521,7.267c-0.144-0.204-0.38-0.328-0.631-0.328h-3.582l-0.272-1.826c-0.055-0.379-0.379-0.656-0.76-0.656
              H9.802l-0.39-0.891c-0.123-0.279-0.399-0.46-0.704-0.46H1.11c-0.222,0-0.434,0.096-0.58,0.264C0.385,3.537,0.319,3.76,0.349,3.981
              l1.673,12.243c0,0,0,0,0,0.002v0.004c0.015,0.113,0.06,0.213,0.119,0.303c0.006,0.009,0.006,0.023,0.012,0.033
              c0.012,0.016,0.033,0.024,0.046,0.04c0.054,0.065,0.114,0.118,0.185,0.161c0.027,0.018,0.051,0.035,0.078,0.048
              c0.099,0.045,0.206,0.078,0.32,0.078h0.002l0,0h13.03c0.323,0,0.611-0.201,0.722-0.505l3.076-8.416
              C19.698,7.735,19.663,7.474,19.521,7.267z M8.203,4.644l0.391,0.889c0.123,0.279,0.399,0.461,0.704,0.461h4.315l0.141,0.944H5.859
              c-0.323,0-0.611,0.201-0.723,0.505l-2.011,5.505L1.992,4.644H8.203z M15.276,15.356H3.882l2.515-6.879H17.79L15.276,15.356z"
              ></path>
            </svg>
            <p>{accion4}</p>
          </div>
        )}
        {accion5 && (
          <div className="flex space-x-2 text-gray-400 text-base my-3 ">
            {/* <!-- svg  --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-2 hover:text-yellow-500 cursor-pointer"
              stroke="currentColor"
              id={accion5}
              onClick={handleClick}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.521,7.267c-0.144-0.204-0.38-0.328-0.631-0.328h-3.582l-0.272-1.826c-0.055-0.379-0.379-0.656-0.76-0.656
              H9.802l-0.39-0.891c-0.123-0.279-0.399-0.46-0.704-0.46H1.11c-0.222,0-0.434,0.096-0.58,0.264C0.385,3.537,0.319,3.76,0.349,3.981
              l1.673,12.243c0,0,0,0,0,0.002v0.004c0.015,0.113,0.06,0.213,0.119,0.303c0.006,0.009,0.006,0.023,0.012,0.033
              c0.012,0.016,0.033,0.024,0.046,0.04c0.054,0.065,0.114,0.118,0.185,0.161c0.027,0.018,0.051,0.035,0.078,0.048
              c0.099,0.045,0.206,0.078,0.32,0.078h0.002l0,0h13.03c0.323,0,0.611-0.201,0.722-0.505l3.076-8.416
              C19.698,7.735,19.663,7.474,19.521,7.267z M8.203,4.644l0.391,0.889c0.123,0.279,0.399,0.461,0.704,0.461h4.315l0.141,0.944H5.859
              c-0.323,0-0.611,0.201-0.723,0.505l-2.011,5.505L1.992,4.644H8.203z M15.276,15.356H3.882l2.515-6.879H17.79L15.276,15.356z"
              ></path>
            </svg>
            <p>{accion5}</p>
          </div>
        )}
        {
          accion6 && (    <div className="flex space-x-2 text-gray-400 text-base my-3 ">
          {/* <!-- svg  --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-2 hover:text-red-500 cursor-pointer"
            fill="none"
            id={accion6}
            onClick={handleClick}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
                             0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
          </svg>
          <p>{accion6}</p>
        </div>)
        }
        <div className="border-t-2"></div>
      </div>
    </div>
  );
}
