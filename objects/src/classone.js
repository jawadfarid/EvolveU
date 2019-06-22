// 5. Create a class in JavaScript for interacting with basic geolocation data. Include a function to
// calculate distance between points. Any other functions included are up to you. Your code should

// not require any dependencies or geolocation services (assume the data is collected elsewhere
// in the application and passed to this class).



class Location {
	constructor(longitude, latitude) {
		this.longitude = longitude;
		this.latitude = latitude;
		this.R = 6371; // kilometres
	
	}

	distance(location) {
		let y = this.degreesToDistance(this.longitude,this.latitude)

		this.longitude = y[0]
		this.latitude = y[1]

		let x = this.degreesToDistance(location.longitude,location.latitude)
		location.longitude = x[0]
		location.latitude = x[1]
		
		let phi1 = (Math.PI/180) * (this.latitude); 
		let phi2 = (Math.PI/180) * (location.latitude);
		// let deltaPhi = (this.location.latitude-this.latitude).toRadians();
		let deltaPhi = (location.latitude-this.latitude) * (Math.PI/180);
		let deltaLambda = (location.longitude-this.longitude) * (Math.PI/180);

		let a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
		        Math.cos(phi1) * Math.cos(phi2) *
		        Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
		let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		console.log(this.R)
		let d = this.R * c;

		return Number(d.toFixed(1))
		// return [this.longitude,this.latitude]
		// return [location.longitude,location.latitude]	
	}

	myConvert(degrees, minutes, seconds, direction) {
		let dist = Number(degrees) + Number(minutes)/60 + Number(seconds)/(60*60);
		if (direction == "S" || direction == "W") { 
			dist = dist * -1; 
		}
		return dist;
	}

	degreesToDistance(input1,input2) {
		let input1Split = input1.split(/[^\d\w]+/); //assuming that the longitudes and latitudes values are coming in "5°42'53'W" format
		let input2Split = input2.split(/[^\d\w]+/);
		let longitude_1 = this.myConvert(input1Split[0], input1Split[1], input1Split[2], input1Split[3]);
	    let latitude_1 = this.myConvert(input2Split[0], input2Split[1], input2Split[2], input2Split[3]);
	    return [longitude_1,latitude_1]
	}
}

export default Location;