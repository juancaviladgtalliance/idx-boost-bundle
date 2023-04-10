import './scss/app.scss';
import IdxLogo from './public/assets/images/logo.svg';
import Vite from './public/assets/images/vite.svg';
import ReactLogo from './public/assets/images/react.svg';
import Counter from './components/counter';
import ImageComponent from './components/imageComponent';
import Ts from './public/assets/images/typescript.svg';

export default function App() {
  return (
    <div id="app">
      <div className="container">
        <div className="images-container">
          <ImageComponent imageUrl={ReactLogo} url="https://react.dev/" />
          <ImageComponent imageUrl={Ts} url="https://react.dev/" />
          <ImageComponent imageUrl={Vite} url='https://vitejs.dev/"' />
          <ImageComponent imageUrl={IdxLogo} url="https://www.idxboost.com/" />
        </div>
        <div className="text-container">
          <h1>
            <span>Idxboost</span>
            React Bundle
          </h1>
          <p>
            This a bundle vanilla example with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
              Vitejs
            </a>
          </p>
        </div>
        <Counter />
      </div>
    </div>
  );
}
