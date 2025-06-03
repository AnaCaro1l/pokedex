import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PokeSearchComponent
  ],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit():void {
    this.pokeApiService.apiListAllPokemons
    .subscribe(res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    }, error => {
      this.apiError = true;
    });
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
