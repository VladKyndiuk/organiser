import './styles/NullStyle.scss';
import { Route,Routes} from "react-router-dom"
import Registration from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import MainPage from './pages/MainPage/MainPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/authorization' element={<Authorization/>}></Route>
        <Route exact path='/registration' element={<Registration/>}></Route>
        <Route exact path='*' element={<PageNotFound/>}></Route>

        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoutes/>}>
          <Route exact path='/main_page' element={<MainPage/>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
