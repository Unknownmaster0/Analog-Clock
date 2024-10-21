setInterval(() => {
  d = new Date();
  console.log(d);
  ht = d.getHours() % 12;
  mt = d.getMinutes();
  st = d.getSeconds();

  // now we have to do the rotation of each hands.
  hrot = 30 * ht + (mt * 0.5);
  mrot = 6 * mt;
  srot = 6 * st;

  document.querySelector(".hour").style.transform = `rotate(${hrot}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${mrot}deg)`;
  document.querySelector(".second").style.transform = `rotate(${srot}deg)`;
}, 1000);
