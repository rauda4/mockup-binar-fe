import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './layout/LandingPage';
import AuthPage from './layout/AuthPage';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggin, setIsloggin] = useState(false);
  const UserId = localStorage.getItem('userId');
  useEffect(() => {
    if (UserId) {
      setIsloggin(true);
    }
  }, [UserId]);
  return (
    <>
      <Routes>
        <Route
          path='/*'
          element={<LandingPage />}
        />
        <Route
          path='/users/*'
          element={!isLoggin ? <AuthPage /> : <Navigate to={'/'} />}
        />
      </Routes>
    </>
  );
}

export default App;
