'use strict';
/*alert("lmao");
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}*/

//let domContainer = document.querySelector('#like_button_container');
//ReactDOM.render(<LikeButton />, domContainer);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var avatararray = ["Acid_Cloud.png", "Acid_Cloud.png", "Acid_Cloud.png"];
var commenternamearr = ["Jenny", "Joe", "Jack"];
var commentdatearr = ["5 days ago", "2 days ago", "4 days ago"];
var commenttextarr = ["Some text", "Some text", "Some text"];
var container = [];
function synchdivs() {
    var divnum = 3;
    for (var i = 0; i < divnum; i++) {
        container.push(React.createElement(Comment, { comavatar: avatararray[i], comcommentername: commenternamearr[i], comcommentdate: commentdatearr[i], comcommenttext: commenttextarr[i] }));
        alert(_typeof(container[0]));
        //shell.removeAttribute("id");
    }
}
//let domContainer1 = document.querySelector('#topbarreact');
//ReactDOM.render(<Topbar />, domContainer1);

function lmao() {
    var domContainer2 = document.querySelector('#comments');
    ReactDOM.render(React.createElement(Comment, null), domContainer2);
}
//////////
/*this variable is for the user but it is obviously very redundant and inefficient since most of this
 would've been fetched efficiently from the db*/
var logged_user = { login_state: false, user_name: '', user_basket: [] };
var qtags = { brands: [], pricerange: [] };var qstring = '';
var items;
function initial_server_req() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            alert(res);
            logged_user = JSON.parse(res);
            alert(JSON.parse(res).user_name);
            barrend();
            //itemrend(false);
        }
    };
    req.open('GET', 'searched_products.php?sessionvals=1');
    req.send();
}
initial_server_req();

function query_search() {
    var brands = '';
    qstring = '';
    for (var i = 0; i < qtags.brands.length; i++) {
        //qstring += '&brand' + i + '=' + qtags.brands;
        if (i == qtags.brands.length - 1) {
            brands += '&brand' + i + '=\'' + qtags.brands[i] + '\'';
        } else {
            brands += '&brand' + i + '=\'' + qtags.brands[i] + '\',';
        }
    }
    if (brands != '' && brands != null) {
        qstring = brands;
    }
    if (qtags.pricerange[0] != null && qtags.pricerange[0] != '') {
        qstring += '&prrangelow=' + qtags.pricerange[0] + "&prrangehigh=" + qtags.pricerange[1];
    }
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            alert(res);
            items = JSON.parse(res);
            itemrend(false);
        }
    };
    req.open('GET', 'searched_products.php?qprod=1' + qstring);
    req.send();
}
function initial_item_load() {
    //alert('yes')
    var q;
    var req = new XMLHttpRequest();var qindic;
    if (q == '' || q == null) {
        qindic = 'false';
    } else {
        qindic = q; //will form query
    }
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            alert(res);
            items = JSON.parse(res);
            itemrend(false);
        }
    };
    req.open('GET', 'searched_products.php?initialitemreq=1');
    req.send();
}
initial_item_load();
var fil = { brand: [], name: [], price: null, rating: null };
/*var items = [
    { brand: "lmao", name: "Blue Mouse and some really long text asda sd a s d a s d a s d asd", price: 165.99, rating: 4.4, ratingnumber: 145, itemimg: "Acid_Cloud.png", productid:66135},
    { brand: "Radeon", name: "Blue Mouse", price: 165.99, rating: 4.4, ratingnumber: 145, itemimg: "Acid_Cloud.png", productid: 68646},
    { brand: "AMD", name: "Blue Mouse", price: 165.99, rating: 4.4, ratingnumber: 145, itemimg: "Acid_Cloud.png", productid: 68946},
    { brand: "AMD", name: "Blue Mouse", price: 165.99, rating: 4.4, ratingnumber: 145, itemimg: "Acid_Cloud.png", productid: 78646 },
    
];*/
function check_login() {
    var nam = document.getElementById('login_name_input').value.trim();
    var pas = document.getElementById('login_password_input').value.trim();
    //alert('searched_products.php?loginusername=' + nam + "&loginuserpassword=" + pas);
    if (nam == '' || nam == null || pas == '' || pas == null) {
        alert('Please Fill both fields');
    } else {
        var dataf = new FormData();
        dataf.append('loginusername', nam);
        dataf.append('loginuserpassword', pas);
        var req = new XMLHttpRequest();
        //req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = this.responseText;
                if (res == 'false') {
                    alert('Username or password is wrong');
                } else {
                    alert(res);
                    window.location.reload();
                }
            }
        };
        req.open('POST', 'searched_products.php', true);
        req.send(dataf);
    }
}
function Loginbox(props) {

    return React.createElement(
        "div",
        { id: "dynamic_login_section", onClick: toggle_login },
        React.createElement(
            "button",
            { type: "button" },
            React.createElement("i", { "class": "fa fa-times" })
        ),
        React.createElement(
            "form",
            { onClick: function onClick(e) {
                    e.stopPropagation();
                } },
            React.createElement(
                "label",
                { "for": "username" },
                "Username"
            ),
            React.createElement("input", { name: "loginusername", id: "login_name_input" }),
            React.createElement(
                "label",
                { "for": "userpassword" },
                "Password"
            ),
            React.createElement("input", { name: "loginuserpassword", id: "login_password_input" }),
            React.createElement(
                "button",
                { type: "button", onClick: check_login },
                "Login"
            )
        )
    );
}
function add_basket(e) {
    var itemid = e.target.parentElement.parentElement.parentElement.id;
    var jsoitem;var basketstate = false;
    for (var i = 0; i < items.length; i++) {
        if (items[i].productid == itemid) {
            logged_user.user_basket.push(items[i]);
            jsoitem = JSON.stringify(items[i]);
            barrend();
            itemrend(false);
        }
    }

    var dataf = new FormData();
    dataf.append('addtobasket', 1);
    dataf.append('basket', jsoitem);
    var req = new XMLHttpRequest();
    //req.setRequestHeader("Content-type", "application/json");
    req.open('POST', 'searched_products.php', true);
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            //alert(res);
        }
    };
    req.send(dataf);
}
function remove_basket(e) {
    var itemid = e.target.parentElement.parentElement.parentElement.id;
    var jsoitem;
    for (var i = 0; i < logged_user.user_basket.length; i++) {
        //alert('it id is =' + itemid + ' and ' + logged_user.user_basket[i].productid);
        if (itemid == logged_user.user_basket[i].productid) {
            //logged_user.user_basket.splice(i, 1);
            jsoitem = JSON.stringify(logged_user.user_basket[i]);
            logged_user.user_basket.splice(i, 1);
            barrend();
            itemrend(false);
        }
    }
    var dataf = new FormData();
    dataf.append('removefrombasket', 1);
    dataf.append('removeitem', jsoitem);
    var req = new XMLHttpRequest();
    //req.setRequestHeader("Content-type", "application/json");
    req.open('POST', 'searched_products.php', true);
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            //alert(res);
        }
    };
    req.send(dataf);
}
function Itemstack(props) {
    var its = props.itemsa; //obviouslty it needs another function for handling the data
    var itemcont = [];var indexarray = [];
    for (var i = 0; i < logged_user.user_basket.length; i++) {
        indexarray.push(logged_user.user_basket[i].productid);
    }
    for (var o = 0; o < its.length; o++) {
        itemcont.push(React.createElement(Item, { content: its[o], indexes: indexarray, itemnum: o }));
        //alert(its[0].brand);
    }
    return React.createElement(
        "div",
        null,
        React.createElement(Loginbox, null),
        itemcont
    );
}
function Item(props) {

    return React.createElement(
        "div",
        { "class": "item", id: props.content.productid },
        React.createElement(Itemimage, { imagecontent: props.content.itemimg }),
        React.createElement(Itemdescript, { productbrand: props.content.brand, productname: props.content.name,
            price: props.content.price, productid: props.content.productid,
            rating: props.content.rating, indexes: props.indexes, starnum: props.itemnum }),
        React.createElement("div", { "class": "favoriteicon" })
    );
}
function Itemimage(props) {
    return React.createElement(
        "div",
        { "class": "itemimage" },
        React.createElement("img", { src: props.imagecontent })
    );
}

function Starrating(props) {
    var stars = [];var tempstar = props.rating;
    var tempnum = 0;
    for (var i = 1; i <= 5; i++) {
        //if (tempstar <= 1) {
        //stars.push(<Star rating={product_object.product_rating}/>);
        //}
        //else {

        //}
        stars.push(React.createElement(Star, { rating: (tempstar - tempnum).toFixed(2), starnum: props.starnum }));
        tempnum++;
        //alert(tempstar - i);
    }
    return React.createElement(
        "div",
        { "class": 'star_rating_container ' + tempstar },
        React.createElement(
            "div",
            { "class": "star_rating" },
            React.createElement(
                "div",
                { "class": "rating_star star1" },
                stars[0]
            ),
            React.createElement(
                "div",
                { "class": "rating_star star2" },
                stars[1]
            ),
            React.createElement(
                "div",
                { "class": "rating_star star3" },
                stars[2]
            ),
            React.createElement(
                "div",
                { "class": "rating_star star4" },
                stars[3]
            ),
            React.createElement(
                "div",
                { "class": "rating_star star5" },
                stars[4]
            )
        )
    );
}
function Star(props) {
    var num = props.rating;
    var starnums = "partialstar" + props.starnum;
    var starnumurl = "url(#" + starnums + ")";
    //alert(num);
    if (num > 1) {
        num = 1;
    }
    if (props.rating <= 0) {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "svg",
                { width: "24", height: "24", viewBox: "0 0 24 24" },
                React.createElement("path", { "fill-rule": "nonzero", fill: "gray", d: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" })
            )
        );
    } //DO NOT REDEFINE LINEAR GRADIENTS OF SVGS MAKE NEW ONE IF YOU WANT SOMETHING DIFFERENT
    else {
            var contain1 = (num * 100).toFixed(0) + "%";
            //alert(contain1 + "% to " + ((1 - num) * 100).toFixed(0) + "%"); 
            var contain2 = ((1 - num) * 100).toFixed(0) + "%";
            if (props.rating < 1) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "svg",
                        { viewBox: "0 0 24 24" },
                        React.createElement(
                            "defs",
                            null,
                            React.createElement(
                                "linearGradient",
                                { id: starnums },
                                React.createElement("stop", { offset: contain1, stopColor: "gold" }),
                                React.createElement("stop", { offset: contain1, stopColor: "gray" })
                            )
                        ),
                        React.createElement("path", { "fill-rule": "nonzero", stroke: "black", "stroke-width": "0.5px", fill: starnumurl, d: "m12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" })
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "svg",
                        { viewBox: "0 0 24 24" },
                        React.createElement(
                            "defs",
                            null,
                            React.createElement(
                                "linearGradient",
                                { id: "fullstar" },
                                React.createElement("stop", { offset: 100 + "%", stopColor: "gold" }),
                                React.createElement("stop", { offset: 100 + "%", stopColor: "gray" })
                            )
                        ),
                        React.createElement("path", { "fill-rule": "nonzero", stroke: "black", "stroke-width": "0.5px", fill: "url(#fullstar)", d: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" })
                    )
                );
            }
        }
}

function Itemdescript(props) {
    if (logged_user.login_state) {
        if (props.indexes.indexOf(props.productid) != -1) {
            return React.createElement(
                "div",
                { "class": "itemdescript" },
                React.createElement(
                    "div",
                    { "class": "itemtitle" },
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "b",
                            { "class": "item_brandname" },
                            props.productbrand
                        ),
                        props.productname
                    ),
                    React.createElement(
                        "div",
                        { "class": "itemstars" },
                        React.createElement(Starrating, { rating: props.rating, starnum: props.starnum }),
                        React.createElement(
                            "span",
                            null,
                            props.ratingnumber
                        )
                    ),
                    React.createElement(
                        "p",
                        { "class": "pricetag" },
                        props.price
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "itembuttons" },
                    React.createElement(
                        "button",
                        { type: "button", "class": "addeditem", onClick: function onClick(e) {
                                remove_basket(e);
                            } },
                        "In Your Basket ",
                        React.createElement("i", { "class": "fa fa-check" })
                    )
                )
            );
        } else {
            return React.createElement(
                "div",
                { "class": "itemdescript" },
                React.createElement(
                    "div",
                    { "class": "itemtitle" },
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "b",
                            { "class": "item_brandname" },
                            props.productbrand
                        ),
                        props.productname
                    ),
                    React.createElement(
                        "div",
                        { "class": "itemstars" },
                        React.createElement(Starrating, { rating: props.rating, starnum: props.starnum }),
                        React.createElement(
                            "span",
                            null,
                            props.ratingnumber
                        )
                    ),
                    React.createElement(
                        "p",
                        { "class": "pricetag" },
                        props.price
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "itembuttons" },
                    React.createElement(
                        "button",
                        { type: "button", "class": "addbasketbutton", onClick: function onClick(e) {
                                add_basket(e);
                            } },
                        "Add to the Basket"
                    )
                )
            );
        }
    } else {
        return React.createElement(
            "div",
            { "class": "itemdescript" },
            React.createElement(
                "div",
                { "class": "itemtitle" },
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "b",
                        { "class": "item_brandname" },
                        props.productbrand
                    ),
                    props.productname
                ),
                React.createElement(
                    "div",
                    { "class": "itemstars" },
                    React.createElement(Starrating, { rating: props.rating, starnum: props.starnum }),
                    React.createElement(
                        "span",
                        null,
                        props.ratingnumber
                    )
                ),
                React.createElement(
                    "p",
                    { "class": "pricetag" },
                    props.price
                )
            ),
            React.createElement(
                "div",
                { "class": "itembuttons" },
                React.createElement(
                    "button",
                    { type: "button", "class": "addbasketbutton", onClick: function onClick(e) {
                            add_basket(e);
                        } },
                    "Add to the Basket"
                )
            )
        );
    }
}
var dbitems;
function reqitems() {
    var y = "lmao";
    var x = new XMLHttpRequest();
    /*if (qtags.brands.length == 0 && qtags.pricerange == null) {
        y = "all=1";
        x.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                dbitems = JSON.parse(this.responseText);
                //alert(alternatear[9]);
            }
        };
        x.open("GET", "reactexphp.php?" + y, true);
        //alert("fleximagephp.php?imageid='" + y + "'");
        x.send();
    }
    
        if (qtags.brands.length != 0) {
            if (y != "") {
                y += "&brands=" + qtags.brands.join();
            }
            else {
                y = "brands="+qtags.brands.join();
            }
        }
        if (qtags.pricerange != null) {
            if (y != "") {
                y += "&pricerange=" + qtags.pricerange;
            }
            else {
                y = "pricerange=" + qtags.pricerange;
            }
        }
        x.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                dbitems = JSON.parse(this.responseText);
                //alert(alternatear[9]);
            }
        };
        x.open("GET", "reactexphp.php?" + y, true);
        //alert("fleximagephp.php?imageid='" + y + "'");
        x.send();
    */
}
var itemcut = 0;
function itemrend(check) {
    var f = qtags;
    //alert(f.pricerange);
    //alert(f.brands.length);
    var altarr = []; //obviously pointless once server queries get into play
    var leng = document.querySelectorAll(".items").length;
    if (check == true) {
        if (itemcut + 10 <= items.length) {
            itemcut += 10;
        } else {
            //alert("you're at the end");
            return;
        }
    } else {
        itemcut = 10;
    }
    var actualarr = items.slice(0, itemcut + 1);
    var loc = document.querySelectorAll(".items")[leng - 1];
    //if (f.pricerange.length == 0 && f.brands.length == 0) {
    ReactDOM.render(React.createElement(Itemstack, { itemsa: actualarr }), loc);
    //}
    //again, pretty redundant and inefficient without server
    //else {
    /*for (var iya = 0; iya < items.length; iya++) {
        if (f.brands.length > 0) {
            if (f.pricerange.length != null) {
                var format = f.pricerange.split(" ");
                var prilow = parseInt(format[0]); var prihigh = parseInt(format[2]);
                //for (var u = 0; u < f.brands.length; u++) {
                if ((f.brands.includes(items[iya].brand)) && (items[iya].price < prihigh && items[iya].price > prilow)) {
                    altarr.push(items[iya]);
                    //alert(items[i].brand);
                    //alert(altarr[0]);
                }
                //alert(u);
                //}
            }
            else {
                if (f.brands.includes(items[iya].brand)) {
                    altarr.push(items[iya]);
                }
            }
        }*/
    /*if ((f.pricerange.length != 0) && (f.brands.length <= 0)) {
        var format = f.pricerange.split(" ");
        var prilow = parseInt(format[0]); var prihigh = parseInt(format[2]);
        if (items[iya].price < prihigh && items[iya].price > prilow) {
            altarr.push(items[iya]);
        }
    }*/
    //  }
    //actualarr = altarr.slice(0, itemcut + 1);
    //ReactDOM.render(<Itemstack itemsa={actualarr} />, loc);
}

//////////////////////////////////////////////////
/*bar*/

var Topbar = function (_React$Component) {
    _inherits(Topbar, _React$Component);

    function Topbar(props) {
        _classCallCheck(this, Topbar);

        var _this = _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).call(this, props));

        _this.state = {
            logo: "lol"
        };
        return _this;
    }

    _createClass(Topbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "topbar_inside" },
                React.createElement(Upperbar, null),
                React.createElement(Lowerbar, null)
            );
        }
    }]);

    return Topbar;
}(React.Component);

function toggle_login() {
    var log = document.getElementById('dynamic_login_section');
    if (log.style.display == 'flex') {
        log.style.display = 'none';
        return;
    } else {
        log.style.display = 'flex';
        return;
    }
}
function Upperbar(props) {
    if (logged_user.login_state) {
        return React.createElement(
            "div",
            { id: "upperbar" },
            React.createElement(
                "span",
                null,
                React.createElement("img", { src: "Acid_Cloud.png" })
            ),
            React.createElement(
                "div",
                { "class": "search_container" },
                React.createElement("input", { type: "text", "class": "search_bar" }),
                React.createElement("i", { "class": "search_icon" })
            ),
            React.createElement(
                "div",
                { "class": "logged_user_options" },
                React.createElement(
                    "div",
                    { "class": "user_container" },
                    logged_user.user_name
                ),
                React.createElement(
                    "div",
                    { "class": "icon_couple" },
                    React.createElement(
                        "div",
                        { "class": "user_owned_basket" },
                        React.createElement(
                            "a",
                            null,
                            React.createElement("i", { "class": "fa fa-shopping-basket" }),
                            '(' + logged_user.user_basket.length + ') items'
                        )
                    )
                )
            )
        );
    }
    return React.createElement(
        "div",
        { id: "upperbar" },
        React.createElement(
            "span",
            null,
            React.createElement("img", { src: "Acid_Cloud.png" })
        ),
        React.createElement(
            "div",
            { "class": "search_container" },
            React.createElement("input", { type: "text", "class": "search_bar" }),
            React.createElement("i", { "class": "search_icon" })
        ),
        React.createElement(
            "div",
            { "class": "user_options" },
            React.createElement(
                "div",
                { "class": "icon_couple" },
                React.createElement(
                    "p",
                    { onClick: toggle_login },
                    "Login"
                )
            ),
            React.createElement(
                "div",
                { "class": "icon_couple" },
                React.createElement(
                    "p",
                    null,
                    "Basket"
                )
            )
        )
    );
}
function Lowerbar(props) {
    return React.createElement(
        "div",
        { id: "lowerbar" },
        React.createElement(
            "div",
            { "class": "topdropbutton" },
            React.createElement(
                "a",
                { href: "#", "class": "topdroplink" },
                "General Goods"
            ),
            React.createElement(Dropdown, { contents: dropcontents })
        ),
        React.createElement(
            "div",
            { "class": "topdropbutton" },
            React.createElement(
                "a",
                { href: "#", "class": "topdroplink" },
                "Men"
            ),
            React.createElement(Dropdown, { contents: dropcontents })
        ),
        React.createElement(
            "div",
            { "class": "topdropbutton" },
            React.createElement(
                "a",
                { href: "#", "class": "topdroplink" },
                "Women"
            ),
            React.createElement(Dropdown, { contents: dropcontents })
        ),
        React.createElement(
            "div",
            { "class": "topdropbutton" },
            React.createElement(
                "a",
                { href: "#", "class": "topdroplink" },
                "Children"
            ),
            React.createElement(Dropdown, { contents: dropcontents })
        )
    );
}
var dropcontents = [{
    contentname: "Wear", contentlinks: [{ linkname: "Wear1", linklink: "#" }, { linkname: "Wear2", linklink: "#" }, { linkname: "Wear3", linklink: "#" }, { linkname: "Wear4", linklink: "#" }]
}, {
    contentname: "Wear", contentlinks: [{ linkname: "Wear1", linklink: "#" }, { linkname: "Wear2", linklink: "#" }, { linkname: "Wear3", linklink: "#" }, { linkname: "Wear4", linklink: "#" }] }, {
    contentname: "Wear", contentlinks: [{ linkname: "Wear1", linklink: "#" }, { linkname: "Wear2", linklink: "#" }, { linkname: "Wear3", linklink: "#" }, { linkname: "Wear4", linklink: "#" }] }];
function Dropdown(props) {
    var dmenucont = [];
    for (var yo = 0; yo < props.contents.length; yo++) {
        dmenucont.push(React.createElement(Itemcolumn, { content: props.contents[yo] }));
    }
    return React.createElement(
        "div",
        { "class": "dropdown_menu" },
        dmenucont
    );
}
function Itemcolumn(props) {
    var licont = [];
    var t = props.content.contentname;
    for (var i = 0; i < props.content.contentlinks.length; i++) {
        licont.push(React.createElement(
            "li",
            null,
            React.createElement(
                "a",
                { href: props.content.contentlinks[i].linklink },
                props.content.contentlinks[i].linkname
            )
        ));
    }
    return React.createElement(
        "div",
        { "class": "item_column" },
        React.createElement(
            "a",
            { "class": "item_colum_title" },
            t
        ),
        React.createElement(
            "ul",
            null,
            licont
        )
    );
}
function barrend() {
    var p = document.getElementById("topbar");
    ReactDOM.render(React.createElement(Topbar, null), p);
}
/*barend*/

var allbrands = ["Radeon", "Nvidia", "AMD", "Sony"];
var allbrands2 = allbrands.map(function (x) {
    return x.toUpperCase();
});

var Itembrandfilter = function (_React$Component2) {
    _inherits(Itembrandfilter, _React$Component2);

    function Itembrandfilter(props) {
        _classCallCheck(this, Itembrandfilter);

        var _this2 = _possibleConstructorReturn(this, (Itembrandfilter.__proto__ || Object.getPrototypeOf(Itembrandfilter)).call(this, props));

        _this2.brandsearch = _this2.brandsearch.bind(_this2);
        _this2.state = {
            brand: "none"
        };
        return _this2;
    }

    _createClass(Itembrandfilter, [{
        key: "brandsearch",
        value: function brandsearch(e) {
            if (e.target.value != "" || e.target.value != null) {
                this.setState({ brand: e.target.value });
                //alert("lol");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "brandfilter" },
                React.createElement(
                    "h3",
                    null,
                    "Brands"
                ),
                React.createElement("input", { type: "text", id: "brand_input", onChange: this.brandsearch }),
                React.createElement(Brandchecks, { selectedbrands: this.state.brand })
            );
        }
    }]);

    return Itembrandfilter;
}(React.Component);
//essentially find and sort


function checkbrands(tex, arr) {
    var b = arr;
    //tex = tex.toUpperCase();
    var succ = [];
    for (var q = 0; q < b.length; q++) {
        if (b[q].indexOf(tex) > -1 || b[q].indexOf(tex.toUpperCase()) > -1) {
            succ.push(b[q]);
        }
    }
    succ.sort(function (a, b) {
        return a.indexOf(tex) - b.indexOf(tex) || a.indexOf(tex.toUpperCase()) - b.indexOf(tex.toUpperCase());
    });
    return succ;
}
function Brandchecks(props) {
    var filter = props.selectedbrands;
    var brands = []; //hypothetically assuming we have the list of brands
    var finalarr = [];
    if (filter == null || filter == "" || filter == "none") {
        brands = allbrands;
        for (var x = 0; x < brands.length; x++) {
            finalarr.push(React.createElement(Checkboxcr, { labname: brands[x] }));
        }
    } else {
        brands = checkbrands(filter, allbrands);
        for (var y = 0; y < brands.length; y++) {
            finalarr.push(React.createElement(Checkboxcr, { labname: brands[y] }));
        }
    }
    return React.createElement(
        "div",
        { id: "brandcheckboxes" },
        finalarr
    );
}
/*function Checkboxcr(props) {
    return <div>
        <input type="checkbox" name={props.labname} value={props.labname}
            onClick={function (e) { if (this.checked == true) { alert("lol"); } }} />
        <label for={props.labname}>{props.labname}</label>
    </div>;
}*/
/*function sortadjust() {
    //var tagsec = document.getElementById("sorttags");
    if (this.checked == true) {
        alert("checked");
        tagsec.style.display = "flex";
        qtags.push(this.value);
        Mod.sortbarrend(qtags);
    }
    else {
        alert("unchecked");
        tagsec.style.display = "none";
        var ind = qtags.indexOf(this.value);
        qtags.splice(ind, 1);
    }
}*/

var Checkboxcr = function (_React$Component3) {
    _inherits(Checkboxcr, _React$Component3);

    function Checkboxcr(props) {
        _classCallCheck(this, Checkboxcr);

        var _this3 = _possibleConstructorReturn(this, (Checkboxcr.__proto__ || Object.getPrototypeOf(Checkboxcr)).call(this, props));

        _this3.checkhandle = _this3.checkhandle.bind(_this3);
        _this3.state = {
            checked: false,
            labname: props.labname
        };
        return _this3;
    } //this entire class seems completely unnecessary compared to just function comp and jscript addevent loop


    _createClass(Checkboxcr, [{
        key: "checkhandle",
        value: function checkhandle(e) {
            if (e.target.checked == true) {
                qtags.brands.push(e.target.value);
                reqitems();
                query_search();
                itemrend(false);
                sortbarrend(qtags);
                window.scrollTo(0, 0);
                this.setState(checked, true);
            }
            if (e.target.checked == false) {
                qtags.brands.splice(qtags.brands.indexOf(e.target.value), 1);
                reqitems();
                query_search();
                itemrend(false);
                sortbarrend(qtags);
                window.scrollTo(0, 0);
                this.setState(checked, false);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "checkbox", name: this.state.labname, value: this.state.labname,
                    defaultChecked: this.state.checked, onChange: this.checkhandle }),
                React.createElement(
                    "label",
                    { "for": this.state.labname },
                    this.state.labname
                )
            );
        }
    }]);

    return Checkboxcr;
}(React.Component);

function tagcancel(e) {
    var checkboxes = document.querySelectorAll("#brandcheckboxes input");
    var radiotext = document.querySelectorAll("#pricemanualinput input[type='text']");
    var radios = document.querySelectorAll("#priceranges input[type='radio']");
    var lowprice = document.getElementById("manuallowprice").value;
    var highprice = document.getElementById("manualhighprice").value;
    for (var t = 0; t < checkboxes.length; t++) {
        if (checkboxes[t].value == e.target.parentElement.children[0].innerHTML) {
            checkboxes[t].checked = false;
            qtags.brands.splice(qtags.brands.indexOf(e.target.parentElement.children[0].innerHTML), 1);
        }
    }
    if (radiotext[0].value + " - " + radiotext[1].value == e.target.parentElement.children[0].innerHTML) {
        radiotext[0].value = "";
        radiotext[1].value = "";
        qtags.pricerange[0] = null;
        qtags.pricerange[1] = null;
    }
    for (var x = 0; x < radios.length; x++) {
        if (radios[x].value == e.target.parentElement.children[0].innerHTML) {
            radios[x].checked = false;
            qtags.pricerange[0] = null;
            qtags.pricerange[1] = null;
        }
    }
    if (lowprice == null || lowprice == "" || highprice == null || highprice == "") {
        //qtags.pricerange = null;
    } else {
        qtags.pricerange[0] = null;
        qtags.pricerange[1] = null;
    }
    reqitems();
    query_search();
    itemrend(false);
    sortbarrend(qtags);
    window.scrollTo(0, 0);
}
function suprend() {
    var top = document.getElementById("brandsortcontainer");
    ReactDOM.render(React.createElement(Itembrandfilter, null), top);
}
function manualpriceenter() {
    var lowprice = document.getElementById("manuallowprice").value;
    var highprice = document.getElementById("manualhighprice").value;
    if (lowprice == null || lowprice == "" || highprice == null || highprice == "") {
        alert("Please Enter proper numbers");
        return;
    } else {
        var fulprice = lowprice + " - " + highprice;
        qtags.pricerange[0] = lowprice;qtags.pricerange[1] = highprice;
        reqitems();
        query_search();
        itemrend(false);
        window.scrollTo(0, 0);
        sortbarrend(qtags);
    }
}
var pricerange = [{ lower: 50, upper: 100 }, { lower: 100, upper: 200 }, { lower: 200, upper: 500 }, { lower: 500, upper: 1000 }];

var Pricesortbar = function (_React$Component4) {
    _inherits(Pricesortbar, _React$Component4);

    function Pricesortbar(props) {
        _classCallCheck(this, Pricesortbar);

        var _this4 = _possibleConstructorReturn(this, (Pricesortbar.__proto__ || Object.getPrototypeOf(Pricesortbar)).call(this, props));

        _this4.state = {};
        return _this4;
    }

    _createClass(Pricesortbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "priceranges" },
                React.createElement(
                    "h3",
                    null,
                    "Price"
                ),
                React.createElement(Manualpricerange, null),
                React.createElement(Setpricerange, null)
            );
        }
    }]);

    return Pricesortbar;
}(React.Component);

function Manualpricerange(props) {
    return React.createElement(
        "div",
        { id: "pricemanualinput" },
        React.createElement("input", { type: "text", id: "manuallowprice" }),
        " - ",
        React.createElement("input", { type: "text", id: "manualhighprice" }),
        React.createElement(
            "button",
            { type: "button", onClick: manualpriceenter },
            "A"
        )
    );
}
function Setpricerange(props) {
    var prices = [];
    for (var i = 0; i < pricerange.length; i++) {
        prices.push(pricerange[i].lower + " - " + pricerange[i].upper);
    }
    return React.createElement(Pricerangeradios, { values: prices });
}
function Pricerangeradios(props) {
    var radiobuts = [];
    for (var yo = 0; yo < props.values.length; yo++) {
        radiobuts.push(React.createElement(Priceradio, { content: props.values[yo] }));
    }
    return React.createElement(
        "div",
        null,
        radiobuts
    );
}

var Priceradio = function (_React$Component5) {
    _inherits(Priceradio, _React$Component5);

    function Priceradio(props) {
        _classCallCheck(this, Priceradio);

        var _this5 = _possibleConstructorReturn(this, (Priceradio.__proto__ || Object.getPrototypeOf(Priceradio)).call(this, props));

        _this5.handle = _this5.handle.bind(_this5);
        _this5.state = {
            content: props.content
        };
        return _this5;
    }

    _createClass(Priceradio, [{
        key: "handle",
        value: function handle(e) {
            if (e.target.checked == true) {
                qtags.pricerange[0] = e.target.value.split('-')[0];
                qtags.pricerange[1] = e.target.value.split('-')[1];
                reqitems();
                query_search();
                itemrend(false);
                sortbarrend(qtags);
                window.scrollTo(0, 0);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "radio", id: this.state.content, name: "pricerad", value: this.state.content, onChange: this.handle }),
                React.createElement(
                    "label",
                    { "for": this.state.content },
                    this.state.content
                )
            );
        }
    }]);

    return Priceradio;
}(React.Component);

function priceradiorend() {
    var filt;
    var t = document.getElementById("pricerangecontainer");
    ReactDOM.render(React.createElement(Pricesortbar, null), t);
}
/* will mosty likely transition into a general renderering parent once we have php bookkeeping for us
  function sorts(props) {

}*/
function Itemsortbar(props) {
    return React.createElement(
        "div",
        { id: "itemsortbar" },
        React.createElement(Itemmainsort, { searchnum: props.searchnum, searchterm: props.searchterm, selects: props.selects }),
        React.createElement(Itemsorttags, { tags: props.tags })
    );
}
function Itemmainsort(props) {
    return React.createElement(
        "div",
        { id: "itemmainsort" },
        React.createElement(
            "p",
            null,
            "There are ",
            props.searchnum,
            " results for the search ",
            props.searchterm
        ),
        React.createElement(Sortselect, { sortselects: props.selects })
    );
}
function Sortselect(props) {
    var s = props.sortselects;
    var optar = [];
    for (var t = 0; t < s.length; t++) {
        optar.push(React.createElement(
            "option",
            { value: s[t] },
            s[t]
        ));
    }
    return React.createElement(
        "select",
        { id: "sortselection" },
        optar
    );
}
function Itemsorttags(props) {
    var tagse = props.tags;
    var spans = [];
    if (tagse.brands.length != 0) {
        for (var k = 0; k < tagse.brands.length; k++) {
            spans.push(React.createElement(
                "div",
                { "class": "sorttag" },
                React.createElement(
                    "span",
                    { "class": "sorttagname" },
                    tagse.brands[k]
                ),
                React.createElement(
                    "span",
                    { "class": "cancelsortbut", onClick: tagcancel },
                    "X"
                )
            ));
        }
    }
    if (tagse.pricerange[0] != null && tagse.pricerange[0] != '' && tagse.pricerange[1] != null && tagse.pricerange[1] != '') {
        spans.push(React.createElement(
            "div",
            { "class": "sorttag" },
            React.createElement(
                "span",
                { "class": "sorttagname" },
                tagse.pricerange[0] + "-" + tagse.pricerange[1]
            ),
            React.createElement(
                "span",
                { "class": "cancelsortbut", onClick: tagcancel },
                "X"
            )
        ));
    }
    return React.createElement(
        "div",
        { id: "sorttags" },
        spans
    );
}

function sortbarrend(tag) {
    var searnum = 5;
    var searterm = "Somet";
    var sel = ["Sort by Name", "Sort by Date", "Sort by Popularity"];
    var tago = tag;
    var lo = document.getElementById("sortsection");
    ReactDOM.render(React.createElement(Itemsortbar, { searchnum: searnum, searchterm: searterm, selects: sel, tags: qtags }), lo);
}

//let domContainer3 = document.querySelector('body');
//ReactDOM.render(container[1], domContainer3);
export { Item, Itemimage, Itemdescript, itemrend, items, Topbar, Upperbar, Lowerbar, suprend, Itemstack, barrend, Itembrandfilter, Brandchecks, checkbrands, Checkboxcr, Itemsortbar, Itemmainsort, Sortselect, Itemsorttags, sortbarrend, dropcontents, Dropdown, Itemcolumn, Manualpricerange, Setpricerange, Pricerangeradios, priceradiorend, Priceradio, Pricesortbar, pricerange, manualpriceenter, dbitems, reqitems };