import { Component } from '@angular/core';
import { PokeHeaderComponent } from "../../shared/poke-header/poke-header.component";
import { PokeListComponent } from "../../shared/poke-list/poke-list.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-home',
  imports: [PokeHeaderComponent, PokeListComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
