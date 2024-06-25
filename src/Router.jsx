import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Org from './Components/Authentication/Org/Org';
import Role from './Components/Authentication/Role/Role';
import Hosted from './Components/Authentication/Hosted/Hosted';
import Strength from './Components/Authentication/Strength/Strength';
import { FormProvider } from './FormContext';

const Router = () => {
  return (
    <FormProvider> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/org" element={<Org />} />
      <Route path="/role" element={<Role />} />
      <Route path="/strength" element={<Strength />} />
      <Route path="/hosted" element={<Hosted />} />
    </Routes>
    </FormProvider>
  );
};

export default Router;
