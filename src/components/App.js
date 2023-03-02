import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { Notify } from 'notiflix';
import { routes } from 'routes';
import Header from './Header/Header';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

Notify.init({
  position: 'right-bottom',
});

export const App = () => {
  return (
    <Container maxW="1200px" outline="1px solid green">
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.REGISTER} element={<Register />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.CONTACTS} element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
    </Container>
  );
};
