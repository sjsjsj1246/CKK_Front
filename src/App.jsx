import { GlobalStyles } from '@material-ui/core';
import { Route } from 'react-router';
import './App.css';
import Main from './components/common/Main';

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
      <Route path="/" exact component={Main} />
    </>
  );
}

export default App;
