import './App.css';
import React from 'react';
import Grid from "@mui/material/Grid";
import SingleCard from './components/Single-Card/SingleCard.jsx';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const mockData = [
  {
    id: 1, 
    name: 'Home Alone', 
    image:"https://www.kino-teatr.ru/movie/posters/big/7/26007.jpg",  
    time: '1hr: 50mins'
    }, 
    {
    id: 2, 
    name: 'Black Adam', 
    image: "https://upload.wikimedia.org/wikipedia/ru/9/9f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%90%D0%B4%D0%B0%D0%BC%C2%BB.jpg",  
    time: '2hr: 10mins'
    }, 
    {id: 3, 
    name: 'Back to the Future', 
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/600x900", 
    time: '2hr: 50mins'
    }, 
    {
    id: 4, 
    name: 'Avengers', 
    image: "https://www.pluggedin.com/wp-content/uploads/2019/12/the-avengers-review-image-1200x688.jpg", 
    time: '2hr:30mins'
    }
    ]

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Grid container spacing={2} sx={{padding:"50px"}}>
      {mockData.map(({id, name, image, time}, index) => (
      <Grid item xs={3} key={index}>

      <SingleCard 
      id={id}
      name={name}
      time={time}
      image={image}
      />
      </Grid>
      ))}
      </Grid>
      <Footer/>
    </div>
  );
}

export default App;

