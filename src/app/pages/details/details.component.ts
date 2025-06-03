import { Component, OnInit } from '@angular/core';
import { PokeHeaderComponent } from "../../shared/poke-header/poke-header.component";
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  imports: [PokeHeaderComponent, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private route: ActivatedRoute, private pokeApiService: PokeApiService) { }

  ngOnInit() {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.route.snapshot.paramMap.get('id');
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    )
  }
}
