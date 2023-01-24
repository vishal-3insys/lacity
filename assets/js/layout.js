const header = `This is Header`;
const footer = `This is Footer`;
const title = `This is Title`;
var pageData = [{ "page": `${location.href.split('/').reverse()[0]}` }];
const menulist = ` <li><a href="what-is-r-permit.html" target="_top"><i class="bx bx-user"></i>What is a Revocable Permit</a></li>


                                <li><a href="information-r-permit.html" target="_top"><i class="bx bx-user"></i>Information</a></li>

                                <li><a href="how-to-apply-r-permit.html" target="_top" class="active"><i class="bx bx-user"></i>How to Apply</a> </li>

                                <li><a href="#" target="_top"><i class="bx bx-user"></i>Apply for a New Permit</a></li>

                                <li><a href="#" target="_top"><i class="bx bx-user"></i>Check status of a Permit</a></li>

                                <li><a href="#" target="_top"><i class="bx bx-user"></i>Insurance Requirements</a></li>

                                <li><a href="#" target="_top"><i class="bx bx-user"></i>Sidewalk Dining Handout</a></li>




                                <li><a href="#" target="_blank"><i class="bx bx-user"></i>Frequently Asked Questions</a></li>

                                <li><a href="#" target="_blank"><i class="bx bx-user"></i>Contact Us</a></li>



                                <li><a href="#" target="_blank"><i class="bx bx-user"></i>Engineering Home Page</a></li>

                                <li><a href="index.html" target="_top"><i class="bx bx-log-out"></i>Log Out</a></li>`;
function loginLogout() {
    if (pageData[0].page == 'r-permit-layout.html' || pageData[0].page == 'what-is-r-permit.html') {
        document.getElementById('loginArea').setAttribute('style', "display:none!important")    }
}

function readMoreLess() {
    this.getAttribute('aria-expanded') == 'true' ? this.textContent = 'Read Less' : this.textContent = 'Read More';
}
(function () {
    document.getElementById('title').innerHTML = title;
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer-area').innerHTML = footer;
    document.getElementById('r-permitli-list').innerHTML = menulist;

 
    
    
})();