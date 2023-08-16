import { update, user, isLocal, displayy, displayPhoto } from "../main.js";

/*-------------------------------
ეს სახელს ინარჩუნებს რეფრეშისას
--------------------------------*/
const userName = document.querySelector('#name-disp');
displayy(userName, user.name);
/*-------------------------------
ეს გვარს ინარჩუნებს რეფრეშისას
--------------------------------*/
const userLastName = document.querySelector('#lastname-disp');
displayy(userLastName, user.lastname);
/*-------------------------------
ეს ფოტოს ინარჩუნებს რეფრეშისას
--------------------------------*/
const img = document.getElementById("previewImage");
displayPhoto (img, user.userPhoto);
/*
ეს მეილს ინარჩუნებს რეფრეშისას
*/
const emailDisplay = document.querySelector("#mail-address");
displayy (emailDisplay, user.email);
/*
ეს ტელეფონს ინარჩუნებს რეფრეშისას
*/
const userPhone = document.querySelector("#phone-num");
displayy (userPhone, user.phonenumber);
/*
ეს აპლიკანტის შესახებ ნფორმაციას ინარჩუნებს რეფრეშისას
*/
const userInfo = document.querySelector("#about-info-display");
displayy (userInfo, user.abuotme);