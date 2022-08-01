import './assets/scss/global.scss'
import { Header } from './cmps/Header';
import { PortfolioApp } from './pages/PortfolioApp';

function App() {
  return (
    <section className='app'>
        <Header></Header>
        <PortfolioApp className='portfolio-app'></PortfolioApp>
    </section>
  );
}

export default App;
