import './App.css';
import TopBar from './component/TopBar'
import BackgroundImage from './component/BackgroundImage'
import StoreListings from './component/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListings />
    </div>
  );
}

export default App;
