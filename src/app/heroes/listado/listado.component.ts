import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  
  heroes: string[] = ['Spíderman', 'Iron Man', 'Hulk', 'Thor', 'Capitan Ámerica'];

  heroeBorrado: string = '';

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
