setInterval(()=>{
  d=new Date();
  hoursT=d.getHours();
  minutesT=d.getMinutes();
  secondsT=d.getSeconds();
  hrotation=30*hoursT + minutesT/2;
  mrotation=6*minutesT;
  srotation=6*secondsT;
  hour.style.transform=`rotate(${hrotation}deg)`;
  minute.style.transform=`rotate(${mrotation}deg)`;
  second.style.transform=`rotate(${srotation}deg)`;
},1000);