window.onload = function(){dates();}
var pwd = document.getElementById('password')
  email = document.getElementById('email'),
  image = document.getElementById('eye'),
  pwd = document.getElementById('password'), dark=0;
function dates(){
   let d = new Date(),
   year = d.getFullYear(),
   month = d.getMonth(),
   day = d.getDay(),
   hour = d.getHours(),
   minute = d.getMinutes(),
   second = d.getSeconds();
  month = process(month);
  day = process(day);
  hour = process(hour);
  minute = process(minute);
  second = process(second);
  var date = year + "/" + month + "/" + day,
  time = hour + ":" + minute + ":" + second;
  document.getElementById('tday').innerHTML = date;
  document.getElementById('time').innerHTML = time;
  setInterval("dates()", 1000);
}
function process(a){
  if (a<10){
    a = "0"+a;
  }
  return a;
}
function eyes(){
  if (pwd.type === "password"){
    image.src = "images/eye-open.png";
    pwd.type = "text";
  } else {
    pwd.type = "password";
    image.src = "images/eye-closed.png";
  }
}
function changeTheme(){
  var body = document.getElementById('body'),
  fieldset = document.getElementById('fieldset'),
  dc = document.getElementById('data-container');
  if (dark == 0){
    dark = 1;
    theme.src = "images/dark.png";
    body.style = "background-image: linear-gradient(to right, #000000, #000000);";
    dc.style = "background-color: #000000;";
    fieldset.style = "background-image: linear-gradient(to right, #000000, #000000); border: 2px solid #ffffff; box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;";
  } else {
    dark = 0
    theme.src = "images/light.png";
    body.style = "background-image: linear-gradient(to right, #2193b0, #6dd5ed);";
    fieldset.style = "background-image: url('images/bgm.png'); background-size: cover;";
    dc.style = "background-color: #ffffff;";
  }
}
