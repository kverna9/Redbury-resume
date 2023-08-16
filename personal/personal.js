/*---------------------------------------------------
ეს არის მთავარი JS ფაილიდან ფუნქციების იმპორტი
-----------------------------------------------------*/
import { update, user, isLocal, displayPhoto } from "../main.js";

/*------------------------------------------------------
ესენი არის რეზიუმეს ინფორმაციის დაბეჭდვის გვერდის
დისფლეის თეგები, აქ უნდა ჩავყარო ინფუთიდან შემოტანილი
ინფორმაციები, ტექსტები
--------------------------------------------------------*/
const userName = document.querySelector('#name-disp');
const userLastName = document.querySelector('#lastname-disp');
const emailDisplay = document.querySelector("#mail-address");
const userPhone = document.querySelector("#phone-num");
const userInfo = document.querySelector("#about-info-display");

/*-------------------------------------------------------
ესენი არის ინფუთები, რომლებიც მაქვს დაჭერილი და აქედან
ვიღებ ინფუთში შესულ მონაცემებს
--------------------------------------------------------*/
const namee = document.querySelector("#name");
const lastnamee = document.querySelector("#lastname");
const userEmail = document.querySelector('#user-email');
const userPhoneinput = document.querySelector('#phonenumber');
const userAboutInfo = document.querySelector('#aboutme');

/*--------------------------------------------------------
------------------ერორების ელემენტები--------------------
---------------------------------------------------------*/
// const errorName = document.querySelector("#errorName");
// const errorLastName = document.querySelector("#errorLastName");
/*--------------------------------------------------------
ესენი არის ფუნქციები რომლებიც ინფუთიდან ღებულობენ
ველიუებს და გადააქვთ მეორე გვერდზე, ასეთ ფუნქციებს
დავწერ ყველა ინფუთბისთვის და ქლიქზე დავაყენებ და მივიღბ
რეზიუმეს გვერდზე შეყვანილ ინფორმაციებს
----------------------------------------------------------*/
// function errorname () {
//     if (namee.value.trim() === "" || namee.value.trim().length < 2) {
//         errorName.textContent = "მინიმუმ 2 ასო, ქართული ასოები";
//         return false;
//     }
//     errorName.textContent = "";
//     return true;
   
// };

    
/*------------------------------------------------------------
ესენი არიან ლისენერები, უსმენენ ინფუთებს პირადი ინფორმაციის
გვერდზე და ანახლებენ მთავარ JS ფაილში იუზერ ობიექტს update
ფუნქციის გამოძახებით ლისენერშივე
-------------------------------------------------------------*/
//Name
namee.addEventListener('input', () => {
    update("name", namee.value);
    
})

//LastName
lastnamee.addEventListener('input', () => {
    update("lastname", lastnamee.value);
});

// //Email
userEmail.addEventListener('input', () => {
    update("email", userEmail.value);
});

// //Phone
userPhoneinput.addEventListener('input', () => {
    update("phonenumber", userPhoneinput.value);
});
// //Phone
userAboutInfo.addEventListener('input', () => {
  update("abuotme", userAboutInfo.value);
});

  /*-----------------------------------------------------------
ეს ფუნქცია მთლიანად ეხება ფოტოს ატვირთვას და რეფრეშისას
ფოტოს დატოვებას ეკრანზე, აქ არის დაჭერილი ფოტოს დისფლეის
თეგიც და ატვირთვის და იუზერ ობიექტის განახლებაც
-------------------------------------------------------------*/
const img = document.getElementById("previewImage");
displayPhoto (img, user.userPhoto); //ეს ფუნქცია ინარჩუნებს რეფრეშზე ფოტოს
let x = "";
function uploadPhoto() {
  // Get the input element and selected file
  const input = document.getElementById("file");
  const file = input.files[0];
  if (file) {
    // Create a FileReader object to read the file
    const reader = new FileReader();
    // Set up the FileReader onload event
    reader.onload = function(e) {
      // Get the image element and set its source to the data URL
      x = e.target.result;
      img.src = x;
      update("userPhoto", x);
    };
    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
}


/*----------------------------------------------------------
ეს სთეითმენთი რეზიუმეს გვერდზე ინახავს ლოკალ სთორიჯიდან
განახლებული იუზერ ობიექტიდან წამოღებული ინფორმაციას და
რეფრეშისას ინარჩუნებს ეკრანზე
-----------------------------------------------------------*/
 if (isLocal) {
  namee.value = user.name;
  userName.innerHTML = user.name;
  lastnamee.value = user.lastname;
  userLastName.innerHTML = user.lastname;    
  userEmail.value = user.email;
  emailDisplay.innerHTML = user.email;
  userPhoneinput.value = user.phonenumber;
  userPhone.innerHTML = user.phonenumber
  userAboutInfo.value = user.abuotme;
  userInfo.innerHTML = user.abuotme
}






/*----------------------------------------------------
ეს არის ქლიქის ფუნქვია ნექსთ ღილაკისთვის და აქ უნდა
დავაყენი ინფუთებიდან ინფორმაციის წამოღების ფუნქციები
------------------------------------------------------*/
const btn = document.querySelector('#next-btn');
btn.addEventListener('click', 
() => {
  /*------------------------------------------------------
  ესენი ქლიქისას ამატებენ ინფუთებიდან მონაცემებს რეზიუმეს
  გვერდზე, სადაც ჩანს შეყვანი ინფორმაცია და ფოტო
  -------------------------------------------------------*/
    userName.innerHTML = user.name;
    userLastName.innerHTML = user.lastname;
    document.location.href = "../experience page/experience.html";
    
    /*-----------------------------------------------------
    ეს არის ფოტოს ატვირთვის ფუნქცია ამავე ფაილში სემოთ
    დაწერილი და აქ ქლიქისას ამატებს ფოტოს რეზიუმეს
    გვერდზე, სადაც ჩანს შეყვანი ინფორმაცია და ფოტო
    ------------------------------------------------------*/
    uploadPhoto();
}

)

