const clock = document.querySelector("#clock");
const getClock = () => {
  const nowDate = new Date();
  const nowHour = String(nowDate.getHours()).padStart(2, "0");
  const nowMin = String(nowDate.getMinutes()).padStart(2, "0");
  const nowSecond = String(nowDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${nowHour}:${nowMin}:${nowSecond}`;
};
getClock();
setInterval(getClock, 1000);
