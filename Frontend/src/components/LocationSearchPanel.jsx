import React from "react";

const LocationSearchPanel = () => {
  //sample array for location
  const location = [



    
  ];

  return (
    <div>
      {/* This is the temp Location */}
      {/* First Location */}
      <div className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start">
        <h2 className="bg-[#eee] h-7 flex items-center justify-center w-8 rounded-full">
          <i className="ri-map-pin-fill text" />
        </h2>
        <h4 className="font-medium">
          Chandhigarh University <p>NH-05, Ludhiana, Higway, Chandhigarh</p>
          State, Punjab 140413
        </h4>
      </div>

      {/* Second Location */}
      <div className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start mt-4">
        <h2 className="bg-[#eee] h-7 flex items-center justify-center w-8 rounded-full">
          <i className="ri-map-pin-fill text" />
        </h2>
        <h4 className="font-medium">
          Amity University <p>Sector-125, Noida, Uttar Pradesh</p>
          State, 201313
        </h4>
      </div>

      {/* First Location */}
      <div className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start">
        <h2 className="bg-[#eee] h-7 flex items-center justify-center w-8 rounded-full">
          <i className="ri-map-pin-fill text" />
        </h2>
        <h4 className="font-medium">
          Chandhigarh University <p>NH-05, Ludhiana, Higway, Chandhigarh</p>
          State, Punjab 140413
        </h4>
      </div>

      {/* Second Location */}
      <div className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start mt-4">
        <h2 className="bg-[#eee] h-7 flex items-center justify-center w-8 rounded-full">
          <i className="ri-map-pin-fill text" />
        </h2>
        <h4 className="font-medium">
          Amity University <p>Sector-125, Noida, Uttar Pradesh</p>
          State, 201313
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
