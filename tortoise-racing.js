function race(v1, v2, g) {
  if(v1 <= 0 || v2 <= 0 || g <= 0) return null;
  if(v1 <= v2) return null;
  var secs = 0, mins = 0, hours = 0;

  var speedDiff = v2 - v1;
  var timeInHours = speedDiff / g;
  var timeInSeconds = timeInHours * 3600;
  while(timeInSeconds >= 60) {
    if(mins = 60) hours++; mins = 0;

}
