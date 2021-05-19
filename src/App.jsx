import { Route } from 'react-router';
import './App.css';
import Main from './components/common/Main';

function App() {
  return (
    <>
      <Route path="/" exact component={Main} />
    </>
  );
}

export default App;
