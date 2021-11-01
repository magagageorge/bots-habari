import React from 'react';
import Footer from './theme/navigation/Footer';
import Header from './theme/navigation/Header';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetails';
import ErrorPage from './pages/ErrorPage';
import Page from './pages/Page';

class App extends React.Component {
   render() {
      return (
         <div class="container-fluid m-0 p-0">
            <Header></Header>
            <main>
               <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path="/page" component={Page} />
                  <Route path="/articles/:id" component={ArticleDetail} />
                  <Route component={ErrorPage} />
               </Switch>
            </main>
            <Footer></Footer>
         </div>
      )
   }
}
export default App;
