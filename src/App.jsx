import { motion, AnimatePresence } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ModalPay from './Components/Modal/ModalPay/ModalPay';
import ModalProgress from './Components/Modal/ModalProgress/ModalProgress';
import Loader from './Components/Loader/Loader';

export default function App() {
  const scrollbarsRef = useRef(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }, [])


  return (
    <BrowserRouter>
      <AnimatePresence>
        {
          loader ? <motion.div className={'loader'}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <Loader />
          </motion.div> : null
        }
      </AnimatePresence>
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
