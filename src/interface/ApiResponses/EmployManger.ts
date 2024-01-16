export interface EmployManger {
    message: string;
    status: number;
    error: boolean;
    token: string;
    
    data: {
      _id: string;
      name: string;
      email:string;
      designation:string;
      salary: string;
      empId: number;
      companyId:string;
    };
  }
  