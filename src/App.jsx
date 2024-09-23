import { Scrollbars } from 'react-custom-scrollbars-2';
import { BrowserRouter } from 'react-router-dom';
import { useRef } from 'react';

import ScrollToHashElement from './static/ScrollToHashElement';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ModalPay from './Components/Modal/ModalPay/ModalPay';
import ModalProgress from './Components/Modal/ModalProgress/ModalProgress';

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
        ref={scrollbarsRef}
      >
        <Header scrollbarsRef={scrollbarsRef} />
        <Main scrollbarsRef={scrollbarsRef} />
        <Footer />
      </Scrollbars>
      <ModalPay />
      <ModalProgress />
    </BrowserRouter>
  );
}
