export interface SettingResponse {
    message: string;
    status: number;
    error: boolean;
    token: string;
    
    data: {
      _id: string;
      gitHub: string;
      linkedIn:string;
      telegram: string;
      instagram:any;
      address:string;
      bio:string;
      Contact_Number:number;
      Country:string;
      Pincode:string;


    };
  }
  