export interface LoginResponse {
  message: string;
  status: number;
  error: boolean;
  token: string;
  accessToken: string;

  data: {
    _id: string;
    emailAddress: string;
    companyId: string;
    details: any;
  };
}
