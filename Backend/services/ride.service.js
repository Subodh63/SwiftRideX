const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');


async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }
    const distanceTime = await mapService.getDistanceTime(pickup, destination);
 
 const baseFare = {
      auto: 30,
      car: 50,
      motorcycle: 20
 };
 
 const perKmRate = {
      auto: 10,
      car: 15,
      motorcycle: 8
 };
 
 const perMinuteRate = {
      auto: 1,
      car: 2,
      motorcycle: 1.5
 };
 
 const fare = {
      auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + (distanceTime.duration.value * perMinuteRate.auto),
      car: baseFare.car + (distanceTime.distance.value * perKmRate.car) + (distanceTime.duration.value * perMinuteRate.car),
      motorcycle: baseFare.motorcycle + (distanceTime.distance.value * perKmRate.motorcycle) + (distanceTime.duration.value * perMinuteRate.motorcycle)
 };
 
 return fare;
 
 }

module.exports.createRide = async ({
    user,pickup,destination,vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, and destination are required');
    }

    const fare = await getFare(pickup, destination);
    console.log(fare);

    const ride = new rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
        
    });
    return ride;
}

