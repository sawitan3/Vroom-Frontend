export class BookingHistoryResponse {
  'id': number;
  'customer_id': number;
  'car_id': number;
  'return_location_id': number;
  'begin_time': Date;
  'return_time': Date;
  'name': string;
  'email': string;
  'address': string;
  'phone_number': string;
  'license_number': string;
  'customer_status': number;
  'cc_id': number;
  'cc_name': string;
  'number': string;
  'exp_date': string;
  'car_location_id': boolean;
  'plate': string;
  'type': string;
  'capacity': number;
  'image_path': string;
  'availability': number;
  'latitude': number;
  'longitude': number;
  'slot': number;
  'current_car_num': number;
}
