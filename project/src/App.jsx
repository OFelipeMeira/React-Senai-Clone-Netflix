import './App.css'
import LandingPage from './assets/Pages/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './assets/Layout/Header';

/*
The movie DATABASE:
Chave da API
7d3fa0af7cac69d1ed00d3dacce10b85

Token de Leitura da API
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmYTBhZjdjYWM2OWQxZWQwMGQzZGFjY2UxMGI4NSIsInN1YiI6IjY1MDljYWQ3MzczYWMyMDExYzQwMzU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFA-1VenS3-93BtzhXyKq3Tl48GyB6nMhCLJdNCghQ
*/

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage }/>
        <Route path='/aa' Component={Header }/>

      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    // </>

  )
}

export default App;
