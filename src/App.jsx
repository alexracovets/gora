import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ScrollToHashElement from './static/ScrollToHashElement';
import CustomScroll from './Components/CustomScroll/CustomScroll';
import ModalPay from './Components/Modal/ModalPay/ModalPay';
import ModalProgress from './Components/Modal/ModalProgress/ModalProgress';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <CustomScroll setIsScrolled={setIsScrolled}>
        <Header isScrolled={isScrolled} />
        <Main />
        <Footer />
      </CustomScroll>
      <ModalPay />
      <ModalProgress />
    </BrowserRouter>

  )
}