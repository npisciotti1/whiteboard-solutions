//The premise for this questions is as follows: given two velocities (v1 and v2), find the amount
//of time needed for a person running at "v2" velocity to catch up with a person running at "v1" //velocity who has a lead of "g" feet. Velocity is expressed in ft/hour. The output needs to be
//formatted as such --> [hrs, mins, secs]. Seconds can be rounded to the nearest full number.

function race(v1, v2, g) {
  if(v1 <= 0 || v2 <= 0 || g <= 0 || v2 <= v1) return null;
  var secs = 0, mins = 0, hours = 0, result = [];

  var speedDiff = v2 - v1;
  var timeInHours = g / speedDiff;
  var timeInSeconds = Math.floor(timeInHours * 3600);

  while(timeInSeconds >= 60) {
    if(mins >= 60) hours++, mins = 0;
    timeInSeconds -= 60;
    mins++;
  }
  if(mins === 60) hours++, mins = 0;
  secs += timeInSeconds;
  result[0] = hours, result[1] = mins, result[2] = secs;
  return result;
}
