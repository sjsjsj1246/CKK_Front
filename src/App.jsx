import { GlobalStyles } from '@material-ui/core';
import { Route } from 'react-router';
import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProblemList from './components/problems/ProductList';
import MainPage from './pages/MainPage';
import ProblemListPage from './pages/ProblemListPage';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          '*': {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Noto Sans KR, sans-serif !important',
          },
        }}
      />
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/problem_list" component={ProblemListPage} />
    </>
  );
}

export default App;
