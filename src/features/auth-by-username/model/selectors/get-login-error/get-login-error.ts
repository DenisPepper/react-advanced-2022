import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/login-schema';
import { getLogin } from '../get-login/get-login';

export const getLoginError = createSelector(getLogin, (login: LoginSchema) => login.error);
