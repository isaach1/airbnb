export class User {
    public id: number;
    public firstname: string;
    public lastname: string;
    public image: string;
    public join_date: number;
    public location: string;
    public email: string;
    public phone_number: string;
    public bookings: number;
    public reviews: number;

    constructor () {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.image = "";
        this.join_date = 0;
        this.location = "";
        this.email = "";
        this.phone_number = "";
        this.bookings = 0;
        this.reviews = 0;
    }
}