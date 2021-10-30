import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Event from "././components/Event/Event";
import './App.css';
import AuthProvider from "./components/Context/AuthProvider";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import AddNewService from "./components/AddNewService/AddNewService";
import Confirm from "./components/Confirm/Confirm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <PrivateRoute exact path="/servicedetail/:detailId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route exact path="/event">
            <Event></Event>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route exact path="/addnewservice">
            <AddNewService></AddNewService>
          </Route>
          <Route exact path="/confirm">
            <Confirm></Confirm>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
