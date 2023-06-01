import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar.component'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <Product/>
      </ChakraProvider>
    </div>
  );
}

export default App;
