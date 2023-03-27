import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SidebarCart from './pages/SidebarCart';
import { Provider } from 'react-redux';
import store from './store/store';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cart' element={<SidebarCart />}></Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
