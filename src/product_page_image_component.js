'use strict';
var product_images = [];
var product_attributes = [
    {name:'Strength', value:"500"},
    { name:'Flexibility', value:'50'},
    { name:'Height', value:'30cm'},
    { name:'Width', value:'50cm'}
];
function Productimage(props) {

    return <div>
        <div id="main_product_image">
            <img src={product_images[0]} />
        </div>
        <Productallimages />
        <Productimagedescription />
   </div>;
}
function Productallimages(props) {
    var smallimages = [];
    for (let i = 0; i < product_images.length; i++) {
        smallimages.push(<img onClick={image_change} class="product_image_select" src={product_images[i]} />)
    }
    return <div id="product_images_container">
        {smallimages}
    </div>;
}
function image_change(e) {
    var selected = e.target;
    var maincontainer = document.querySelector('#main_product_image img');
    maincontainer.src = selected.src;
}
function Productimagedescription(props) {
    var product_attributerows = [];
    for (let i = 0; i < product_attributes.length; i++) {
        product_attributerows.push(<div class="product_imageattribute"> <strong>{product_attributes[i].name}</strong>
            <span>{product_attributes[i].value}</span></div>);
    }
    return <div class='product_imageattribute_container'>
        {product_attributerows}
    </div>;
}

function render_product_image() {
    //var target = document.getElementById('');
    //ReactDOM.render();
}
export {
    Productimage
}