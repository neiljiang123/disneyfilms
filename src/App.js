import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let news = [{
  date: 'October 11 2019',
  heading: 'Abominable came out on October 1',
  content: 'A magical Yeti must return to his family.',
  director: 'Jill Culton',
  poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAbPG53tgb780Fc31YjR2blcMz6XGvbAhrrWHg-FJClTTJkD5D'

}, {
  date: 'October 11 2018',
  heading: 'Charming is a 2018 Canadian-American animated musical comedy film',
  content: 'Prince Phillipe Charming is a prince who was cursed nearly twenty one years ago by his fathers former partner Nemeny Neverwish. ',
  director: 'Ross Venokur',
  poster: 'https://a.ltrbxd.com/resized/film-poster/2/8/4/8/7/6/284876-charming-0-230-0-345-crop.jpg?k=e6358fbadf'

},
{
  date: 'October 11 2017',
  heading: 'Coco is a 2017 American 3D computer-animated fantasy film produced by Pixar Animation Studios and released by Walt Disney Pictures',
  content: 'In Santa Cecilia, Mexico, Miguel dreams of becoming a musician, even though his family strictly forbids it. His great-great-grandmother Imelda was married to a man who left her and their daughter Coco to pursue a career in music, and when he never returned, Imelda banished music from her familys life and started a shoemaking business',
  director: 'Lee Unkrich',
  poster: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/coco-poster0.jpg?itok=2KzFQMFB'

}
]

function Article(props){
return (
  <div className='singleArticle'>
    <div className="date">
        <p> {props.date}</p>
    </div>
    <div className="article">
         <h1 className='articleHeading'>{props.heading}</h1>
         <p className='articleContent'>{props.content}</p>
         <p className='articleDirector'>{props.director}</p>
    </div>
    <div classNmae="posterImage">
       <img src={props.poster}></img>
    </div>
  </div>
)

}


class App extends Component {
  render() {

    let output = news.map((singleNews) => {
      return (
        <Article date={singleNews.date} heading={singleNews.heading} content={singleNews.content} director={singleNews.director} poster={singleNews.poster} />
      );
    })

    return (
      <div className="App">
        <p id="one">Date!</p>
        <p id="two">Paragraph text!</p>
        <p id="three">Image!</p>
        {output}
      </div>
    );
  }
}

export default App;
