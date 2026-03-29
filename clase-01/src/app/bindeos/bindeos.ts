import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule],
  templateUrl: './bindeos.html',
  styleUrl: './bindeos.css',
})
export class Bindeos {
  
  nombre: string = 'Franco';
  contador: number = 0;
  link: string = 'https://google.com';

  contar(){
    this.contador ++;
    console.log(this.contador);
  }

  borrar(){
    this.nombre='';
  }
}
