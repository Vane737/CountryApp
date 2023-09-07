import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {


  public countries: Country[] = [];
  constructor( private countriesService: CountriesService ) {

  }

  searchByCapital( termino: string ): void {
    this.countriesService.searchCapital( termino )
    .subscribe( countries =>  {
      this.countries = countries
      console.log(this.countries);
    })
  }
}
