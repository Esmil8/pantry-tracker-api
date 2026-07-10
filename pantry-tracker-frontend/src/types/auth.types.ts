// Auth types
export interface LoginRequest {
  Email: string;
  Password: string;
}

export interface RegisterRequest {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

export interface AuthUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  Message: string;
  Data: {
    token: string;
    user: AuthUser;
  };
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: AuthUser, token: string) => void;
  clearAuth: () => void;
}
