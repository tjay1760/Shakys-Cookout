const chefs = [
    {
      photo: "./images/gordon.jpg",
      name: "Gordon Ramsey",
      occupation: "Five star michelin Chef",
      about: "Gordon has featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    },
    {
      photo: "./images/michael-jordan.jpg",
      name: "Michael Jordan",
      occupation: "Retired Basketballer",
      about: "Michael Jordan has been featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    },
    {
      photo: "./images/wolfgang.jpg",
      name: "Wolfgang Puck",
      occupation: "Master chef",
      about: "Wolfgang Puck has been featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    },
    {
      photo: "./images/flay.jpeg",
      name: "Bobby Flay",
      occupation: "Master chef",
      about: "Bobby Flay has been featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    },
    {
      photo: "./images/oliver.jpeg",
      name: "Jamie Oliver",
      occupation: "Restaurateur",
      about: "Jamie Oliver has been featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    },
    {
      photo: "./images/fieri.jpeg",
      name: "Guy Fieri",
      occupation: "Restaurateur",
      about: "Guy Fieri has been featured in many tv shows and runs a string of great restaurants in the Uk and the US. Currently acknowledged as one of the wordstop chefs",
    }
  ];
  
  // Get the featured chefs list element
  const chefList = document.getElementById("chefs");
  console.log(chefList);
chefs.forEach(element => {
    const chefcard=document.createElement('li');
    chefcard.classList.add('chef-card');
    const chefcardimg=document.createElement('img');
    chefcardimg.classList.add('chef-card-img');
    const chefcardcontent=document.createElement('div');
    chefcardcontent.classList.add('chef-card-content');
    const chefcardname=document.createElement('h3');
    chefcardname.classList.add('chef-card-name');
    const chefcardoccupation=document.createElement('p');
    chefcardoccupation.classList.add('chef-card-occupation');
    const chefcardabout=document.createElement('p');
    chefcardabout.classList.add('chef-card-about');
    chefcardimg.src=element.photo;
    chefcardname.textContent=element.name;
    chefcardoccupation.textContent=element.occupation;
    chefcardabout.textContent=element.about;
    chefcard.appendChild(chefcardimg);
    chefcardcontent.appendChild(chefcardname);
    chefcardcontent.appendChild(chefcardoccupation);
    chefcardcontent.appendChild(chefcardabout);
    chefcard.appendChild(chefcardcontent);
    chefList.appendChild(chefcard);
});
//Hamburger menu
const openMenu= document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.drop-menu');
openMenu.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden-menu');
const partners=document.querySelector('.partners');


});

  const morebtn=document.querySelector('.more');
  morebtn.addEventListener('click', () => {
    morebtn.classList.toggle('hidden-menu');
    partners.classList.toggle('hidden-menu');
  });

