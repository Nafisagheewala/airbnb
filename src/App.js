
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';

import Data from './components/Data';

function App() {
  const cards = Data.map((experience) => {
    return (
    <Experiences
      key={experience.id}
      // experience={experience}
      {...experience}
      // img={experience.img}
      // rating={experience.rating}
      // viewers={experience.viewers}
      // location={experience.location}
      // courseName={experience.courseName}
      // price={experience.price}
      // openSpots={experience.openSpots}
    />
  )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
      {/* <Experiences
        img={katieZaferes}
        rating="5.0"
        viewers="(6)"
        location="USA"
        courseName="Life lessons with Katie"
        price="$136 "
      />
      <Experiences
        img={weddingPhotography}
        rating="5.0"
        viewers="(30)"
        location="USA"
        courseName="Learn wedding photography"
        price="$125 "
      />
      <Experiences
        img={mountainBike}
        rating="4.8"
        viewers="(2)"
        location="USA"
        courseName="Group mountain biking"
        price="$50 "
      /> */}
    </div>
  );
}

export default App;
