export interface Tradeflow {
    id : number;
    name : string;
    sea_shipments : sea_shipment[];
}
export interface sea_shipment{
  booking_reference: string;
  bill_of_lading_reference: string;
  carrier : carrier;
  sea_movements : sea_movement[];
}
export interface sea_movement{
  id : number;
  vessel_telo_loading : vessel_telo_loading;
  vessel_telo_discharge : vessel_telo_discharge;
}
export interface carrier{
  id : number;
  name : string;
}
export interface vessel_telo_discharge{
  id : number;
  location : location;
  readings : reading[];
}
export interface vessel_telo_loading{
  id : number;
  location : location;
  readings : reading[];
}
export interface location{
  name : string;
}
export interface reading {
  reading : string;
  type : string;
}
