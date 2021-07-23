import HomePage from './pages/HomePage/HomePage';
import CreatePage from './pages/CreatePage/CreatePage';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Navbar from './components/navbar/navbar.component';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page404 from './pages/404/404';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>

            <Route path='/create'>
              <CreatePage />
            </Route>

            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>

            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
