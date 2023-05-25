import Pic2 from './images/trattoria2.jpg';
import { content } from './index';

function contacts() {
  const contactsContainer = document.createElement('div');
  contactsContainer.setAttribute('id', 'contacts');
  content.appendChild(contactsContainer);

  const heading = document.createElement('h1');
  heading.textContent = 'Contacts';
  heading.classList.add('title');

  const tel = document.createElement('h3');
  tel.textContent = 'Telefono: 0444 - 556677';

  const mail = document.createElement('h3');
  mail.textContent = 'fakemail@fakedomain.com';

  const facciata = new Image();
  facciata.src = Pic2;
  facciata.setAttribute('class', 'front-img');

  contactsContainer.append(heading, tel, mail, facciata);
}

export default contacts;
