'use strict';
var rating_object = {
    total_rating: 4.7,
    total_rating_num:146,
    star_5_ratings: 100,
    star_4_ratings: 40,
    star_3_ratings: 5,
    star_2_ratings: 1,
    star_1_ratings: 0,
}
class Ratingcomment {
    constructor(username, rating, date, content) {
        this.username = username;
        this.rating = rating;
        this.date = date;
        this.text = content;
    }
}
var comments_ratings = [
    ['Johny', 4.5, '14/02/1968',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    ['Johny', 3.5, '14/02/1968',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    ['Johny', 1.5, '14/02/1968',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    ['Johny', 4.5, '14/02/1968',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    ],
];
var classed_ratings=[];
function classifying() {
    for (let i = 0; i < comments_ratings.length; i++) {
        classed_ratings.push(new Ratingcomment(comments_ratings[i][0],
            comments_ratings[i][1], comments_ratings[i][2], comments_ratings[i][3]));
    }
}
classifying();
class Fullratings extends React.Component {

    componentDidMount() {
        render_ratings(classed_ratings);
    }
    render() {
        return (<div>
            <Starratingtable />
            <Ratingcommentsection />
        </div>)
    }
}
function Starratingtable(props) {

    return <div id="full_rating_table">
        <div>
            <Bigrating/>
        </div>
        <div>
            <Starbars/>
        </div>
    </div>;
}
function Bigrating(props) {

    return <div class='big_rating'>
        <span class='big_rating_text'>{rating_object.total_rating}</span>
        <Starrating rating={rating_object.total_rating} />
    </div>;
}
function Starbars(props) {

    return <div class='star_bars'>
        <div class='star_bar'>
            <div class='starbar_descriptor'>
                <span>5</span>
                <Star rating={5} />
            </div>
            <Bar allsize={rating_object.total_rating_num} size={rating_object.star_5_ratings} />
            <span>{rating_object.star_5_ratings}</span>
        </div>
        <div class='star_bar'>
            <div class='starbar_descriptor'>
                <span>4</span>
                <Star rating={5} />
            </div>
            <Bar allsize={rating_object.total_rating_num} size={rating_object.star_4_ratings}/>
            <span>{rating_object.star_4_ratings}</span>
        </div>
        <div class='star_bar'>
            <div class='starbar_descriptor'>
                <span>3</span>
                <Star rating={5} />
            </div>
            <Bar allsize={rating_object.total_rating_num} size={rating_object.star_3_ratings}/>
            <span>{rating_object.star_3_ratings}</span>
        </div>
        <div class='star_bar'>
            <div class='starbar_descriptor'>
                <span>2</span>
                <Star rating={5} />
            </div>
            <Bar allsize={rating_object.total_rating_num} size={rating_object.star_2_ratings}/>
            <span>{rating_object.star_2_ratings}</span>
        </div>
        <div class='star_bar'>
            <div class='starbar_descriptor'>
                <span>1</span>
                <Star rating={5} />
            </div>
            <Bar allsize={rating_object.total_rating_num} size={rating_object.star_1_ratings}/>
            <span>{rating_object.star_1_ratings}</span>
        </div>
    </div>;
}
function Bar(props) {
    var fullsize = props.allsize; var usedsize = props.size; //we have the assumption that the size of the bar is 500px
    var scaledsize = parseInt(usedsize * (400 / fullsize));
    if (scaledsize < 5 && scaledsize>0) {
        scaledsize = 5;
    }
    if (scaledsize == 0) {
        scaledsize = 0;
    }
    return <div class='fill_bar'>
        <div class='fill' style={{ width:scaledsize}}></div>
    </div>;
}
function Starrating(props) {
    var stars = []; var tempstar = props.rating;
    var tempnum = 0;
    for (let i = 1; i <= 5; i++) {
        //if (tempstar <= 1) {
        //stars.push(<Star rating={product_object.product_rating}/>);
        //}
        //else {

        //}
        stars.push(<Star rating={(tempstar - tempnum).toFixed(2)} />);
        tempnum++
        //alert(tempstar - i);
    }
    return <div class={'star_rating_container ' + tempstar}>
        <div class="star_rating">
            <div class="rating_star star1" >{stars[0]}</div>
            <div class="rating_star star2" >{stars[1]}</div>
            <div class="rating_star star3" >{stars[2]}</div>
            <div class="rating_star star4" >{stars[3]}</div>
            <div class="rating_star star5" >{stars[4]}</div>
        </div>
        
    </div>;
}
function Star(props) {
    var num = props.rating;
    if (num > 1) {
        num = 1;
    }
    if (props.rating <= 0) {
        return <div>
            <svg width='24' height='24' viewBox='0 0 24 24' clip-rule="evenodd">
                <path fill-rule="nonzero" fill='gray' d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
        </div>;
    }//DO NOT REDEFINE LINEAR GRADIENTS OF SVGS MAKE NEW ONE IF YOU WANT SOMETHING DIFFERENT
    else {
        var contain1 = num * 100 + "%";
        //alert(contain1 + "% to " + ((1 - num) * 100).toFixed(0) + "%"); 
        var contain2 = ((1 - num) * 100).toFixed(0) + "%";
        if (props.rating < 1) {
            return <div>
                <svg viewBox='0 0 24 24'>
                    <defs>
                        <linearGradient id='partialstar'>
                            <stop offset={contain1} stopColor='gold' />
                            <stop offset={contain1} stopColor='gray' />
                        </linearGradient>
                    </defs>
                    <path fill-rule="nonzero" fill='url(#partialstar)' d="m12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
            </div>;
        }
        else {
            return <div>
                <svg viewBox='0 0 24 24'>
                    <defs>
                        <linearGradient id='fullstar'>
                            <stop offset={100 + "%"} stopColor='gold' />
                            <stop offset={100 + "%"} stopColor='gray' />
                        </linearGradient>
                    </defs>
                    <path fill-rule="nonzero" fill='url(#fullstar)' d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
            </div>;
        }
    }
}
function Ratingcommentsection(props) {

    return <div id='ratings_comment_section'>
        <Ratingstarfilter />
        <div id='comments_container'></div>
    </div>;
}
function Ratingstarfilter(props) {

    return <div class='star_filter_section'>
        <button type='button' class='star_filter_button' id='star_filter_5' onClick={function (e) { star_filter_ratings(e, 5) }}>5 Stars</button>
        <button type='button' class='star_filter_button' id='star_filter_4' onClick={function (e) { star_filter_ratings(e, 4) }}>4 Stars</button>
        <button type='button' class='star_filter_button' id='star_filter_3' onClick={function (e) { star_filter_ratings(e, 3) }}>3 Stars</button>
        <button type='button' class='star_filter_button' id='star_filter_2' onClick={function (e) { star_filter_ratings(e, 2) }}>2 Stars</button>
        <button type='button' class='star_filter_button' id='star_filter_1' onClick={function (e) { star_filter_ratings(e, 1) }}>1 Star</button>
    </div>;
}
function star_filter_ratings(e, filter) {
    var starnum = parseInt(filter); var allelements = document.querySelectorAll('.star_filter_button');
    var newratings = [];
    for (let i = 0; i < classed_ratings.length; i++) {
        if (classed_ratings[i].rating >= starnum && classed_ratings[i].rating <= starnum+1) {
            newratings.push(classed_ratings[i]);
        }
    }
    if (e.target.classList.contains('active_star_filter')) {
        e.target.classList.remove('active_star_filter');
        render_ratings(classed_ratings);
        return;
    }
    else {
        for (let y = 0; y < allelements.length; y++) {
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
       return <div id = 'shown_rating_comments' >
           <div id='no_star_comments'>
               <p>No comments for the selected rating</p>
           </div>
       </div>;
    }
    for (let i = 0; i < props.givenarr.length; i++) {
        coms.push(<Comment commentername={props.givenarr[i].username} commentstars={props.givenarr[i].rating}
            commentcontent={props.givenarr[i].text} commentdate={props.givenarr[i].date} />);
    }
    return <div id='shown_rating_comments'>
        {coms}
    </div>;
}
function Comment(props) {
    return <div class='rating_comment'>
        <div class='rating_comment_title'>
            <div class='rating_commenter'>
                <span>{props.commentername}</span>
                <Starrating rating={props.commentstars} />
            </div>
            <span class='rating_comment_date'>{props.commentdate}</span>
        </div>
        <div class='rating_comment_text'>
            <p>{props.commentcontent}</p>
        </div>
    </div>;
}
function render_full_rating() {
    var pl = document.getElementById('product_detail_fullratings');
    ReactDOM.render(<Fullratings/>, pl);
}
function render_ratings(filt) {
    var pl = document.getElementById('comments_container');
    ReactDOM.render(<Comments givenarr={filt} />, pl);
}

export {
    render_full_rating
}