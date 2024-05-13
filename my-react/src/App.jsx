import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterList from './components/CharacterList.jsx';
import CharacterDetails from './components/CharacterDetails';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Comics from './components/Comics';
import './components/styles.css';


function App(){
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<BrowseCharacters /> } /> 
          <Route path='/characters-list' element={<CharacterList />} />
          <Route path='/:id' element={<CharacterDetails />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App
