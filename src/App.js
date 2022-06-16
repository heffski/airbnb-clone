// import logo from './logo.svg';
import './style.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data';

function App() {
  const cardDiv = data.map(card => {
    return (<Card 
      key={card.id}
      {...card}
      // card={card}
      // coverImg={card.coverImg}
      // rating={card.stats.rating}
      // reviewCount={card.stats.reviewCount}
      // title={card.title}
      // description={card.description}
      // price={card.price}
      // openSpots={card.openSpots}
 />
    )
    })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardDiv}
      </section>
    </div>
  )};


export default App;


// return (<Card 
//   id={data.id}
//   title={data.title}
//   description={data.description}
//   price={data.price}
//   coverImg={data.coverImg}
//   rating={data.stats.rating}
//   reviewCount={data.stats.reviewCount} />