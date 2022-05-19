// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

// Dynamic section
const speakers = [
  {
    name: 'Peter Obi',
    title: 'Ex-Governor',
    image: 'speaker1.jpg',
    bio: 'To you young people, take back your country, do not let your future to be toyed with.',
  },
  {
    name: 'Charlse Soludo',
    title: 'Governor',
    image: 'speaker2.jpg',
    bio: 'I believe a leader that cares for his people listens to his people.',
  },
  {
    name: 'Stella Oduah',
    title: 'House Member',
    image: 'speaker3.jpg',
    bio: 'The future depends on what we do in the present.',
  },
  {
    name: 'Okonjo Iweala',
    title: 'Minister of Education',
    image: 'speaker4.jpg',
    bio: 'The best way to predict the future is to create it.',
  },
  {
    name: 'Yemi Osibanjo',
    title: 'Head of Service',
    image: 'speaker8.jpg',
    bio: 'Nothing we do can change the past but everything we do can change the future.',
  },
  {
    name: 'Sophie Alakija',
    title: 'Minister of culture and tourism',
    image: 'speaker9.png',
    bio: 'Never let your fear decide your future.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/img/${speaker.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// Show more speackers
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);