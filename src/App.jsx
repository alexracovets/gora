import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Main from "./Components/Main/Main";
import ScrollToHashElement from './static/ScrollToHashElement';
import CustomScroll from './Components/CustomScroll/CustomScroll';
// import ModalPay from './Components/Modal/ModalPay/ModalPay';
// import ModalProgress from './Components/Modal/ModalProgress/ModalProgress';

const Footer = lazy(() => import('./Components/Footer/Footer'));
const Header = lazy(() => import('./Components/Header/Header'));
const Main = lazy(() => import('./Components/Main/Main'));
const ModalPay = lazy(() => import('./Components/Modal/ModalPay/ModalPay'));
const ModalProgress = lazy(() => import('./Components/Modal/ModalProgress/ModalProgress'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <CustomScroll>
        <Suspense fallback={null}>
          <Header />
          <Main />
          <Footer />
        </Suspense>
      </CustomScroll>
      <Suspense fallback={null}>
        <ModalPay />
      </Suspense>
      <Suspense fallback={null}>
        <ModalProgress />
      </Suspense>
    </BrowserRouter>
  )
}