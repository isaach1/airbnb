export class Rental {
    public id: number;
    public name: string;
    public image: string;
    public house_address: string;
    public price: number;
    public owner: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.house_address = "";
        this.price = 0;
        this.owner = "";

    }
}