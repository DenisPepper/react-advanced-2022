import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from '../../types/user-schema';
import { getUser } from '../get-user/get-user';

export const getUserAuthData = createSelector(getUser, (user: UserSchema) => user.authData);
