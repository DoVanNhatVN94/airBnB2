
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
// import './assets/css/main-color.css'
import {Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import RoomList from './pages/RoomList/RoomList';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import Login from './pages/Login/Login';
import UserTemplate from './templates/UserTemplate/UserTemplate'
import Register from './pages/Register/Register';
import RoomDetailTemplate from './templates/RoomDetailTemplate/RoomDetailTemplate'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Booking from './pages/Booking/Booking';
import Profile from './pages/Profile/Profile';
import User from './pages/Admin/User/User';
import EditUser from './pages/Admin/User/EditUser';

import ViTri from './pages/Admin/ViTri/ViTri';

import './App.css';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
          {/* <HomeTemplate path="/roomdetail" component={RoomDetail}/> */}
          <HomeTemplate path="/roomdetail/:id" component={RoomDetail}/>
          <HomeTemplate path="/home" component={Home}/>
          <HomeTemplate path="/booking" component={Booking}/>
          <HomeTemplate path="/profile" component={Profile}/>
          <RoomDetailTemplate path="/roomlist/:id" component={RoomList}/>
          <RoomDetailTemplate path="/roomlist" component={RoomList}/>
          <UserTemplate path="/login" component={Login}/>
          <UserTemplate path="/register" component={Register}/>

          <AdminTemplate path="/admin/user/edit/:id" component={EditUser}/>
          <AdminTemplate path="/admin/user" component={User}/>
          <AdminTemplate path="/vitri" component={ViTri}/>

          
          <AdminTemplate path="/admin" component={Dashboard}/>

          
          <HomeTemplate path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
