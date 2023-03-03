import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@chakra-ui/react';
import { Notify } from 'notiflix';
import { routes } from 'routes';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Layout from './Layout';

Notify.init({
  position: 'right-bottom',
});

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container maxW="1200px">
        <Routes>
          <Route path={routes.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path={routes.REGISTER} element={<Register />} /> */}
            <Route
              path={routes.REGISTER}
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path={routes.LOGIN}
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path={routes.CONTACTS}
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Routes>
      </Container>
    )
  );
};
