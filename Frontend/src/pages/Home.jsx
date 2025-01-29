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
    <div className="h-screen relative">
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
      <div className="flex flex-col justify-end h-full  right-0 top-0 left-0 W-full  absolute">
        <div className="relative h-[30%]  bg-white ">
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
            <div className="line absolute h-13 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>

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
    </div>
  );
};

export default Home;
