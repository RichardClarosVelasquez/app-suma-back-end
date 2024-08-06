import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Richard Claros',
  email: 'richard.claros@lapaz.bo',
  avatar: './assets/images/matero.png',
};

export const guest: User = {
  name: 'unknown',
  email: 'unknown',
  avatar: './assets/images/avatar-default.jpg',
};
