let users = [
    {
        name:"Ispir Grigoryan",
        age:"17",
        country:"Armenia",
        gender:"male",  
    },

    {
        name:"Julia Roberts",
        age:"32",
        country:"USA",
        gender:"female",  
    },

    {
        name:"Dmitriy Andrey",
        age:"40",
        country:"Russia",
        gender:"male",  
    },

    {
        name:"Silava de Maria",
        age:"50",
        country:"France",
        gender:"male",  
    },

    {
        name:"Anahit Kextikyan",
        age:"19",
        country:"Armenia",
        gender:"female",  
    },
];

let usersBox = document.querySelector("#users-box");
let searchButton = document.querySelector("#btn");
let searchText = document.querySelector("#myInput");
let filtersNav = document.querySelector("#filters-nav");
let updateFiltersBtn = document.querySelector("#update-filters");
let loginBtns = document.querySelectorAll("#login-nav");
let emailInput = document.querySelector("#email");

emailInput.addEventListener("keyup", function(){
    let emailMessage = documennt.querySelector("#email-message");
    if(emailInput.value.includes("@"))
    {
        emailMessage.innerHTML="Ok";
        emailMessage.style.color="white";
    }else {
        emailMessage.innerHTML = "invalid Email address";
        emailMessage.style.color = "red";
    }
 });
 

loginBtns[0].addEventListener("click", openHideLogin);
loginBtns[1].addEventListener("click", openHideLogin);

function openHideLogin()
{
    let loginBox = document.querySelector("#login-box");
    
  if(loginBox.style.display === '' || loginBox.style.display === 'none')

  {
    loginBox.style.display = 'block';
  }else{
    loginBox.style.display = 'none';
  }
}


updateFiltersBtn.addEventListener("click", function(){
    let currentCountry = document.querySelector("#country-filter").value.toLocaleLowerCase();
    let currentGender = document.querySelector("#gender-filter").value.toLocaleLowerCase();

    let filteredUsers = users.filter(function(user){
      return (user.country.toLocaleLowerCase().includes(currentCountry) && 
              user.gender.toLocaleLowerCase().includes(currentGender)   &&
              user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
      );

    });

    usersBox.innerHTML = "";

    for (user of  filteredUsers)
 {
     let userElement = document.createElement("DIV");
     userElement.classList.add("user-item");
     userElement.innerHTML = `
     <h2>${user.name}</h2>
     <p>Country: ${user.country}</p>
     <p>Age: ${user.age}</p>
     <p>Gender: ${user.gender}</p>
     `;
 
     usersBox.appendChild(userElement);
 }
 
});

filtersNav.addEventListener("click", function(){
    let filtersBox = document.querySelector("#filters");
  
    if(filtersBox.style.display === '' || filtersBox.style.display === 'none')
  
    {
      filtersBox.style.display = 'block';
    }else{
      filtersBox.style.display = 'none';
    }
  });

searchButton.addEventListener("click", function(){

    let filteredUsers = users.filter(function(user){
       return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());
    });
 
    usersBox.innerHTML = "";
 
    for (user of  filteredUsers)
 {
     let userElement = document.createElement("DIV");
     userElement.classList.add("user-item");
     userElement.innerHTML = `
     <h2>${user.name}</h2>
     <p>Country: ${user.country}</p>
     <p>Age: ${user.age}</p>
     <p>Gender: ${user.gender}</p>
     `;
 
     usersBox.appendChild(userElement);
 }
 
 });
 

for (user of users)
{
    let userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML =`
    <h2>${user.name}</h2>
    <p>Country: ${user.country}</p>
    <p>Age: ${user.age}</p>
    <p>Gender: ${user.gender}</p>
    `;

    usersBox.appendChild(userElement);
}