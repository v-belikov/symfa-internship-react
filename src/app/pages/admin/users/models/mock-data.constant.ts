// TODO remove this

import { IUser } from 'app/store/users/models';

export const MOCK_DATA = Array.from(
  { length: 100 },
  (_, index: number): IUser => ({
    id: String(index),
    username: `username_${index + 1}`,
    email: `email${index + 1}@mail.com`,
  }),
);
