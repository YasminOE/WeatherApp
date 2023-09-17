'use strict';
import _ from 'lodash';
import './style.css';
import loadPageStructure from './modules/inital-load-page';
import { fetchData , url } from './modules/api';
import * as module from './modules/module';

init();

function init(){
  loadPageStructure();
}


/**
 * Add event listener on multiple elements
 * @param {NodeList} elements  Elements node array
 * @param {string} eventType  Event Type. e.g: "click", "mouseOver"
 * @param {Function} callback  Callback function
 */
const addEventOnElements = function( elements , eventType, callback){
  for(const element of elements) element.addEventListener(eventType, callback);
};

/**
 * Toggle search in mobile devices
 */

const searchView = document.querySelector('[data-search-view]');
const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const toggleSearch = () => searchView.classList.toggle('active');

addEventOnElements(searchTogglers, 'click', toggleSearch);

