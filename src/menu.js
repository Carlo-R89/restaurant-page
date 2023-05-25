import { content } from './index';

const primi = [
  {
    name: "Spaghetti all'Amatriciana",
    prezzo: '9 €',
  },
  {
    name: 'Linguine al pesto',
    prezzo: '8 €',
  },
  {
    name: 'Risotto alla cacciatora',
    prezzo: '10 €',
  },
  {
    name: "Pennette all'Arrabbiata",
    prezzo: '8,5 €',
  },
  {
    name: 'Tagliatelle ai funghi',
    prezzo: '11 €',
  },
];

const secondi = [
  {
    name: 'Tagliata di manzo',
    prezzo: '11 €',
  },
  {
    name: 'Spezzatino',
    prezzo: '9 €',
  },
  {
    name: 'Platessa panata',
    prezzo: '9,5 €',
  },
  {
    name: 'Polpette al limone',
    prezzo: '8 €',
  },
];

function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  heading.classList.add('title');

  const primiContainer = document.createElement('div');
  primiContainer.setAttribute('id', 'primi');
  menu.appendChild(primiContainer);

  const secondiContainer = document.createElement('div');
  secondiContainer.setAttribute('id', 'secondi');
  menu.appendChild(secondiContainer);

  const primiPiatti = document.createElement('h2');
  primiPiatti.classList.add('piatti');
  primiPiatti.textContent = 'Primi';

  const secondiPiatti = document.createElement('h2');
  secondiPiatti.classList.add('piatti');
  secondiPiatti.textContent = 'Secondi';

  const func = arr => {
    const dishesList = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${arr[i].name} - ${arr[i].prezzo}`;
      dishesList.appendChild(li);
    }
    return dishesList;
  };

  const primiP = func(primi);
  const secondiP = func(secondi);

  primiContainer.append(primiPiatti, primiP);
  secondiContainer.append(secondiPiatti, secondiP);
  menu.append(heading, primiContainer, secondiContainer);
  content.appendChild(menu);
}

export default createMenu;
