import '../styles/Home.css';
import chart from '../images/pie-chart.jpg';

function Home() {
  return (
    <div className="Home">
      
        
        <div id="home-tile">
          <div className="flex-container">
          <h1> Welcome to the Arena</h1>
          <h3>Data Driven Sports Commentary</h3>
          </div>
          
          <img id="home-chart" src={chart} alt="super awesome data"></img>

          <div className='flex-container'>
          <h3>Featured Article:</h3>
          <p>Are Wins a Quarterback Stat?</p>
          </div>
          
        </div>
        

    </div>
  );
}

export default Home;