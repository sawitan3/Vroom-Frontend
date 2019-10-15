export class AddCarRequest {
    type: string;
    plate: string;
    capacity: number;
    location_id: number;
    availability: number;
    price_per_day: number;
    cover_image: File;
}
