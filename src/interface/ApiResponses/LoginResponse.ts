export interface LoginResponse {
    message: string;
    status: number;
    error: boolean;
    token: string;
    
    data: {
      _id: string;
      emailAddress: string;
      accessToken:string;
      companyId: string;
    };
  }
  