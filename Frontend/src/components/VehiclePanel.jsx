import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanelOpen }) => {
  const vehicles = [
    {
      name: "SwiftGo",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png",
      capacity: 4,
      time: "2 mins away",
      description: "Affordable, compact rides",
      price: "₹143.32",
      imgClass: "h-12",
    },
    {
      name: "Moto",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
      capacity: 1,
      time: "3 mins away",
      description: "Affordable, motorcycle rides",
      price: "₹59",
      imgClass: "h-10",
    },
    {
      name: "SwiftAuto",
      img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
      capacity: 3,
      time: "3 mins away",
      description: "Affordable, auto rides",
      price: "₹115",
      imgClass: "h-10",
    },
  ];

  return (
    <div className="relative">
      <button
        className="absolute top-1 left-1/2 transform -translate-x-1/2 text-gray-400"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </button>

      <h3 className="text-2xl font-semibold mb-6 text-center mt-8">
        Choose a vehicle
      </h3>

      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          onClick={() => setConfirmRidePanelOpen(true)}
          className="flex cursor-pointer border-2 border-gray-100 hover:border-black mb-4 rounded-xl w-full p-4 items-center justify-between transition-all duration-200"
        >
          <img src={vehicle.img} className={vehicle.imgClass} alt={vehicle.name} />
          <div className="ml-4 w-1/2">
            <h4 className="font-medium text-base flex items-center gap-1">
              {vehicle.name}{" "}
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <i className="ri-user-3-fill"></i>
                {vehicle.capacity}
              </span>
            </h4>
            <h5 className="font-medium text-sm text-gray-600">{vehicle.time}</h5>
            <p className="font-normal text-xs text-gray-500">{vehicle.description}</p>
          </div>
          <h2 className="text-lg font-semibold">{vehicle.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default VehiclePanel;
