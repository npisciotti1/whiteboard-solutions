function race(v1, v2, g) {
  var secs = 0, mins = 0, hours = 0, result = [];

  var speedDiff = v2 - v1;
  var timeInHours = speedDiff / g;
  var timeInSeconds = Math.floor(timeInHours * 3600);
  console.log('time in seconds:', timeInSeconds);

  while(timeInSeconds >= 60) {
    if(mins >= 60) {
      hours++
      mins -= 60;
    }
    timeInSeconds -= 60;
    mins++;
  }
  secs += timeInSeconds;
  result[0] = hours, result[1] = mins, result[2] = secs;
  return result;
}
