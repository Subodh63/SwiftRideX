import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RideSwiftLogo from "../Images/SwiftRideX.png";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import ConfirmRide from "../components/ConfirmRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? "70%" : "0%",
      padding: panelOpen ? 24 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? 1 : 0,
      duration: 0.3,
    });
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanelOpen ? "translateY(0%)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanelOpen ? "translateY(0%)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [confirmRidePanelOpen]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0%)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? "translateY(0%)" : "translateY(100%)",
      duration: 0.3,
    });
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden z-10">
      {/* Map Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>

      {/* Logo */}
      <img
        className="w-16 absolute top-5 left-5 z-20"
        src={RideSwiftLogo}
        alt="RideSwift Logo"
      />

      {/* Main UI Panel */}
      <div className="flex flex-col justify-end h-full w-full absolute bottom-0 z-10">
        <div className="relative h-[30%] bg-white p-5 z-10">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 right-6 top-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold px-5">Find a trip</h4>
          <form
            onSubmit={submitHandler}
            className="mt-4 flex flex-col space-y-2 px-5"
          >
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eeeeee] rounded-xl px-8 py-2 border w-full text-lg"
              type="text"
              placeholder="Add a pick-up location"
            />
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

        {/* Location Search Panel */}
        <div
          ref={panelRef}
          className="bg-white overflow-hidden transition-all duration-300 ease-in-out"
          style={{ height: "0px", padding: "0px" }}
        >
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Selection Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-20 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full"
      >
        <VehiclePanel
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      {/* Confirm Ride Panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full"
      >
        <ConfirmRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>

      {/* Looking For Driver Panel */}
      <div
        ref={vehicleFoundRef}
        className="fixed z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      {/* Waiting For Driver Panel */}
      <div
        ref={waitingForDriverRef}
        className="fixed z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
