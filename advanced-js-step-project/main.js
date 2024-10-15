let token = "7e803021-6553-4d18-82e2-68c98e41c8df";

let OpenModal = document.querySelector("#log-in");
let createVisit = document.querySelector("#create-visit");
let modalLogIn = document.querySelector(".Modal");
let modalClose = document.querySelector("#close-modal");
let VisitClose = document.querySelector("#close-Visit");
let loginButton = document.querySelector("#logIn");
let modalVisit = document.querySelector("#modal-of-visit");

let dynamicContent = document.querySelector("#dynamic-content");
let OptionsSelector = document.querySelector("#doctors");
let fullNameInp = document.querySelector("#fullName-Inp");
let Urgency = document.querySelector("#Urgency");
let usersAge = document.querySelector("#users-age");
let bloodpressure = document.querySelector("#bloodPressore");
let cardsContainer = document.querySelector(".cards");

class Modal {
  constructor(title, email, password) {
    (this.title = title), (this.email = email), (this.password = password);
  }
}

function LogInRequest() {
  let inputEmail = document.querySelector("#emailInp").value;
  let inputPassword = document.querySelector("#passwordInp").value;
  const user = new Modal(this.title, `${inputEmail} `, `${inputPassword}`);
  const { email, password } = user;
  const User = { email, password };

  console.log(User);
  try  {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    })
      .then((response) => response.text())
      .then((token) => console.log(token));
  
  
    if (token !== 0) {
      getAllCards();
    } else {
      throw new error();
    }
  } catch(error) {
    if (true) {
      console.log('You entered wrong data!')
      return 
    }
  }

  
}
loginButton.addEventListener("click", (e) => {
  e.preventDefault(), (modalLogIn.style.display = "none");
  if (true) {
    try {
      LogInRequest(),
        (OpenModal.style.display = "none"),
        (createVisit.style.display = "block");
    } catch (error) {
      modalLogIn.style.display = "block";
    }
  }
});

function closeModal() {
  modalClose.addEventListener("click", () => {
    modalLogIn.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.targer === modalLogIn) {
      modalLogIn.style.display = "none";
    }
  });
}
closeModal();

OpenModal.addEventListener("click", () => {
  modalLogIn.style.display = "block";
});

let createVisitBtn = document.querySelector("#create-visit");

createVisitBtn.addEventListener("click", () => {
  console.log("Event listener works!");
  modalVisit.style.display = "block";
});

class Visit {
  constructor(doctor, fullName, urgency, status) {
    (this.fullName = fullName),
      (this.doctor = doctor),
      (this.urgency = urgency);
      (this.status = status)
  }
}

class Cardiologist extends Visit {
  constructor(bloodPressure, diseases, age, ...args) {
    super(...args);
    (this.bloodPressure = bloodPressure),
      (this.diseases = diseases),
      (this.age = age);
  }
}

class Therapist extends Visit {
  constructor(age, ...args) {
    super(...args);
    this.age = age;
  }
}

class Dentist extends Visit {
  constructor(lastVisit, age, ...args) {
    super(...args);
    (this.lastVisit = lastVisit), 
    (this.age = age);
  }
}
function closeVisit() {
  VisitClose.addEventListener("click", () => {
    modalVisit.style.display = "none";
    console.log("Hello world");
  });
}

closeVisit();

function UpdateModalContent(option) {
  if (option === "Therapist") {
    dynamicContent.innerHTML = `
                   <div class="Therapist">
            <label class="Visit__label" for="">Enter your age</label>
                <input id="age" type="number">
           </div>
        `;
  } else if (option === "Dentist") {
    dynamicContent.innerHTML = `
            <div class="Dentist">
                <label class="Visit__label" for="">Date of the last visit</label>
                <input id="lastVisit" type="date">
                <label class="Visit__label" for="">Enter Your Age</label>
                <input id="age" type="number">
            </div>
        `;
  } else if (option === "Cardiologist") {
    dynamicContent.innerHTML = `
         <div class="cadrdiologist">
                <label class="Visit__label" for="">Normal Blood Pressure</label>
                <input id="bloodPressure" type="number">

                <label class="Visit__label" for="">Enter transferred diseases of the cardiovascular system</label>
                <input id="diseases" type="text">

                <label class="Visit__label" for="">Enter Your Age</label>
                <input id="age" type="number">

            </div>
        `;
  } else {
    dynamicContent.innerHTML = ` `;
  }
}

OptionsSelector.addEventListener("change", function () {
  const selectedOption = OptionsSelector.value;
  UpdateModalContent(selectedOption);
});

let cardCerater = document.querySelector("#create-card");
cardCerater.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("HELLO WORLD!");
  let doctor = document.querySelector("#doctors").value;
  let fullName = document.querySelector("#fullName-Inp").value;
  let urgency = document.querySelector("#Urgency").value;
  let age = document.querySelector("#age").value;
  let status = document.querySelector('#status').value;

  const baseVisInfo = new Visit(doctor, fullName, urgency, status);
  console.log(baseVisInfo);
  if (OptionsSelector.value === "Therapist") {
    function CreateTherapistVisit() {
      const createVisitToTherapist = new Therapist(
        age,
        doctor,
        fullName,
        urgency,
        status
      );
      fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createVisitToTherapist),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    }
    CreateTherapistVisit();
  } else if (OptionsSelector.value === "Dentist") {
    let age = document.querySelector("#age").value;
    function CreateDentistVisit() {
      let lastVisit = document.querySelector("#lastVisit").value;
      const createVisitToDantist = new Dentist(
        lastVisit,
        age,
        doctor,
        fullName,
        urgency,
        status
      );

      fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createVisitToDantist),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    }
    CreateDentistVisit();
  } else if (OptionsSelector.value === "Cardiologist") {
    let bloodPressure = document.querySelector("#bloodPressure").value;
    let diseases = document.querySelector("#diseases").value;
    function CreateCardiologistVisit() {
      const createVisitToCardiologist = new Cardiologist(
        bloodPressure,
        diseases,
        age,
        doctor,
        urgency,
        fullName,
        status
      );
      console.log(createVisitToCardiologist);
      fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(createVisitToCardiologist),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    }
    CreateCardiologistVisit();
  } else {
    throw new Error("I have bad news!");
  }
});
let cards = [];
function getAllCards() {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())

    .then((data) => {
     
      cards = [...data];
      cards.forEach((card) => {
        console.log(data.length)
        if (cardsContainer.length === 0) {
          cardsContainer.insertAdjacentHTML('beforeend', `
            <h2>You don't have any cards yet!</h2>
            `)

        } else {
          console.log(cards.length)
          cards.forEach((card) => {

            cardsContainer.insertAdjacentHTML(
              "beforeend",
              `
                <div data-id="${card.id}" id="${card.id}" class="card">
                    <div class="top-of-card">
                        <title class="fullName">${card.fullName}</title>
                        <img id="delet-card-btn" src="imgs/166475.png" alt="DELEAT">
                    </div>
                    <p class="doctor-card">${card.doctor}</p> 
                    <p class="variable-card" style="display: none;">${card.doctor}</p> 
                    <p class="variable-card" style="display: none;">${card.urgency}</p>
                    <button data-id="${card.id}" id="full-info" class="show-more">Show more</button>
                  </div>
                            `
            );
            function showMore(card) {
              let cardsSection = document.querySelector(".cards")
      
              cardsSection.addEventListener('click', (e) => {
                
                let Allbtns = document.querySelectorAll('.show-more');
                
      
                Allbtns.forEach((btn) => {
      
                    if (e.target.dataset.id  == btn.dataset.id) {
      
                     let isOpenedShowMore = false;

                     if (isOpenedShowMore === false) {
                      console.log(card)
                      const CardDiv = document.querySelector(`[data-id="${btn.dataset.id}"]`);
                      
                      console.log(card.doctor)
                      if (card.doctor === 'Dentist') {
                        console.log("this DOC is: ", card.doctor)
                      CardDiv.insertAdjacentHTML('beforeend', `
                        <p class="additoinalInf">Urgency: ${card.urgency}</p>
                        <p class="additoinalInf">Age: ${card.age}</p>
                        <p class="additoinalInf">Last Visit: ${card.lastVisit}</p>
                        `);
                        isOpenedShowMore = true
                     } else if (card.doctor === 'Therapist') {
                      CardDiv.insertAdjacentHTML('beforeend', `
                        <p class="additoinalInf">Urgency: ${card.urgency}</p>
                        <p class="additoinalInf">Age: ${card.age}</p>
                        <p class="additoinalInf">Status: ${card.status}</p>
                        `);
                        isOpenedShowMore = true
                     } else if (card.doctor === 'Cardiologist') {
                      CardDiv.insertAdjacentHTML('beforeend', `
                        <p class="additoinalInf">Urgency: ${card.urgency}</p>
                        <p class="additoinalInf">Age: ${card.age}</p>
                        <p class="additoinalInf">Bloodpressure: ${card.bloodPressure}</p>
                        <p class="additoinalInf">Diseases: ${card.diseases}</p>
                        <p class="additoinalInf">Status: ${card.status}</p>
                        `);
                        isOpenedShowMore = true
                     }
                     isOpenedShowMore = true
                     console.log(isOpenedShowMore)
                    } 
                     if (isOpenedShowMore === true) {
                      btn.remove()
                     }
                    }
                  }) 
                  
                
              })
            }
      
            showMore(card)

            function filterVisits(cards) { 
              const submitBtn = document.querySelector('.submit');
              const cardsContainer = document.querySelector('.cards');
              console.log(cardsContainer);
            
              submitBtn.addEventListener('click', (e) => {
                cardsContainer.innerHTML = ''; 
                console.log('Listener Works!');
                console.log(cards);
            
                
                const urgencyFilter = document.querySelector('[name="urgency"]').value;
                const statusFilter = document.querySelector('[name="status"]').value;
            
                console.log(urgencyFilter, statusFilter); 
            
                
                const filteredCards = cards.filter(card => {
                  return (!urgencyFilter || card.urgency === urgencyFilter) &&
                         (!statusFilter || card.status === statusFilter);
                });
            
                
                displayResults(filteredCards);
              });
            }

            function displayResults(filteredCards) {
              cardsContainer.innerHTML = ''; // Очищаем контейнер
          
              filteredCards.forEach(card => {
                
                cardsContainer.insertAdjacentHTML(
                  "beforeend",
                  `
                    <div data-id="${card.id}" id="${card.id}" class="card">
                        <div class="top-of-card">
                            <title class="fullName">${card.fullName}</title>
                            <img id="delet-card-btn" src="imgs/166475.png" alt="DELEAT">
                        </div>
                        <p class="doctor-card">${card.doctor}</p> 
                        <p class="variable-card" style="display: none;">${card.doctor}</p> 
                        <p class="variable-card" style="display: none;">${card.urgency}</p>
                        <button data-id="${card.id}" id="full-info" class="show-more">Show more</button>
                      </div>
                                `
                );
              });
            }

            filterVisits(cards)
          });
        }

      });
      console.log(cardsContainer)




      function DeleatCard() {
        document.querySelectorAll('.card').forEach((card) => {
          
          let CardId = card.id; 
          card.setAttribute('data-id', CardId); 
      
          
          const ButtonClose = card.querySelector('#delet-card-btn');

          if (ButtonClose) {
            ButtonClose.setAttribute('data-id', CardId)
          } else {
            console.error('Кнопка с ID #full-info не найдена в карточке:', card);
          }
        
          ButtonClose.addEventListener('click', () => {
            fetch(`https://ajax.test-danit.com/api/v2/cards/${CardId}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${token}`
              },
            })
            .then(resoponse => {
              if (resoponse.ok) {
                card.remove();
                console.log(`Card with ID ${CardId} has been successfully deleated.`);
              } else {
                console.error(`Cant deleat this card ${CardId}`);
              }
            })
          })
        })
      }
      DeleatCard()
    });
}