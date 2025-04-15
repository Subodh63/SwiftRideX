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
      auto: baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto),
      car: baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car),
      motorcycle: baseFare.motorcycle + ((distanceTime.distance.value / 1000) * perKmRate.motorcycle) + ((distanceTime.duration.value / 60) * perMinuteRate.motorcycle)
 };
 
 return fare;
 
 }

module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    try {
        if (!user || !pickup || !destination || !vehicleType) {
            throw new Error('User, pickup, and destination are required');
        }

        const fare = await getFare(pickup, destination);
        console.log(fare);

        const distanceTime = await mapService.getDistanceTime(pickup, destination);

        const ride = await rideModel.create({
            user,
            pickup,
            destination,
            fare: fare[vehicleType],
            // distance: distanceTime.distance.value,
            // duration: distanceTime.duration.value,
            userId: user._id,
        });
        return ride;
    } catch (error) {
        console.error('Error creating ride:', error.message);
        throw new Error('Internal server error');
    }
};

