import Header from './components/header';
import Jobtype from './components/jobtype';
import SearchBox from './components/searchBox';
import RemoveFilters from './components/removefilters';
import Departaments from './components/departaments';
import WorkSchedule from './components/workschedule';
import Experience from './components/experience';
import Footer from './components/footer';
import Content from './components/content';
import { Provider } from "react-redux";
import store from "./store";

import './css/style.css';
import './components/filters.css';

function App() {
  return (
    <Provider store={store}>
    <div>
      <header>
        <Header />
      </header>
      <main className="mainSection">
        <SearchBox />  
        <div className="row row-nomargin">
          <div className="col-md-3 col-custom-left">
              <RemoveFilters />
              <div className="whiteContainer show-on-desktop">
                <Jobtype />
              </div>
              <div className="whiteContainer show-on-desktop">
                <Departaments />
              </div>
              <div className="whiteContainer show-on-desktop">
                <WorkSchedule />
              </div>
              <div className="whiteContainer show-on-desktop">
                <Experience />
              </div>              
          </div>
          <div className="col-md-9 col-custom-right">
            <div className="whiteContainer">
              <Content />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
