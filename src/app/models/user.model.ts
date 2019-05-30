export class User {
    public name: string;
    public image: string;
    public join_date: number;
    public location: string;
    public email: string;
    public phone_number: string;
    public bookings: number;
    public reviews: number;

    constructor () {
        this.name = "";
        this.image = "";
        this.join_date = 0;
        this.location = "";
        this.email = "";
        this.phone_number = "";
        this.bookings = 0;
        this.reviews = 0;
    }
}