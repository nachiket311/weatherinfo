import { useState } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Footer from './component/Footer';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar showAlert={showAlert}/>
      <Alert alert={alert}/>
      <Footer />
    </Router>
  );
}

export default App;
