import './App.css';
import Takeaction from './Components/TakeAction';
import Moreinfo from './Components/MoreInfo';
import WebBody from './Components/Body.js';
import Footer from './Components/Footer';
import Media from'./Components/Media';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Takeaction></Takeaction>   
      <WebBody></WebBody>
      <Media></Media>
      <Footer></Footer>
<p></p>


    </div>
  );
}

export default App;
