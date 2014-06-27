var router = require('page');
var delegate = require('delegate');

var
  current = -1;
  pageIndex = document.querySelector('.page--index'),
  page1 = document.querySelector('.page--1'),
  page2 = document.querySelector('.page--2'),
  page3 = document.querySelector('.page--3'),
  page4 = document.querySelector('.page--4'),
  pageNotFound = document.querySelector('.page--not-found'),
  pages = [pageIndex, page1, page2, page3, page4, pageNotFound]
;

/**
 * Show the page
 * @param {HTMLElement} page
 */
function show(page) {
  for (var i=0; i<pages.length; ++i) {
    pages[i].classList.add('page--hidden');
  }
  page.classList.remove('page--hidden');
  current = pages.indexOf(page);
}

//navigate on button press
delegate.bind(document, '.page__previous, .page__next', 'click', function(event){
  router('/page-'+event.target.getAttribute('data-page'));
});

router('/', function() {
  show(pageIndex);
});

router('/page-1', function() {
  show(page1);
});

router('/page-2', function() {
  show(page2);
});

router('/page-3', function() {
  show(page3);
});

router('/page-4', function() {
  show(page4);
});

router('*', function(context) {
  show(pageNotFound);
});

router();