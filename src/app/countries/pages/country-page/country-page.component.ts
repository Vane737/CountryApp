import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country; 

  constructor( private activatedRoute: ActivatedRoute,
               private countriesService: CountriesService,
               private router: Router ) {

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
      if (!country) {
          return this.router.navigateByUrl('/');
        }
        console.log('Tenemos un país');
        return this.country = country;
      })

  }


}
