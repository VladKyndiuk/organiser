import './styles/NullStyle.scss';
import { Route,Routes} from "react-router-dom"
import Registration from './pages/Registration/Registration';
import Authorization from './pages/Authorization/Authorization';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import PrivateRoutes from './utils/PrivateRoutes';
import Courses from './pages/Courses/Courses';
import Disciplines from './pages/Disciplines/Disciplines';

function App() {

  return (
    
    <div className="App">
      <Routes>
        <Route exact path='/authorization' element={<Authorization/>}></Route>
        <Route exact path='/registration' element={<Registration/>}></Route>
        <Route exact path='*' element={<PageNotFound/>}></Route>

        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoutes/>}>
          <Route exact path='/courses' element={<Courses/>}></Route>
          <Route exact path='/disciplines/:id' element={<Disciplines/>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
