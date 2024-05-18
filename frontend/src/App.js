import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './Theme.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import TimeSheet from './components/TimeSheet/TimeSheet.js';
import Header from './components/Header/Header.js';
import Pengaturan from './components/Pengaturan/Pengaturan.js';



function App() {
  return (
    <Router>
    <ChakraProvider theme={Theme} >
        <Header/>
        <Routes>
          <Route exact path='/' element={<TimeSheet/>}/>
          <Route path='/pengaturan' element={<Pengaturan/>}/>
        </Routes>
    </ChakraProvider>
    </Router>
    
  );
}

export default App;
