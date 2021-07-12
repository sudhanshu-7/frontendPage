import React  from 'react';
import './App.css';
import Benifits from './components/Benifits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Middle from './components/middle';
import Working from './components/Working';
function App() {
  return (
    <>
    <Header/>
    <Middle/>
    <Benifits/>
    <Working/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
