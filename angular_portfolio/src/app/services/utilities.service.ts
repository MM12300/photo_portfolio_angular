import { Injectable } from '@angular/core';
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private location: Location) { }

    /**
     * Method to go back to previous route in Angular route history
     */
    public goBack() {
      this.location.back();
    }
}
