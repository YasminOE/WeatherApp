export default function loadPageStructure(){
  const body = document.querySelector('body');

  const header = document.createElement('header');
  header.classList.add('header');
  body.appendChild(header);


  const container = document.createElement('div');
  container.classList.add('container');
  header.appendChild(container);

  const a = document.createElement('a')
  a.href ='#';
  a.classList.add('logo');
  container.appendChild(a);

  const logoImg = document.createElement('img');
  logoImg.src='./assets/logo.png';
  logoImg.alt = 'logo';
  logoImg.setAttribute('style', 'width:160px; height:auto;');
  a.appendChild(logoImg);

  
  // create search view

  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search-view');
  searchDiv.setAttribute('data-search-view', '');
  container.appendChild(searchDiv);

  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('search-wrapper');
  searchDiv.appendChild(searchWrapper);

  const searchfield = document.createElement('input');
  searchfield.type = 'search';
  searchfield.name ='search';
  searchfield.classList.add('search-field');
  searchfield.placeholder= 'Search city ...';
  searchfield.autocomplete = 'off';
  searchfield.setAttribute('data-search-field', '')
  searchWrapper.appendChild(searchfield);
  
  const searchIcon = document.createElement('span');
  searchIcon.classList.add('material-symbols-outlined');
  searchIcon.textContent = 'search';
  searchWrapper.appendChild(searchIcon);
  
  
  const iconBtn = document.createElement('button');
  iconBtn.classList.add('icon-btn','leading-icon', 'has-state');
  iconBtn.setAttribute('aria-label', 'close search');
  iconBtn.setAttribute('data-search-toggler','');
  searchWrapper.appendChild(iconBtn);
  
  const iconBtnSpan = document.createElement('span');
  iconBtnSpan.classList.add('material-symbols-outlined');
  iconBtnSpan.textContent = 'arrow_back';
  iconBtn.appendChild(iconBtnSpan);

  const searchResult = document.createElement('div');
  searchResult.classList.add('search-result');
  searchResult.setAttribute('data-search-result', '');
  searchDiv.appendChild(searchResult);

  const listViewUl = document.createElement('ul');
  listViewUl.classList.add('view-list');
  listViewUl.setAttribute('data-search-list', '');
  searchResult.appendChild(listViewUl);

  const viewItemLi = document.createElement('li');
  viewItemLi.classList.add('view-item');
  listViewUl.appendChild(viewItemLi);

  const viewItemSpan = document.createElement('span')
  viewItemSpan.classList.add('material-symbols-outlined');
  viewItemSpan.textContent = 'location_on';
  viewItemLi.appendChild(viewItemSpan);

  const textDiv = document.createElement('div');
  viewItemLi.appendChild(textDiv);

  const itemTitle = document.createElement('p');
  itemTitle.classList.add('item-title'); 
  itemTitle.textContent = 'London';
  textDiv.appendChild(itemTitle);

  const itemSubtitle = document.createElement('p');
  itemSubtitle.classList.add('lable-2', 'item-subtitle');
  itemSubtitle.textContent = 'State of London, GB';
  textDiv.appendChild(itemSubtitle);

  const itemLinkA = document.createElement('a');
  itemLinkA.classList.add('item-link', 'has-state');
  itemLinkA.href='#';
  itemLinkA.setAttribute('data-search-toggler', '');
  viewItemLi.appendChild(itemLinkA);


  // Create header actions


  const headerActionsDiv = document.createElement('div');
  headerActionsDiv.classList.add("header-actions");
  container.appendChild(headerActionsDiv);

  const headerBtn = document.createElement('button');
  headerBtn.classList.add('icon-btn', 'has-state');
  headerBtn.setAttribute('aria-label', 'open search');
  headerBtn.setAttribute('data-search-toggler','');
  headerActionsDiv.appendChild(headerBtn);

  const headerBtnSpan = document.createElement('span');
  headerBtnSpan.classList.add('material-symbols-outlined','icon');
  headerBtnSpan.textContent = 'search';
  headerBtn.appendChild(headerBtnSpan);

  const currLocationA = document.createElement('a');
  currLocationA.href= '#/current-location';
  currLocationA.classList.add('btn-primary', 'has-state');
  currLocationA.setAttribute('data-current-location-btn', '');
  // currLocationA.setAttribute('disabled', '');
  headerActionsDiv.appendChild(currLocationA);

  const currLocationIcon = document.createElement('span');
  currLocationIcon.classList.add('material-symbols-outlined');
  currLocationIcon.textContent = 'my_location';
  currLocationA.appendChild(currLocationIcon);

  const currLocationSpan = document.createElement('span');
  currLocationSpan.classList.add('span');
  currLocationSpan.textContent = 'Current Location';
  currLocationA.appendChild(currLocationSpan);
  

  // Main content


  const main = document.createElement('main');
  body.appendChild(main);

  const articleContainer = document.createElement('article');
  articleContainer.classList.add('container');
  main.appendChild(articleContainer)

  const leftContent = document.createElement('div');
  leftContent.classList.add('content-left');
  articleContainer.appendChild(leftContent);

  // current weather
  const section = document.createElement('section')
  section.classList.add('section', 'current-weather');
  section.setAttribute('aria-label', 'current weather');
  section.setAttribute('data-current-weather', '');
  leftContent.appendChild(section);

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'card-lg', 'current-weather-card');
  section.appendChild(cardDiv);

  const cardH2 = document.createElement('h2');
  cardH2.classList.add('title-2', 'card-title');
  cardH2.textContent = 'Now';
  cardDiv.appendChild(cardH2);

  const weapperDiv = document.createElement('div');
  weapperDiv.classList.add('weapper');
  cardDiv.appendChild(weapperDiv);

  const weapperP = document.createElement('p');
  weapperP.classList.add('heading');
  weapperP.innerHTML= `25&deg;<sup>c</sup>`;
  weapperDiv.appendChild(weapperP);

  const weatherIcon =document.createElement('img');
  weatherIcon.src = './assets/01d.png';
  weatherIcon.alt='Overcast Clouds';
  weatherIcon.setAttribute('style', 'width:64px; height:64px;');
  weatherIcon.classList.add('weather-icon');
  weapperDiv.appendChild(weatherIcon);

  const body3P = document.createElement('p');
  body3P.classList.add('body-3');
  body3P.textContent = 'Overcast Clouds';
  cardDiv.appendChild(body3P);

  const metaListUl = document.createElement('ul');
  metaListUl.classList.add('meta-list');
  cardDiv.appendChild(metaListUl);

  const metaItemLi1 = document.createElement('li');
  metaItemLi1.classList.add('meta-item');
  metaListUl.appendChild(metaItemLi1);

  const metaItemSpan1 = document.createElement('span');
  metaItemSpan1.classList.add('material-symbols-outlined');
  metaItemSpan1.textContent = 'calendar_today';
  metaItemLi1.appendChild(metaItemSpan1);

  const metaItemP1 = document.createElement('p');
  metaItemP1.classList.add('title-3', 'meta-text');
  metaItemP1.textContent = 'Thursday 16, Feb';
  metaItemLi1.appendChild(metaItemP1);


  const metaItemLi2 = document.createElement('li');
  metaItemLi2.classList.add('meta-item');
  metaListUl.appendChild(metaItemLi2);

  const metaItemSpan2 = document.createElement('span');
  metaItemSpan2.classList.add('material-symbols-outlined');
  metaItemSpan2.textContent = 'location_on';
  metaItemLi2.appendChild(metaItemSpan2);

  const metaItemP2 = document.createElement('p');
  metaItemP2.classList.add('title-3', 'meta-text');
  metaItemP2.textContent = 'London, GB';
  metaItemLi2.appendChild(metaItemP2);


  // Forcast
  const forcastSection = document.createElement('section');
  forcastSection.classList.add('section', 'forcast');
  forcastSection.setAttribute('aria-label', 'forcast');
  forcastSection.setAttribute('data-5-day-forcast');
  
  leftContent.appendChild(forcastSection);

}
