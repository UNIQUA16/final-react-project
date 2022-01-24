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
      <Moreinfo></Moreinfo>
      <Takeaction></Takeaction>     
       <Media></Media>
      <WebBody></WebBody>
      <Footer></Footer>



    </div>
  );
}

export default App;
