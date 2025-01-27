import React, { useContext } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'

const CaptainHome = () => {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div>
      <h1>Welcome, {captain?.fullname?.firstname}!</h1>
      <p>CaptainHome</p>
    </div>
  )
}

export default CaptainHome