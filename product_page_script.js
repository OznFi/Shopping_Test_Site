import * as Productdescription from './product_description_component.js';
import * as Productdetailtext from './product_details_component.js';
import * as Fullrating from './product_full_ratings.js'
//so apparently the imported function execute first and then the renderpage comes later
function renderpage() {
    Productdescription.render_product_desc();
    Productdetailtext.render_product_details();
    Fullrating.render_full_rating();
    var buttons = document.querySelectorAll('#product_detail_tab_buttons button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', tab_change);
    }
}
function tab_change(e) {
    var t = e.target; var count = document.getElementById('detail_content_container').children;
    var buttons = document.querySelectorAll('.detail_tab_button');
    for (let y = 0; y < buttons.length; y++) {
        buttons[y].classList.remove('selected_detail_tab');
    }
    t.classList.add('selected_detail_tab');
    var idnum = parseInt(t.id.substr(t.id.length - 1));
    for (let i = 0; i < count.length; i++) {
        count[i].classList.remove('active_tab');
    }
    count[idnum].classList.add('active_tab');
}
window.addEventListener('load', renderpage);