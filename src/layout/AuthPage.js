import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

export default function AuthPage() {
  return (
    <>
      <Routes>
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/*'
          element={<Navigate to={'/users/register'} />}
        />
      </Routes>
    </>
  );
}
