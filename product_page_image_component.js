'use strict';

var product_images = [];
var product_attributes = [{ name: 'Strength', value: "500" }, { name: 'Flexibility', value: '50' }, { name: 'Height', value: '30cm' }, { name: 'Width', value: '50cm' }];
function Productimage(props) {

    return React.createElement(
        'div',
        null,
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
        smallimages.push(React.createElement('img', { onClick: image_change, 'class': 'product_image_select', src: product_images[i] }));
    }
    return React.createElement(
        'div',
        { id: 'product_images_container' },
        smallimages
    );
}
function image_change(e) {
    var selected = e.target;
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

function render_product_image() {
    //var target = document.getElementById('');
    //ReactDOM.render();
}
export { Productimage };