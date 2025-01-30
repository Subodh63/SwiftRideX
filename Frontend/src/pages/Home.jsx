import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import map from "../Images/map.gif";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          //opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Logo */}
      <img
        className="w-16 absolute top-5 left-5"
        src={RideSwiftLogo}
        alt="RideSwift Logo"
      />

      {/* Fullscreen Map - Fixed GIF display */}
      <div className=" w-screen h-screen">
        <img className="h-full w-full  object-cover" src={map} alt="map" />
      </div>
      <div className="flex flex-col justify-end h-full w-full absolute bottom-0">
        <div className="relative h-[30%]  bg-white p-5">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold px-5">Find a trip</h4>
          <form
            onSubmit={submitHandler}
            className="mt-4 flex flex-col space-y-2 px-5"
          >
            {/* Vertical Line Indicator */}
            <div className="line absolute h-13 w-1 top-[45%] left-15 bg-gray-900 rounded-full"></div>

            {/* Pickup Input */}
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eeeeee] rounded-xl px-8 py-2 border w-full text-lg"
              type="text"
              placeholder="Add a pick-up location"
            />

            {/* Destination Input */}
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeeeee] rounded-xl px-8 py-2 border w-full text-lg"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        //{" "}
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel />
        </div>
      </div>

      <div className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8 w-full">
        <h3 className="text-2xl font-semibold mb-5">Choose a vericle</h3>
        <div className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
          ></img>
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              SwiftGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹143.32</h2>
        </div>
        <div className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          ></img>
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs">Affordable, motocycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹59</h2>
        </div>
        <div className="flex border-2 border-gray-50 active:border-black mb-2 rounded-xl  w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          ></img>
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              SwiftAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs">Affordable, auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹115</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
