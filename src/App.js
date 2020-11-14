import './App.css';
import AutorsContainer from './components/Autors/AutorsContainer';
import AlbumsContainer from './components/Albums/AlbumsContainer';
import { BrowserRouter, Route } from "react-router-dom"
import PhotosContainer from './components/Photos/PhotosContainer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <div className="app-wrapper">
          <Route exact path="/">
            <AutorsContainer />
            <AlbumsContainer />
          </Route>
        </div>
        <Route exact path="/:id" component={PhotosContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
