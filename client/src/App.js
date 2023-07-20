import './App.css'
import HomaPage from './Pages/Home/HomePage';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Nav from './Nav/Nav';
import BookSearch from './Pages/Search/BookSearch';
import AddBook from './Pages/Add/AddBook';

function App() {
  return (
  <div className='app-container'>
   <div className='pages'> 
   <Router>
    <div style={{display : 'flex' , alignItems :'center' , justifyContent :'center'}}>
    <Nav/>
    </div>
    <Routes>
      <Route path='/' element={<HomaPage/>} />
      <Route path='/search' element={<BookSearch/>} />
      <Route path='/addContact' element={<AddBook/>}/>
    </Routes>
    </Router>   
    </div>
  </div>
   
  );
}

export default App;
