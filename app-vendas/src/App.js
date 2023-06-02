import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar.component'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <Home/>
      </ChakraProvider>
    </div>
  );
}

export default App;
