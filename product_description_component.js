'use strict';
//import Productimage from './product_page_image_component.js';

var product_object = {
    product_brand: "MakroTech", product_name: ' SY8000 GP2 Explorer Mouse',
    product_rating: 4.7, total_ratings: 257,
    product_price: 156, price_unit: '$', price_extra_info: '',
    small_description: 'blablablablablablablablablabla',
    product_seller: 'MekonoMart', product_delivery_time: ' 6 Work Days'
};
var logged_state = false; //this is a blunt check for user login status, should be changed to a better reference
function Productdescription(props) {
    var additional_price_info;
    return React.createElement(
        'div',
        { id: 'full_product_description' },
        React.createElement(Productimage, null),
        React.createElement(
            'div',
            { id: 'product_description' },
            React.createElement(
                'h2',
                { 'class': 'product_title' },
                React.createElement(
                    'b',
                    null,
                    product_object.product_brand
                ),
                product_object.product_name
            ),
            React.createElement(
                'div',
                { 'class': 'product_price_section' },
                React.createElement(
                    'h3',
                    null,
                    product_object.product_price + product_object.price_unit
                )
            ),
            React.createElement(
                'button',
                { 'class': 'product_add_cart_button' },
                'Add to Cart'
            ),
            React.createElement(Productdelivery, null),
            React.createElement(Starrating, null)
        )
    );
}
//maybe a dynamic date calculation from current time?
function Productdelivery(props) {

    return React.createElement(
        'div',
        { 'class': 'product_delivery_date' },
        React.createElement(
            'span',
            { 'class': 'product_expected_delivery_time' },
            React.createElement(
                'b',
                null,
                'Expected Product Delivery Time:'
            ),
            product_object.product_delivery_time
        )
    );
}
function Starrating(props) {
    var stars = [];var tempstar = product_object.product_rating;
    var tempnum = 0;
    for (var i = 1; i <= 5; i++) {
        //if (tempstar <= 1) {
        //stars.push(<Star rating={product_object.product_rating}/>);
        //}
        //else {

        //}
        stars.push(React.createElement(Star, { rating: (tempstar - tempnum).toFixed(2) }));
        tempnum++;
        //alert(tempstar - i);
    }
    return React.createElement(
        'div',
        { 'class': 'star_rating_container' },
        React.createElement(
            'div',
            { 'class': 'star_rating' },
            React.createElement(
                'div',
                { 'class': 'rating_star star1', onMouseOver: star_select, onMouseOut: star_clear },
                stars[0]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star2', onMouseOver: star_select, onMouseOut: star_clear },
                stars[1]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star3', onMouseOver: star_select, onMouseOut: star_clear },
                stars[2]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star4', onMouseOver: star_select, onMouseOut: star_clear },
                stars[3]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star5', onMouseOver: star_select, onMouseOut: star_clear },
                stars[4]
            )
        ),
        React.createElement(
            'span',
            { 'class': 'product_rating_text' },
            product_object.product_rating + " (" + product_object.total_ratings + " ratings)"
        )
    );
}
function Star(props) {
    var num = props.rating;
    if (num > 1) {
        num = 1;
    }
    if (props.rating <= 0) {
        alert('here');
        return React.createElement(
            'div',
            null,
            React.createElement(
                'svg',
                { width: '24', height: '24', viewBox: '0 0 24 24', 'clip-rule': 'evenodd' },
                React.createElement('path', { 'fill-rule': 'nonzero', fill: 'gray', d: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' })
            )
        );
    } //DO NOT REDEFINE LINEAR GRADIENTS OF SVGS MAKE NEW ONE IF YOU WANT SOMETHING DIFFERENT
    else {
            var contain1 = num * 100 + "%";
            //alert(contain1 + "% to " + ((1 - num) * 100).toFixed(0) + "%"); 
            var contain2 = ((1 - num) * 100).toFixed(0) + "%";
            if (props.rating < 1) {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'svg',
                        null,
                        React.createElement(
                            'defs',
                            null,
                            React.createElement(
                                'linearGradient',
                                { id: 'partialstar' },
                                React.createElement('stop', { offset: contain1, stopColor: 'gold' }),
                                React.createElement('stop', { offset: contain1, stopColor: 'gray' })
                            )
                        ),
                        React.createElement('path', { 'fill-rule': 'nonzero', fill: 'url(#partialstar)', d: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' })
                    )
                );
            } else {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'svg',
                        null,
                        React.createElement(
                            'defs',
                            null,
                            React.createElement(
                                'linearGradient',
                                { id: 'fullstar' },
                                React.createElement('stop', { offset: 100 + "%", stopColor: 'gold' }),
                                React.createElement('stop', { offset: 100 + "%", stopColor: 'gray' })
                            )
                        ),
                        React.createElement('path', { 'fill-rule': 'nonzero', fill: 'url(#fullstar)', d: 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' })
                    )
                );
            }
        }

    //return <div>
    //  <svg width='24' height='24' viewBox='0 0 24 24' clip-rule="evenodd"><path fill-rule="nonzero"  fill='gray' d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
    //</div>
}
function star_select(e) {
    var el = e.currentTarget;var parentcont = e.currentTarget.parentElement;
    var starclass = el.classList[1];var starlength = parseInt(starclass.substr(starclass.length - 1));
    for (var i = 0; i < parentcont.children.length; i++) {
        parentcont.children[i].classList.remove('activestar');
    }
    for (var _i = 0; _i < starlength; _i++) {
        parentcont.children[_i].classList.add('activestar');
    }
}
function star_clear(e) {
    var el = e.currentTarget;var parentcont = e.currentTarget.parentElement;
    var starclass = el.classList[0];var starlength = parseInt(starclass.substr(starclass.length - 1));
    for (var i = 0; i < parentcont.children.length; i++) {
        parentcont.children[i].classList.remove('activestar');
    }
}
function render_product_desc() {
    var pl = document.getElementById('product_description_section');
    ReactDOM.render(React.createElement(Productdescription, null), pl);
}

//Had to put these here because import is not working properly

'use strict';
var product_images = ['images/dragonheadgreatshield.png', 'images/plague_doc.jfif', 'images/ringedknightart.png'];
var product_attributes = [{ name: 'Strength', value: "500" }, { name: 'Flexibility', value: '50' }, { name: 'Height', value: '30cm' }, { name: 'Width', value: '50cm' }];
function Productimage(props) {

    return React.createElement(
        'div',
        { id: 'product_image_section' },
        React.createElement(
            'div',
            { id: 'main_product_image' },
            React.createElement('img', { src: product_images[0] })
        ),
        React.createElement(Productallimages, null),
        React.createElement(Productimagedescription, null)
    );
}
function Productallimages(props) {
    var smallimages = [];
    for (var i = 0; i < product_images.length; i++) {
        if (i == 0) {
            smallimages.push(React.createElement('img', { onClick: image_change, 'class': 'product_image_select selected_product_image', src: product_images[i] }));
        } else {
            smallimages.push(React.createElement('img', { onClick: image_change, 'class': 'product_image_select', src: product_images[i] }));
        }
    }
    return React.createElement(
        'div',
        { id: 'product_images_container' },
        smallimages
    );
}
function image_change(e) {
    var selected = e.target;var container = document.querySelector('#product_images_container');
    for (var i = 0; i < container.children.length; i++) {
        container.children[i].classList.remove('selected_product_image');
    }
    selected.classList.add('selected_product_image');
    var maincontainer = document.querySelector('#main_product_image img');
    maincontainer.src = selected.src;
}
function Productimagedescription(props) {
    var product_attributerows = [];
    for (var i = 0; i < product_attributes.length; i++) {
        product_attributerows.push(React.createElement(
            'div',
            { 'class': 'product_imageattribute' },
            ' ',
            React.createElement(
                'strong',
                null,
                product_attributes[i].name
            ),
            React.createElement(
                'span',
                null,
                product_attributes[i].value
            )
        ));
    }
    return React.createElement(
        'div',
        { 'class': 'product_imageattribute_container' },
        product_attributerows
    );
}

export { render_product_desc };