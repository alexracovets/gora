import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ScrollToHashElement from './static/ScrollToHashElement';
import CustomScroll from './Components/CustomScroll/CustomScroll';
import ModalPay from './Components/Modal/ModalPay/ModalPay';

export default function App() {
  const [scrollHeight, setScrollHeight] = useState(null);
  const [isScrolled, setIsScrolled] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <CustomScroll setScrollHeight={setScrollHeight} setIsScrolled={setIsScrolled}>
        <Header isScrolled={isScrolled} />
        <Main scrollHeight={scrollHeight} />
        <Footer />
      </CustomScroll>
      <ModalPay />
    </BrowserRouter>

  )
}