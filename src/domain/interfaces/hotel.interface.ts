export interface IHotel {
  id: number;
  name: string;
  address: number;
  phone: string;
}

export interface IHotelsResponse {
  hotels: IHotel[];
}
