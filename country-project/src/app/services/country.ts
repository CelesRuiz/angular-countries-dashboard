import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInterface } from '../models/country-interface.ts/country-interface.ts';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient)
  private apiUrl = "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"

  /**
 * getCountry
 */

  public getCountries():Observable<CountryInterface[]> {
    return this.http.get<CountryInterface[]>(this.apiUrl)
  
}
  
}



