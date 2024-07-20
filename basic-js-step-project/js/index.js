"use strict";

let body = document.body;
const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

let defaultCardsOrder = DATA


    function cardCreate(data) {

        let card = document.createElement('div');
        card.classList.add('trainer');


        let trainerImg = document.createElement('img');
        trainerImg.classList.add('trainer__img');
        trainerImg.src = data.photo;
        card.appendChild(trainerImg);


        let trainerName = document.createElement('p');
        let fullName = `${data["first name"]} ${data["last name"]}`;
        trainerName.textContent = fullName;
        trainerName.classList.add('trainer__name');
        card.appendChild(trainerName);


        let trainerExp = document.createElement('p');
        trainerExp.classList.add('trainer__exp');
        trainerExp.style.display = 'none';
        trainerExp.textContent = data.experience;
        card.appendChild(trainerExp);


        let trainerSpec = document.createElement('p');
        trainerSpec.classList.add('trainer__spec');
        trainerSpec.style.display = 'none';
        trainerSpec.textContent = data.specialization;
        card.appendChild(trainerSpec);


        let trainerDesc = document.createElement('p');
        trainerDesc.classList.add('trainer__desc');
        trainerDesc.style.display = 'none';
        trainerDesc.textContent = data.description;
        card.appendChild(trainerDesc);


        let trainerCateg = document.createElement('p');
        trainerCateg.classList.add('trainer__categ');
        trainerCateg.style.display = 'none';
        trainerCateg.textContent = data.category;
        card.appendChild(trainerCateg);


        const showMore = document.createElement('button');
        showMore.classList.add('trainer__show-more');
        showMore.textContent = 'ПОКАЗАТИ';
        showMore.type = 'button';
        showMore.addEventListener('click', () => {
			body.style.overflow = 'hidden';
			modalCreate(data)
			function modalCreate(data) {
				const modal = document.createElement('div');
				modal.classList.add('modal')
				body.appendChild(modal)

				const modalWrapper = document.createElement('div');
				modalWrapper.classList.add('modal__body')
				modal.appendChild(modalWrapper);

				const modalImg = document.createElement('img');
				modalImg.classList.add('modal__img');
				modalImg.src = data.photo;
				modalWrapper.appendChild(modalImg);

				const modalDescContainer = document.createElement('div');
				modalDescContainer.classList.add('modal__description')
				modalWrapper.append(modalDescContainer);

				trainerName = document.createElement('p');
				let fullName = `${data["first name"]} ${data["last name"]}`;
				trainerName.textContent = fullName;
				trainerName.classList.add('modal__name');
				modalDescContainer.appendChild(trainerName);

				trainerCateg = document.createElement('p');
				trainerCateg.classList.add('modal__point--category');
				trainerCateg.textContent = `Категорія: ${data.category}`;
				modalDescContainer.appendChild(trainerCateg);

				trainerExp = document.createElement('p');
				trainerExp.classList.add('modal__point--experience');
				trainerExp.textContent = `Досвід: ${data.experience}`;
				modalDescContainer.appendChild(trainerExp);

				trainerSpec = document.createElement('p');
				trainerSpec.classList.add('modal__point--specialization');
				trainerSpec.textContent = `Напрям тренера: ${data.specialization}`;
				modalDescContainer.appendChild(trainerSpec);

				trainerDesc = document.createElement('p');
				trainerDesc.classList.add('modal__text');
				trainerDesc.textContent = data.description;
				modalDescContainer.appendChild(trainerDesc);

				const closingBtn = document.createElement('button');
				closingBtn.classList.add('modal__close');
				modal.appendChild(closingBtn)

				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('width', '30');
				svg.setAttribute('height', '30');
				svg.setAttribute('viewBox', '0 0 72 72')
				closingBtn.appendChild(svg);

				const path = document.createElementNS('http://www.w3.org/2000/svg','path');
				path.setAttribute('d', 'M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z')
				svg.appendChild(path)

				closingBtn.addEventListener('click', () => {
					modal.style.display = 'none'; 
					document.body.style.overflow = 'visible';
				});
				return modal;
				
			}
			
		});
        card.appendChild(showMore);

        return card;
    }

    const cardsList = document.querySelector('.trainers-cards__container');

    DATA.forEach((data) => {
        const listCard = document.createElement('li');
        const newCard = cardCreate(data);
        listCard.appendChild(newCard);
        cardsList.appendChild(listCard);
    });

	defaultCardsOrder = JSON.stringify(DATA);
	localStorage.setItem('data', defaultCardsOrder);
	

	const sortingNavbar = document.querySelector(".sorting");
	const sideNavbar = document.querySelector('.sidebar');

	sortingNavbar.removeAttribute('hidden');
	sideNavbar.removeAttribute('hidden');

		function sortingsTreners  (button, data=DATA)  {
		let sortingButtons = document.querySelectorAll('.sorting__btn');
		sortingButtons.forEach(button => button.classList.remove('sorting__btn--active'));
	
	
	button.classList.add('sorting__btn--active')

	function sortingByExpereince() {

		if (button.id === 'button-3') {
			const sortedByExp = data.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
			cardsList.innerHTML = ' ';

			data.forEach((data) => {
				const listCard = document.createElement('li');
				const newCard = cardCreate(data);
				listCard.appendChild(newCard);
				cardsList.appendChild(listCard);
			});
		} 
	}

	 sortingByExpereince()


		function sortedByUkAlphabet () {
			 if (button.id === 'button-2') {
			
				const sortedByName = data.sort((a, b) => {
					const nameA = a['first name'].toLowerCase();
					const nameB = b['first name'].toLowerCase();
					if (nameA < nameB) return -1;
					if (nameA > nameB) return 1;
					return 0;
				  });
			
			cardsList.innerHTML = ' ';

			data.forEach((data) => {
				const listCard = document.createElement('li');
				const newCard = cardCreate(data);
				listCard.appendChild(newCard);
				cardsList.appendChild(listCard);
			});
		}
		
		
	} 
	sortedByUkAlphabet()
	
	if (button.id === 'button-1') {
		cardsList.innerHTML = ' ';
		let restoredOrder = localStorage.getItem('data');
		let defaultCardsOrder = JSON.parse(restoredOrder);
		if (data < defaultCardsOrder) {
			defaultCardsOrder = data	
		}
		defaultCardsOrder.forEach((data) => {
			const listCard = document.createElement('li');
			const newCard = cardCreate(data);
			listCard.appendChild(newCard);
			cardsList.appendChild(listCard);
		});
	}
}
function sortingTypes() {
	let sortingButtons = document.querySelectorAll('.sorting__btn');

sortingButtons.forEach((button, index) => {
	button.id = `button-${index + 1}`

	button.addEventListener('click',(e) => sortingsTreners(button) )
})
}

sortingTypes()


function firstListener() {
	let DirectionInputs = document.querySelectorAll('input[name="direction"]');
	
	DirectionInputs.forEach(input => {
		input.addEventListener('click', () => {
			DirectionInputs.forEach(i => i.removeAttribute('checked')); // Удаляем атрибут checked у всех
			input.setAttribute('checked', 'checked'); // Устанавливаем атрибут checked только у нажатого
		});
	});
}

firstListener()

function secondListener() {
	let CategoryInputs = document.querySelectorAll('input[name="category"]');
	
	CategoryInputs.forEach(input => {
		input.addEventListener('click', () => {
			CategoryInputs.forEach(i => i.removeAttribute('checked')); // Удаляем атрибут checked у всех
			input.setAttribute('checked', 'checked'); // Устанавливаем атрибут checked только у нажатого
		});
	});
}

secondListener()

let submitButton = document.querySelector('.filters__submit');
submitButton.type = 'button'

submitButton.addEventListener('click' , (e) => {
	let firstFieldOfInput = document.querySelector('input[name="direction"]:checked');
	let secondFieldOfInput = document.querySelector('input[name="category"]:checked');
	let label1 = document.querySelector(`label[for="${firstFieldOfInput.id}"]`);

	let label2 = document.querySelector(`label[for="${secondFieldOfInput.id}"]`);
	let button = document.querySelector('.sorting__btn--active');
	let labelText1 = label1.textContent.trim()
	let labelText2 = label2.textContent.trim()

	let result = DATA;
	console.log(label1)

if (labelText1 !== 'ВСІ') {
	result = result.filter((user) => {
		user.specialization.toUpperCase();
		label1.textContent.trim()
		// console.log(user.specialization.toUpperCase());
	
		if (user.specialization.toUpperCase() === labelText1) {
			return true
		}
	})
} 


if (labelText2 !== 'ВСІ') {
	result = result.filter((user) => {
		user.category.toUpperCase();
		label2.textContent.trim()
		// console.log(user.category);
	
		if (user.category.toUpperCase() === labelText2) {
			return true
		}
	})
} 
	sortingsTreners(button, result)
})
