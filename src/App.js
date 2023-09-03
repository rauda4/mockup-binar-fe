import { Route, Routes } from 'react-router-dom';
import LandingPage from './layout/LandingPage';
import AuthPage from './layout/AuthPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/*'
          element={<LandingPage />}
        />
        <Route
          path='/users/*'
          element={<AuthPage />}
        />
      </Routes>
    </>
  );
}

export default App;
