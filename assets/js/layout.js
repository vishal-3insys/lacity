const header = `This is Header`;
const footer = `This is Footer`;
const title = `This is Title`;
function readMoreLess() {
    this.getAttribute('aria-expanded') == 'true' ? this.textContent = 'Read Less' : this.textContent = 'Read More';
}
(function () {
    document.getElementById('title').innerHTML = title;
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer-area').innerHTML = footer;
})();