import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <body>
      <div>
        <Navbar />
        <div class="container">
          <div class="row">
            <CountriesList />
            <CountryDetails />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
