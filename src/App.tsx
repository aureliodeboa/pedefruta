import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from './pages/OnboardingPage';
import { LoginPage } from './pages/LoginPage';
import {HomePage} from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marketplace" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/:userType" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;