import './App.css';
import Header from './components/header';
import Footer from './components/footer/Footer';
import Results from './components/results';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Results />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
