import React from "react";

const LocationSearchPanel = () => {
  console.log(props);
  //sample array for location
  const location = [
    "Chandhigarh University NH-05, Ludhiana, Higway, Chandhigarh State, Punjab 140413",
    "98f Amity University Sector-125, Noida, Uttar Pradesh State, 201313",
    "84f Chandhigarh University NH-05, Ludhiana, Higway, Chandhigarh State, Punjab 140413",
    "94f Amity University Sector-125, Noida, Uttar Pradesh State, 201313",
  ];

  return (
    <div>
      {/* This is the temp Location */}
      {location.map(function (elem, index) {
        <div
          key={index}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start"
        >
          <h2 className="bg-[#eee] h-7 flex items-center justify-center w-8 rounded-full">
            <i className="ri-map-pin-fill text" />
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>;
      })}
    </div>
  );
};

export default LocationSearchPanel;
