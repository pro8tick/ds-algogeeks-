var angleClock = function (hour, minutes) {
  let minuteAngel = minutes * 6;
  let hourAngel = ((hour * 60 + minutes) * 1) / 2;
  let angel = Math.abs(hourAngel - minuteAngel);
  return Math.min(360 - angel, angel);
};
