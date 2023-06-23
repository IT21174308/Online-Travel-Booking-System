import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import Uprofile from './component/Uprofile';
import UpdateProfile from './component/UpdateProfile';
import feedback from './component/feedback';
import Bookings from './component/Bookings/Bookings';
import MyReviews from './component/MyReviews/MyReviews';


function App() {
  return (
    <div>
      
      <Routes>
        
        <Route exact path="/" Component={Login} />
        <Route exact path="/Register" Component={Register} />
        <Route exact path="/Uprofile/:id"Component={Uprofile}/>
        <Route exact path="/UpdateProfile/:id" Component={UpdateProfile}/>
        <Route exact path="/feedback/:id" Component={feedback}/>
        <Route exact path="/Bookings" Component={Bookings}/>
        <Route exact path="/MyReviews" Component={MyReviews}/>
      </Routes>
    </div>
  );
}

export default App;