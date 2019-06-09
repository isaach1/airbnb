export class Rental {
    public id: number;
    public name: string;
    public imageUrl: string;
    public location: string;
    public price: number;
    public owner: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.imageUrl = "";
        this.location = "";
        this.price = 0;
        this.owner = "";

    }
}