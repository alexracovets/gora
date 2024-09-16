import { BrowserRouter } from 'react-router-dom';

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import ScrollToHashElement from './static/ScrollToHashElement';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement behavior="smooth" inline="start" block="start" />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}