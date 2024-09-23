import { motion, AnimatePresence } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import Default from "./layout/Default";
import Home from "./pages/Home";

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
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </Scrollbars>
    </BrowserRouter>
  );
}
