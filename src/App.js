import { ConnectedRouter } from 'connected-react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import UserLoginPage from './pages/UserLoginPage';
import './styles/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { history } from './redux/create';
function App() {
  return (
    <ErrorBoundary Error={ErrorPage}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={UserLoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
