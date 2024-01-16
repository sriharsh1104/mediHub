export interface RegisterResponse {
    message: string;
    status: number;
    error: boolean;
    token: string;
    data: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      companyName:string;
      organizationName:string;
      companyId:string;
    };
  }
  