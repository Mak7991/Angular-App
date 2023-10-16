import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/models/housinglocation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getBaseUrl(): string {
    return 'https://angular.io/assets/images/tutorials/faa';
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(environment.NODE_API_URL);
    return (await data.json()) ?? [];
  }
 
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${environment.NODE_API_URL}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
