import { Injectable } from '@angular/core';
import { Rental } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public rentals: Array<Rental> = [];
  
  constructor() { }

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
