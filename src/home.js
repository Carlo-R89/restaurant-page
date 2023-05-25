import Picture from './images/trattoria.jpg';

function loadPage() {
  const content = document.getElementById('content');
  const home = document.createElement('div');
  home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = 'Trattoria Dal Goa';
  title.classList.add('title');

  const myImg = new Image();
  myImg.src = Picture;
  myImg.setAttribute('class', 'front-img');

  const description = document.createElement('p');
  description.innerText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  description.classList.add('paragraph');
  home.append(title, myImg, description);
  content.appendChild(home);
}

export default loadPage;
