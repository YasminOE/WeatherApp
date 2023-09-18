export default function loadPageStructure(){
  const body = document.querySelector('body');

  const header = document.createElement('header');
  header.classList.add('header');
  body.appendChild(header);


  const container = document.createElement('div');
  container.classList.add('container');
  header.appendChild(container);

  const a = document.createElement('a')
  a.href ='#/weather?lat=51.5073219&lon=-0.1276474';
  a.classList.add('logo');
  container.appendChild(a);

  const logoImg = document.createElement('img');
  logoImg.src='./assets/logo.png';
  logoImg.alt = 'logo';
  logoImg.setAttribute('style', 'height:auto;');
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
  searchfield.setAttribute('data-search-field', '');
  searchWrapper.appendChild(searchfield);
  
  const searchIcon = document.createElement('span');
  searchIcon.classList.add('material-symbols-outlined', 'leading-icon');
  searchIcon.textContent = 'search';
  searchWrapper.appendChild(searchIcon);
  
  
  const iconBtn = document.createElement('button');
  iconBtn.classList.add('icon-btn','leading-icon', 'has-state');
  iconBtn.ariaLabel = "close search";
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


  // Create header actions


  const headerActionsDiv = document.createElement('div');
  headerActionsDiv.classList.add("header-actions");
  container.appendChild(headerActionsDiv);

  const headerBtn = document.createElement('button');
  headerBtn.classList.add('icon-btn', 'has-state');
  headerBtn.ariaLabel= 'open search';
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
  articleContainer.setAttribute('data-container', '');
  main.appendChild(articleContainer)

  const leftContent = document.createElement('div');
  leftContent.classList.add('content-left');
  articleContainer.appendChild(leftContent);

  // current weather
  const section = document.createElement('section')
  section.classList.add('section', 'current-weather');
  section.ariaLabel = 'current weather';
  section.setAttribute('data-current-weather', '');
  leftContent.appendChild(section);



  // Forecast

  const forecastSection = document.createElement('section');
  forecastSection.classList.add('section', 'forecast');
  forecastSection.ariaLabellebdy = 'forecast-label';
  forecastSection.setAttribute('data-5-day-forecast','');
  
  leftContent.appendChild(forecastSection);



 

  const rightContent = document.createElement('div');
  rightContent.classList.add('content-right');
  articleContainer.appendChild(rightContent);

  //  Highlights
  const highlightsSection = document.createElement('section')
  highlightsSection.classList.add('section', 'highlights');
  highlightsSection.ariaLabellebdy = 'highlights-label';
  highlightsSection.setAttribute('data-highlights', '');
  rightContent.appendChild(highlightsSection);



  // Hourly Forecast
  const hrForecastSection = document.createElement('section')
  hrForecastSection.classList.add('section', 'hourly-forecast');
  hrForecastSection.ariaLabel = 'hourly forecast'
  hrForecastSection.setAttribute('data-hourly-forecast', '');
  rightContent.appendChild(hrForecastSection);


  // Footer
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');
  articleContainer.appendChild(footerContainer);

  const footerP = document.createElement('p');
  footerP.classList.add('body-3');
  footerP.textContent= 'Powered By';
  footerContainer.appendChild(footerP);

  const footerPLink = document.createElement('a');
  footerPLink.href= 'https://openweather.org/api';
  footerPLink.title= 'Free OpenWeather API';
  footerPLink.target= '_blank';
  footerPLink.rel= 'noopener';
  footerP.appendChild(footerPLink);

  const footerPLinkImg = document.createElement('img');
  footerPLinkImg.src='./assets/openweather.png' ;
  footerPLinkImg.setAttribute('style', 'width:150px; height:30px');
  footerPLinkImg.loading ='lazy';
  footerPLinkImg.alt= 'OpenWeather';
  footerPLink.appendChild(footerPLinkImg);


  //loading 
  const loadingDiv =document.createElement('div');
  loadingDiv.classList.add('loading');
  loadingDiv.setAttribute('data-loading', '');
  articleContainer.appendChild(loadingDiv);


  // Error
  const errorContent = document.createElement('section');
  errorContent.classList.add('error-content');
  errorContent.setAttribute('data-error-content','');
  body.appendChild(errorContent);

  const errorH2 = document.createElement('h2');
  errorH2.classList.add('heading');
  errorH2.textContent= '404';
  errorContent.appendChild(errorH2);

  const errorP = document.createElement('p');
  errorP.classList.add('body-1');
  errorP.textContent= 'Page Not found!';
  errorContent.appendChild(errorP);

  const errorHomeLink = document.createElement('a');
  errorHomeLink.href = '#/weather?lat=51.5073219&lon=-0.1276474';
  errorHomeLink.classList.add('btn-primary');
  errorContent.appendChild(errorHomeLink);

  const errorHomeSpan = document.createElement('span');
  errorHomeSpan.classList.add('span');
  errorHomeSpan.textContent= 'Go Home';
  errorHomeLink.appendChild(errorHomeSpan);
} 
 