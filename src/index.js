import './style.css';
import loadPage from './home';
import createMenu from './menu';
import contacts from './contacts';

const content = document.getElementById('content');

const btnContainer = document.createElement('div');
btnContainer.setAttribute('id', 'btn-container');
content.appendChild(btnContainer);

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';

const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contacts';

btnContainer.append(homeBtn, menuBtn, contactBtn);

const buttons = document.getElementsByTagName('button');
for (let btn of buttons) {
  btn.classList.add('btn');
}

loadPage();

menuBtn.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  createMenu();
});

homeBtn.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  loadPage();
});

contactBtn.addEventListener('click', () => {
  content.removeChild(content.lastChild);
  contacts();
});

export { content as content };
