import { Scrollbars } from 'react-custom-scrollbars-2';
import { BrowserRouter } from 'react-router-dom';
import { lazy, useRef } from 'react';

import ScrollToHashElement from './static/ScrollToHashElement';

const Footer = lazy(() => import('./Components/Footer/Footer'));
const Header = lazy(() => import('./Components/Header/Header'));
const Main = lazy(() => import('./Components/Main/Main'));
const ModalPay = lazy(() => import('./Components/Modal/ModalPay/ModalPay'));
const ModalProgress = lazy(() => import('./Components/Modal/ModalProgress/ModalProgress'));

export default function App() {
  const scrollbarsRef = useRef(null);

  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <Scrollbars
        autoHeight
        autoHeightMax={'100dvh'}
        renderTrackVertical={props => <div {...props} className={'track_vertical'} />}
        renderThumbVertical={props => <div {...props} className={'thumb_vertical'} />}
        universal={true}
        ref={scrollbarsRef}
      >
        <Header scrollbarsRef={scrollbarsRef} />
        <Main />
        <Footer />
      </Scrollbars>
      <ModalPay />
      <ModalProgress />
    </BrowserRouter>
  );
}
