// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Components/AllRoutes';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Box marginTop="3rem">
      <AllRoutes/>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
