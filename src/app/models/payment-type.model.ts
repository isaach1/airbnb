export class PaymentType {
    public payment_method: string;
    public card_number: string;
    public name_on_card: string;
    public expiration_date: string;
    public security_code: string;

    constructor() {
        this.payment_method = "";
        this.card_number = "xxxx-xxxx-xxxx-xxxx";
        this.name_on_card = "";
        this.expiration_date = "xx/xx";
        this.security_code = "";
    }
}