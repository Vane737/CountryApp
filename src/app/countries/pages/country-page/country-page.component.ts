import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  constructor( private activatedRoute: ActivatedRoute, private countriesService: CountriesService ) {

  }
  ngOnInit(): void {
    //Primera forma de hacerlo
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log({ params: id});

    //     this.countriesService.searchCountryByAlphaCode(id)
    //       .subscribe( country => {
    //         console.log({ country })
    //       })
    //   })
    // Segunda forma de hacerlo
      this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
      )
      .subscribe( ( country ) => {
        console.log(country);
      })

  }


}
