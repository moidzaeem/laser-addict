export interface Service {
    id: number;
    name: string;
    description: string;
    price: string,
    duration:string
}

export interface UserDetails {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phone?: string;
    gender?: string;
  }

  export interface Hospital{
    id:number,
    center_name:string,
    region:string,
    region_no:string,
    logo:string
  }