export interface RegisterResponse {
    message: string;
    status: number;
    error: boolean;
    token: string;
    data: {
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    };
  }
  