import { Injectable } from '@angular/core';
import { Rental } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public rentals: Array<Rental> = [];
  
  constructor() { }

  getAllRentals() {
    this.rentals = [];
    
    let rental1 = new Rental();
    rental1.id = 1;
    rental1.name = "Mansion";
    rental1.image = "https://i.boring.host/166LQ8hw.jpg";
    rental1.house_address = "21 Boring Avenue, New York, NY, 01111";
    rental1.price = 350;
    rental1.owner = "Joe Bloggs";
    this.rentals.push(rental1);

    let rental2 = new Rental();
    rental2.id = 2;
    rental2.name = "Beach House";
    rental2.image = "https://i.boring.host/166MzJHl.jpg";
    rental2.house_address = "56 Goldsmith Street, Boston, MA, 02133";
    rental2.price = 200;
    rental2.owner = "Anthony Fuggle";
    this.rentals.push(rental2);
  }

  findRentalById(id: number): Rental {
    let foundRental: Rental = null;
    this.rentals.forEach(
      (rental: Rental) => {
        if (rental.id == id) {
          // display this rental
          foundRental = rental;
        } 
      }
    );
    return foundRental;
  }

}
