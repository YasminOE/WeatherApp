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
  searchfield.setAttribute('data-search-field', '')
  searchWrapper.appendChild(searchfield);
  
  const searchIcon = document.createElement('span');
  searchIcon.classList.add('material-symbols-outlined', 'leading-icon');
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

  // const listViewUl = document.createElement('ul');
  // listViewUl.classList.add('view-list');
  // listViewUl.setAttribute('data-search-list', '');
  // searchResult.appendChild(listViewUl);

  // const viewItemLi = document.createElement('li');
  // viewItemLi.classList.add('view-item');
  // listViewUl.appendChild(viewItemLi);

  // const viewItemSpan = document.createElement('span')
  // viewItemSpan.classList.add('material-symbols-outlined');
  // viewItemSpan.textContent = 'location_on';
  // viewItemLi.appendChild(viewItemSpan);

  // const textDiv = document.createElement('div');
  // viewItemLi.appendChild(textDiv);

  // const itemTitle = document.createElement('p');
  // itemTitle.classList.add('item-title'); 
  // itemTitle.textContent = 'London';
  // textDiv.appendChild(itemTitle);

  // const itemSubtitle = document.createElement('p');
  // itemSubtitle.classList.add('lable-2', 'item-subtitle');
  // itemSubtitle.textContent = 'State of London, GB';
  // textDiv.appendChild(itemSubtitle);

  // const itemLinkA = document.createElement('a');
  // itemLinkA.classList.add('item-link', 'has-state');
  // itemLinkA.href='#';
  // itemLinkA.setAttribute('data-search-toggler', '');
  // viewItemLi.appendChild(itemLinkA);


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
  articleContainer.setAttribute('data-container', '');
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

  // const cardDiv = document.createElement('div');
  // cardDiv.classList.add('card', 'card-lg', 'current-weather-card');
  // section.appendChild(cardDiv);

  // const cardH2 = document.createElement('h2');
  // cardH2.classList.add('title-2', 'card-title');
  // cardH2.textContent = 'Now';
  // cardDiv.appendChild(cardH2);

  // const weapperDiv = document.createElement('div');
  // weapperDiv.classList.add('weapper');
  // cardDiv.appendChild(weapperDiv);

  // const weapperP = document.createElement('p');
  // weapperP.classList.add('heading');
  // weapperP.innerHTML= `25&deg;<sup>c</sup>`;
  // weapperDiv.appendChild(weapperP);

  // const weatherIcon =document.createElement('img');
  // weatherIcon.src = './assets/01d.png';
  // weatherIcon.alt='Overcast Clouds';
  // weatherIcon.setAttribute('style', 'width:64px; height:64px;');
  // weatherIcon.classList.add('weather-icon');
  // weapperDiv.appendChild(weatherIcon);

  // const body3P = document.createElement('p');
  // body3P.classList.add('body-3');
  // body3P.textContent = 'Overcast Clouds';
  // cardDiv.appendChild(body3P);

  // const metaListUl = document.createElement('ul');
  // metaListUl.classList.add('meta-list');
  // cardDiv.appendChild(metaListUl);

  // const metaItemLi1 = document.createElement('li');
  // metaItemLi1.classList.add('meta-item');
  // metaListUl.appendChild(metaItemLi1);

  // const metaItemSpan1 = document.createElement('span');
  // metaItemSpan1.classList.add('material-symbols-outlined');
  // metaItemSpan1.textContent = 'calendar_today';
  // metaItemLi1.appendChild(metaItemSpan1);

  // const metaItemP1 = document.createElement('p');
  // metaItemP1.classList.add('title-3', 'meta-text');
  // metaItemP1.textContent = 'Thursday 16, Feb';
  // metaItemLi1.appendChild(metaItemP1);


  // const metaItemLi2 = document.createElement('li');
  // metaItemLi2.classList.add('meta-item');
  // metaListUl.appendChild(metaItemLi2);

  // const metaItemSpan2 = document.createElement('span');
  // metaItemSpan2.classList.add('material-symbols-outlined');
  // metaItemSpan2.textContent = 'location_on';
  // metaItemLi2.appendChild(metaItemSpan2);

  // const metaItemP2 = document.createElement('p');
  // metaItemP2.classList.add('title-3', 'meta-text');
  // metaItemP2.textContent = 'London, GB';
  // metaItemLi2.appendChild(metaItemP2);


  // Forecast

  const forecastSection = document.createElement('section');
  forecastSection.classList.add('section', 'forecast');
  forecastSection.setAttribute('aria-labellebdy', 'forecast-label');
  forecastSection.setAttribute('data-5-day-forecast','');
  
  leftContent.appendChild(forecastSection);

  // const forecastH2 = document.createElement('h2');
  // forecastH2.classList.add('title-2');
  // forecastH2.id = 'forecast-label';
  // forecastH2.textContent = '5 Days Forecast';
  // forecastSection.appendChild(forecastH2);

  // const forecastCardDiv = document.createElement('div');
  // forecastCardDiv.classList.add('card', 'card-lg', 'forecast-card');
  // forecastSection.appendChild(forecastCardDiv);

  // const forecastCardUl = document.createElement('ul');
  // // forecastCardUl.classList.add('')
  // forecastCardDiv.appendChild(forecastCardUl);

  // const numberOfItems = 5; 
  // for (let i = 1; i <= numberOfItems; i++) {
  //   // Create a new <li> element
  //   const forecastCardItemLi = document.createElement('li');
  //   forecastCardItemLi.classList.add('card-item');
  
  //   // Create other child elements
  //   const forecastIconWrapper = document.createElement('div');
  //   forecastIconWrapper.classList.add('icon-wrapper');
  //   forecastCardItemLi.appendChild(forecastIconWrapper);
  
  //   const forecastWrapperImg = document.createElement('img');
  //   forecastWrapperImg.src = './assets/01n.png';
  //   forecastWrapperImg.setAttribute('style', 'width:36px; height:36px');
  //   forecastWrapperImg.alt = 'Overcast Clouds';
  //   forecastWrapperImg.classList.add('weather-icon');
  //   forecastIconWrapper.appendChild(forecastWrapperImg);
  
  //   const forecastWrapperSpan = document.createElement('span');
  //   forecastWrapperSpan.classList.add('span');
  //   forecastIconWrapper.appendChild(forecastWrapperSpan);
  
  //   const forecastSpanP = document.createElement('p');
  //   forecastSpanP.classList.add('title-2');
  //   forecastSpanP.textContent = '25';
  //   forecastWrapperSpan.appendChild(forecastSpanP);
  
  //   const forecastCardItemP1 = document.createElement('p');
  //   forecastCardItemP1.classList.add('label-1');
  //   forecastCardItemP1.textContent = '17 Feb';
  //   forecastCardItemLi.appendChild(forecastCardItemP1);
  
  //   const forecastCardItemP2 = document.createElement('p');
  //   forecastCardItemP2.classList.add('label-1');
  //   forecastCardItemP2.textContent = 'Friday';
  //   forecastCardItemLi.appendChild(forecastCardItemP2);
  
  //   // Append the <li> element to the parent <ul> or another appropriate container
  //   forecastCardUl.appendChild(forecastCardItemLi);
  // }

 

  const rightContent = document.createElement('div');
  rightContent.classList.add('content-right');
  articleContainer.appendChild(rightContent);

  //  Highlights
  const highlightsSection = document.createElement('section')
  highlightsSection.classList.add('section', 'highlights');
  highlightsSection.setAttribute('aria-labelledby', 'highlights-label');
  highlightsSection.setAttribute('data-highlights', '');
  rightContent.appendChild(highlightsSection);

  // const highlightsCardDiv = document.createElement('div');
  // highlightsCardDiv.classList.add('card', 'card-lg');
  // highlightsSection.appendChild(highlightsCardDiv);


  // const highlightsH2 = document.createElement('h2');
  // highlightsH2.classList.add('title-2');
  // highlightsH2.id = 'highlights-label';
  // highlightsH2.textContent = 'Todays Highlights';
  // highlightsCardDiv.appendChild(highlightsH2);

  // const highlightListDiv = document.createElement('div');
  // highlightListDiv.classList.add('highlight-list');
  // highlightsCardDiv.appendChild(highlightListDiv);

  // const highlightListCard1 = document.createElement('div');
  // highlightListCard1.classList.add('card', 'card-sm', 'highlight-card', 'one');
  // highlightListDiv.appendChild(highlightListCard1);

  // const highlightListH3 = document.createElement('h3');
  // highlightListH3.classList.add('title-3');
  // highlightListH3.textContent = 'Air Quality Index';
  // highlightListCard1.appendChild(highlightListH3);

  // const highlightWrapper = document.createElement('div');
  // highlightWrapper.classList.add('wrapper');
  // highlightListCard1.appendChild(highlightWrapper);

  // const highlightWrapperSpan = document.createElement('span');
  // highlightWrapperSpan.classList.add('material-symbols-outlined');
  // highlightWrapperSpan.textContent = 'air';
  // highlightWrapper.appendChild(highlightWrapperSpan);



  // const highlightsCardListUl = document.createElement('ul');
  // highlightsCardListUl.classList.add('card-list');
  // highlightWrapper.appendChild(highlightsCardListUl);

  // // Number of list items you want to create
  // const numberOfHighlightItems = 4;

  // for (let i = 1; i <= numberOfHighlightItems; i++) {
  //   // Create a new <li> element
  //   const highlightListCardLi = document.createElement('li');
  //   highlightListCardLi.classList.add('card-item');
  //   highlightsCardListUl.appendChild(highlightListCardLi);
  
  //   // Create the first <p> element
  //   const highlightListCardP1 = document.createElement('p');
  //   highlightListCardP1.classList.add('title-1');
  //   highlightListCardP1.textContent = '23.3';
  //   highlightListCardLi.appendChild(highlightListCardP1);
  
  //   // Create the second <p> element with subscripts
  //   const highlightListCardP2 = document.createElement('p');
  //   highlightListCardP2.classList.add('label-1');
  //   highlightListCardP2.innerHTML = `PM<sub>2.5</sub>`;
  //   highlightListCardLi.appendChild(highlightListCardP2);
  //   highlightListCardLi.appendChild(highlightListCardP2);
  // }
  
  // const highlightWrapperSpan2 = document.createElement('span');
  // highlightWrapperSpan2.classList.add('badge', 'aqi-1', 'label-1');
  // highlightWrapperSpan2.title = 'aqi message';
  // highlightWrapperSpan2.textContent = 'Good';
  // highlightListCard1.appendChild(highlightWrapperSpan2);


  // //Sunset and Sunrise
  // const highlightListCard2 = document.createElement('div');
  // highlightListCard2.classList.add('card', 'card-sm', 'highlight-card', 'two');
  // highlightListDiv.appendChild(highlightListCard2);


  // const highlightListCard2H3 = document.createElement('h3');
  // highlightListCard2H3.classList.add('title-3');
  // highlightListCard2H3.textContent = 'Sunrise & Sunset';
  // highlightListCard2.appendChild(highlightListCard2H3);

  // const card2CardList = document.createElement('div');
  // card2CardList.classList.add('card-list');
  // highlightListCard2.appendChild(card2CardList);

  // const card2ListItem = document.createElement('div');
  // card2ListItem.classList.add('card-item');
  // card2CardList.appendChild(card2ListItem);

  // const card2ListItemSpan = document.createElement('span');
  // card2ListItemSpan.classList.add('material-symbols-outlined');
  // card2ListItemSpan.textContent = 'clear_day';
  // card2ListItem.appendChild(card2ListItemSpan);

  // const card2ListItemDiv = document.createElement('div');
  // card2ListItem.appendChild(card2ListItemDiv);

  // const card2ListItemP1 = document.createElement('p');
  // card2ListItemP1.classList.add('label-1');
  // card2ListItemP1.textContent = 'Sunrise';
  // card2ListItemDiv.appendChild(card2ListItemP1);


  // const card2ListItemP2 = document.createElement('p');
  // card2ListItemP2.classList.add('title-1');
  // card2ListItemP2.textContent = '6:30 AM';
  // card2ListItemDiv.appendChild(card2ListItemP2);



  // const card2ListItem1 = document.createElement('div');
  // card2ListItem1.classList.add('card-item');
  // card2CardList.appendChild(card2ListItem1);

  // const card2ListItemSpan1 = document.createElement('span');
  // card2ListItemSpan1.classList.add('material-symbols-outlined');
  // card2ListItemSpan1.textContent = 'clear_night';
  // card2ListItem1.appendChild(card2ListItemSpan1);

  // const card2ListItemDiv1 = document.createElement('div');
  // card2ListItem1.appendChild(card2ListItemDiv1);

  // const card2ListItemP3 = document.createElement('p');
  // card2ListItemP3.classList.add('label-1');
  // card2ListItemP3.textContent = 'Sunset';
  // card2ListItemDiv1.appendChild(card2ListItemP3);


  // const card2ListItemP4 = document.createElement('p');
  // card2ListItemP4.classList.add('title-1');
  // card2ListItemP4.textContent = '5:54 PM';
  // card2ListItemDiv1.appendChild(card2ListItemP4);



  // //Humidity
  // const highlightListCard3 = document.createElement('div');
  // highlightListCard3.classList.add('card', 'card-sm', 'highlight-card');
  // highlightListDiv.appendChild(highlightListCard3);

  // const highlightListCard3H3 = document.createElement('h3');
  // highlightListCard3H3.classList.add('title-3');
  // highlightListCard3H3.textContent = 'Humidity';
  // highlightListCard3.appendChild(highlightListCard3H3);

  // const listCard3Wrapper = document.createElement('div');
  // listCard3Wrapper.classList.add('wrapper');
  // highlightListCard3.appendChild(listCard3Wrapper);

  // const listCard3Span= document.createElement('span');
  // listCard3Span.classList.add('material-symbols-outlined');
  // listCard3Span.textContent = 'humidity_percentage';
  // listCard3Wrapper.appendChild(listCard3Span);

  // const listCard3P = document.createElement('p');
  // listCard3P.classList.add('title-1');
  // listCard3P.innerHTML = `35<sub>%</sub>`;
  // listCard3Wrapper.appendChild(listCard3P);


  // //Pressure
  // const highlightListCard4 = document.createElement('div');
  // highlightListCard4.classList.add('card', 'card-sm', 'highlight-card');
  // highlightListDiv.appendChild(highlightListCard4);

  // const highlightListCard4H3 = document.createElement('h3');
  // highlightListCard4H3.classList.add('title-3');
  // highlightListCard4H3.textContent = 'Pressure';
  // highlightListCard4.appendChild(highlightListCard4H3);

  // const listCard4Wrapper = document.createElement('div');
  // listCard4Wrapper.classList.add('wrapper');
  // highlightListCard4.appendChild(listCard4Wrapper);

  // const listCard4Span= document.createElement('span');
  // listCard4Span.classList.add('material-symbols-outlined');
  // listCard4Span.textContent = 'airwave';
  // listCard4Wrapper.appendChild(listCard4Span);

  // const listCard4P = document.createElement('p');
  // listCard4P.classList.add('title-1');
  // listCard4P.innerHTML = `1052<sub>hPa</sub>`;
  // listCard4Wrapper.appendChild(listCard4P);


  // // visibility
  // const highlightListCard5 = document.createElement('div');
  // highlightListCard5.classList.add('card', 'card-sm', 'highlight-card');
  // highlightListDiv.appendChild(highlightListCard5);

  // const highlightListCard5H3 = document.createElement('h3');
  // highlightListCard5H3.classList.add('title-3');
  // highlightListCard5H3.textContent = 'Visibility';
  // highlightListCard5.appendChild(highlightListCard5H3);

  // const listCard5Wrapper = document.createElement('div');
  // listCard5Wrapper.classList.add('wrapper');
  // highlightListCard5.appendChild(listCard5Wrapper);

  // const listCard5Span= document.createElement('span');
  // listCard5Span.classList.add('material-symbols-outlined');
  // listCard5Span.textContent = 'visibility';
  // listCard5Wrapper.appendChild(listCard5Span);

  // const listCard5P = document.createElement('p');
  // listCard5P.classList.add('title-1');
  // listCard5P.innerHTML = `10<sub>km</sub>`;
  // listCard5Wrapper.appendChild(listCard5P);
  

  // // Feels Like
  // const highlightListCard6 = document.createElement('div');
  // highlightListCard6.classList.add('card', 'card-sm', 'highlight-card');
  // highlightListDiv.appendChild(highlightListCard6);

  // const highlightListCard6H3 = document.createElement('h3');
  // highlightListCard6H3.classList.add('title-3');
  // highlightListCard6H3.textContent = 'Feels Like';
  // highlightListCard6.appendChild(highlightListCard6H3);

  // const listCard6Wrapper = document.createElement('div');
  // listCard6Wrapper.classList.add('wrapper');
  // highlightListCard6.appendChild(listCard6Wrapper);

  // const listCard6Span= document.createElement('span');
  // listCard6Span.classList.add('material-symbols-outlined');
  // listCard6Span.textContent = 'thermostat';
  // listCard6Wrapper.appendChild(listCard6Span);

  // const listCard6P = document.createElement('p');
  // listCard6P.classList.add('title-1');
  // listCard6P.innerHTML = `25&deg;<sup>c</sup>`;
  // listCard6Wrapper.appendChild(listCard6P);


  // Hourly Forecast
  const hrForecastSection = document.createElement('section')
  hrForecastSection.classList.add('section', 'hourly-forecast');
  hrForecastSection.setAttribute('aria-label', 'hourly forecast');
  hrForecastSection.setAttribute('data-hourly-forecast', '');
  rightContent.appendChild(hrForecastSection);

  // const hrForecastSectionH2 = document.createElement('h2');
  // hrForecastSectionH2.classList.add('title-2');
  // hrForecastSectionH2.textContent = 'Today at';
  // hrForecastSection.appendChild(hrForecastSectionH2);

  // const sliderContainer = document.createElement('div');
  // sliderContainer.classList.add('slider-container');
  // hrForecastSection.appendChild(sliderContainer);
  
  // //data temp
  // const sliderListUl1 = document.createElement('ul');
  // sliderListUl1.classList.add('slider-list');
  // sliderListUl1.setAttribute('data-temp', '');
  // sliderContainer.appendChild(sliderListUl1);

  // const numberOfTempItems = 24; // Change this to the number of items you need

  // for (let i = 1; i <= numberOfTempItems; i++) {
  //   // Create a new <li> element
  //   const sliderItemLi = document.createElement('li');
  //   sliderItemLi.classList.add('slider-item');
  //   sliderListUl1.appendChild(sliderItemLi);
  
  //   // Create the <div> element with card classes
  //   const sliderItemCard = document.createElement('div');
  //   sliderItemCard.classList.add('card', 'card-sm', 'slider-card');
  //   sliderItemLi.appendChild(sliderItemCard);
  
  //   // Create the first <p> element
  //   const sliderItemCardP1 = document.createElement('p');
  //   sliderItemCardP1.classList.add('body-3');
  //   sliderItemCardP1.textContent = '03 PM';
  //   sliderItemCard.appendChild(sliderItemCardP1);
  
  //   // Create the <img> element
  //   const sliderItemCardImg = document.createElement('img');
  //   sliderItemCardImg.src = './assets/01n.png';
  //   sliderItemCardImg.setAttribute('style', 'width:48px; height:48px;');
  //   sliderItemCardImg.loading ='lazy';
  //   sliderItemCardImg.alt = '';
  //   sliderItemCardImg.classList.add('weather-icon');
  //   sliderItemCardImg.title = '';
  //   sliderItemCard.appendChild(sliderItemCardImg);
  
  //   // Create the second <p> element with HTML entity for degree symbol
  //   const sliderItemCardP2 = document.createElement('p');
  //   sliderItemCardP2.classList.add('body-3');
  //   sliderItemCardP2.innerHTML = `25&deg;`;
  //   sliderItemCard.appendChild(sliderItemCardP2);
  // }


  // //data wind
  // const sliderListUl2 = document.createElement('ul');
  // sliderListUl2.classList.add('slider-list');
  // sliderListUl2.setAttribute('data-wind', '');
  // sliderContainer.appendChild(sliderListUl2);


  // // Number of list items you want to create
  // const numberOfWindItems = 7; // Change this to the number of items you need

  // for (let i = 1; i <= numberOfWindItems; i++) {
  //   // Create a new <li> element
  //   const sliderItemLi = document.createElement('li');
  //   sliderItemLi.classList.add('slider-item');
  //   sliderListUl2.appendChild(sliderItemLi);

  //   // Create the <div> element with card classes
  //   const sliderItemCard = document.createElement('div');
  //   sliderItemCard.classList.add('card', 'card-sm', 'slider-card');
  //   sliderItemLi.appendChild(sliderItemCard);

  //   // Create the first <p> element
  //   const sliderItemCardP3 = document.createElement('p');
  //   sliderItemCardP3.classList.add('body-3');
  //   sliderItemCardP3.textContent = '03 PM';
  //   sliderItemCard.appendChild(sliderItemCardP3);

  //   // Create the <img> element
  //   const sliderItemCardImg = document.createElement('img');
  //   sliderItemCardImg.src = './assets/direction.png';
  //   sliderItemCardImg.setAttribute('style', 'width:48px; height:48px;');
  //   sliderItemCardImg.loading = 'lazy';
  //   sliderItemCardImg.alt = '';
  //   sliderItemCardImg.classList.add('weather-icon');
  //   sliderItemCardImg.title = '';
  //   sliderItemCard.appendChild(sliderItemCardImg);

  //   // Create the second <p> element
  //   const sliderItemCardP4 = document.createElement('p');
  //   sliderItemCardP4.classList.add('body-3');
  //   sliderItemCardP4.innerHTML = `12 km/h`;
  //   sliderItemCard.appendChild(sliderItemCardP4);
  // }

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
  errorHomeLink.href = '#/weather?15.5636&lon=32.5349';
  errorHomeLink.classList.add('btn-primary');
  errorContent.appendChild(errorHomeLink);

  const errorHomeSpan = document.createElement('span');
  errorHomeSpan.classList.add('span');
  errorHomeSpan.textContent= 'Go Home';
  errorHomeLink.appendChild(errorHomeSpan);
} 
 