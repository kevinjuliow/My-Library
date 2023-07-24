import './App.css'
import HomaPage from './Pages/Home/HomePage';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Nav from './Nav/Nav';
import BookSearch from './Pages/Search/BookSearch';
import AddBook from './Pages/Add/AddBook';
import ContextProvider from './Context/Context';

function App() {
  return (
  <div className='app-container'>
  <ContextProvider>
  <div className='pages'> 
   <Router>
    <div style={{display : 'flex' , alignItems :'center' , justifyContent :'center'}}>
    <Nav/>
    </div>
    <Routes>
      <Route path='/' element={<HomaPage/>} />
      <Route path='/search' element={<BookSearch/>} />
      <Route path='/add' element={<AddBook/>}/>
    </Routes>
    </Router>   
    </div>
  </ContextProvider>
  </div>
   
  );
}

export default App;
