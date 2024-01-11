export interface RegisterResponse {
    message: string;
    status: number;
    error: boolean;
    token: string;
    data: {
      _id: string;
      emailAddress: string;
      password: string;
      firstName: string;
      lastName: string;
    };
  }
  