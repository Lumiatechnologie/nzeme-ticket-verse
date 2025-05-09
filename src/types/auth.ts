
export type UserRole = 'admin' | 'organizer' | 'transporter' | 'client';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRole;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: UserRole;
}
