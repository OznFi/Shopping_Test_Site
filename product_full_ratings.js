'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rating_object = {
    total_rating: 4.7,
    total_rating_num: 146,
    star_5_ratings: 100,
    star_4_ratings: 40,
    star_3_ratings: 5,
    star_2_ratings: 1,
    star_1_ratings: 0
};

var Ratingcomment = function Ratingcomment(username, rating, date, content) {
    _classCallCheck(this, Ratingcomment);

    this.username = username;
    this.rating = rating;
    this.date = date;
    this.text = content;
};

var comments_ratings = [['Johny', 4.5, '14/02/1968', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Johny', 3.5, '14/02/1968', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Johny', 1.5, '14/02/1968', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'], ['Johny', 4.5, '14/02/1968', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']];
var classed_ratings = [];
function classifying() {
    for (var i = 0; i < comments_ratings.length; i++) {
        classed_ratings.push(new Ratingcomment(comments_ratings[i][0], comments_ratings[i][1], comments_ratings[i][2], comments_ratings[i][3]));
    }
}
classifying();

var Fullratings = function (_React$Component) {
    _inherits(Fullratings, _React$Component);

    function Fullratings() {
        _classCallCheck(this, Fullratings);

        return _possibleConstructorReturn(this, (Fullratings.__proto__ || Object.getPrototypeOf(Fullratings)).apply(this, arguments));
    }

    _createClass(Fullratings, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            render_ratings(classed_ratings);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Starratingtable, null),
                React.createElement(Ratingcommentsection, null)
            );
        }
    }]);

    return Fullratings;
}(React.Component);

function Starratingtable(props) {

    return React.createElement(
        'div',
        { id: 'full_rating_table' },
        React.createElement(
            'div',
            null,
            React.createElement(Bigrating, null)
        ),
        React.createElement(
            'div',
            null,
            React.createElement(Starbars, null)
        )
    );
}
function Bigrating(props) {

    return React.createElement(
        'div',
        { 'class': 'big_rating' },
        React.createElement(
            'span',
            { 'class': 'big_rating_text' },
            rating_object.total_rating
        ),
        React.createElement(Starrating, { rating: rating_object.total_rating })
    );
}
function Starbars(props) {

    return React.createElement(
        'div',
        { 'class': 'star_bars' },
        React.createElement(
            'div',
            { 'class': 'star_bar' },
            React.createElement(
                'div',
                { 'class': 'starbar_descriptor' },
                React.createElement(
                    'span',
                    null,
                    '5'
                ),
                React.createElement(Star, { rating: 5 })
            ),
            React.createElement(Bar, { allsize: rating_object.total_rating_num, size: rating_object.star_5_ratings }),
            React.createElement(
                'span',
                null,
                rating_object.star_5_ratings
            )
        ),
        React.createElement(
            'div',
            { 'class': 'star_bar' },
            React.createElement(
                'div',
                { 'class': 'starbar_descriptor' },
                React.createElement(
                    'span',
                    null,
                    '4'
                ),
                React.createElement(Star, { rating: 5 })
            ),
            React.createElement(Bar, { allsize: rating_object.total_rating_num, size: rating_object.star_4_ratings }),
            React.createElement(
                'span',
                null,
                rating_object.star_4_ratings
            )
        ),
        React.createElement(
            'div',
            { 'class': 'star_bar' },
            React.createElement(
                'div',
                { 'class': 'starbar_descriptor' },
                React.createElement(
                    'span',
                    null,
                    '3'
                ),
                React.createElement(Star, { rating: 5 })
            ),
            React.createElement(Bar, { allsize: rating_object.total_rating_num, size: rating_object.star_3_ratings }),
            React.createElement(
                'span',
                null,
                rating_object.star_3_ratings
            )
        ),
        React.createElement(
            'div',
            { 'class': 'star_bar' },
            React.createElement(
                'div',
                { 'class': 'starbar_descriptor' },
                React.createElement(
                    'span',
                    null,
                    '2'
                ),
                React.createElement(Star, { rating: 5 })
            ),
            React.createElement(Bar, { allsize: rating_object.total_rating_num, size: rating_object.star_2_ratings }),
            React.createElement(
                'span',
                null,
                rating_object.star_2_ratings
            )
        ),
        React.createElement(
            'div',
            { 'class': 'star_bar' },
            React.createElement(
                'div',
                { 'class': 'starbar_descriptor' },
                React.createElement(
                    'span',
                    null,
                    '1'
                ),
                React.createElement(Star, { rating: 5 })
            ),
            React.createElement(Bar, { allsize: rating_object.total_rating_num, size: rating_object.star_1_ratings }),
            React.createElement(
                'span',
                null,
                rating_object.star_1_ratings
            )
        )
    );
}
function Bar(props) {
    var fullsize = props.allsize;var usedsize = props.size; //we have the assumption that the size of the bar is 500px
    var scaledsize = parseInt(usedsize * (400 / fullsize));
    if (scaledsize < 5 && scaledsize > 0) {
        scaledsize = 5;
    }
    if (scaledsize == 0) {
        scaledsize = 0;
    }
    return React.createElement(
        'div',
        { 'class': 'fill_bar' },
        React.createElement('div', { 'class': 'fill', style: { width: scaledsize } })
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
        stars.push(React.createElement(Star, { rating: (tempstar - tempnum).toFixed(2) }));
        tempnum++;
        //alert(tempstar - i);
    }
    return React.createElement(
        'div',
        { 'class': 'star_rating_container ' + tempstar },
        React.createElement(
            'div',
            { 'class': 'star_rating' },
            React.createElement(
                'div',
                { 'class': 'rating_star star1' },
                stars[0]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star2' },
                stars[1]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star3' },
                stars[2]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star4' },
                stars[3]
            ),
            React.createElement(
                'div',
                { 'class': 'rating_star star5' },
                stars[4]
            )
        )
    );
}
function Star(props) {
    var num = props.rating;
    if (num > 1) {
        num = 1;
    }
    if (props.rating <= 0) {
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
                        { viewBox: '0 0 24 24' },
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
                        React.createElement('path', { 'fill-rule': 'nonzero', fill: 'url(#partialstar)', d: 'm12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' })
                    )
                );
            } else {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'svg',
                        { viewBox: '0 0 24 24' },
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
}
function Ratingcommentsection(props) {

    return React.createElement(
        'div',
        { id: 'ratings_comment_section' },
        React.createElement(Ratingstarfilter, null),
        React.createElement('div', { id: 'comments_container' })
    );
}
function Ratingstarfilter(props) {

    return React.createElement(
        'div',
        { 'class': 'star_filter_section' },
        React.createElement(
            'button',
            { type: 'button', 'class': 'star_filter_button', id: 'star_filter_5', onClick: function onClick(e) {
                    star_filter_ratings(e, 5);
                } },
            '5 Stars'
        ),
        React.createElement(
            'button',
            { type: 'button', 'class': 'star_filter_button', id: 'star_filter_4', onClick: function onClick(e) {
                    star_filter_ratings(e, 4);
                } },
            '4 Stars'
        ),
        React.createElement(
            'button',
            { type: 'button', 'class': 'star_filter_button', id: 'star_filter_3', onClick: function onClick(e) {
                    star_filter_ratings(e, 3);
                } },
            '3 Stars'
        ),
        React.createElement(
            'button',
            { type: 'button', 'class': 'star_filter_button', id: 'star_filter_2', onClick: function onClick(e) {
                    star_filter_ratings(e, 2);
                } },
            '2 Stars'
        ),
        React.createElement(
            'button',
            { type: 'button', 'class': 'star_filter_button', id: 'star_filter_1', onClick: function onClick(e) {
                    star_filter_ratings(e, 1);
                } },
            '1 Star'
        )
    );
}
function star_filter_ratings(e, filter) {
    var starnum = parseInt(filter);var allelements = document.querySelectorAll('.star_filter_button');
    var newratings = [];
    for (var i = 0; i < classed_ratings.length; i++) {
        if (classed_ratings[i].rating >= starnum && classed_ratings[i].rating <= starnum + 1) {
            newratings.push(classed_ratings[i]);
        }
    }
    if (e.target.classList.contains('active_star_filter')) {
        e.target.classList.remove('active_star_filter');
        render_ratings(classed_ratings);
        return;
    } else {
        for (var y = 0; y < allelements.length; y++) {
            allelements[y].classList.remove('active_star_filter');
        }
        e.target.classList.add('active_star_filter');
        render_ratings(newratings);
    }
    //alert(e.target.classList[0]);
}
function Comments(props) {
    var coms = [];
    if (props.givenarr.length == 0) {
        return React.createElement(
            'div',
            { id: 'shown_rating_comments' },
            React.createElement(
                'div',
                { id: 'no_star_comments' },
                React.createElement(
                    'p',
                    null,
                    'No comments for the selected rating'
                )
            )
        );
    }
    for (var i = 0; i < props.givenarr.length; i++) {
        coms.push(React.createElement(Comment, { commentername: props.givenarr[i].username, commentstars: props.givenarr[i].rating,
            commentcontent: props.givenarr[i].text, commentdate: props.givenarr[i].date }));
    }
    return React.createElement(
        'div',
        { id: 'shown_rating_comments' },
        coms
    );
}
function Comment(props) {
    return React.createElement(
        'div',
        { 'class': 'rating_comment' },
        React.createElement(
            'div',
            { 'class': 'rating_comment_title' },
            React.createElement(
                'div',
                { 'class': 'rating_commenter' },
                React.createElement(
                    'span',
                    null,
                    props.commentername
                ),
                React.createElement(Starrating, { rating: props.commentstars })
            ),
            React.createElement(
                'span',
                { 'class': 'rating_comment_date' },
                props.commentdate
            )
        ),
        React.createElement(
            'div',
            { 'class': 'rating_comment_text' },
            React.createElement(
                'p',
                null,
                props.commentcontent
            )
        )
    );
}
function render_full_rating() {
    var pl = document.getElementById('product_detail_fullratings');
    ReactDOM.render(React.createElement(Fullratings, null), pl);
}
function render_ratings(filt) {
    var pl = document.getElementById('comments_container');
    ReactDOM.render(React.createElement(Comments, { givenarr: filt }), pl);
}

export { render_full_rating };