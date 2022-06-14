import harvardArt from "./data/harvardArt";
import GalleryNavigation from './components/GalleryNavigation/index.js';

function App() {

  return (
    <GalleryNavigation galleries={ harvardArt.records } />
  );
}

// console.log(harvardArt)

export default App;

