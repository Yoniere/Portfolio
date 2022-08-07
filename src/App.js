import './assets/scss/global.scss'
import { Header } from './cmps/Header';
import { PortfolioApp } from './pages/PortfolioApp';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <section className='app'>
        <Header></Header>
        <PortfolioApp className='portfolio-app'></PortfolioApp>
      </section>
    </BrowserRouter>
  );
}

export default App;
