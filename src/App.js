import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import './App.css';
import NewsApi from './component/NewsApi';
import DetailsPage from './component/DetailsPage';


function App() {
  return (
    <div>
        <h1 className='heading'>News App</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsApi/>} />
          <Route path='/detailsPage' element={<DetailsPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
