import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios = [
    
    {
      nombre: 'Agus',
      perfil: 'Profesor',
      edad: 30,
    },
    {
      nombre: 'Franco',
      perfil: 'Estudiante',
      edad: 20,
    },
    {
      nombre: 'Carlos',
      perfil: 'Estudiante',
      edad: 60,
    },
    {
      nombre: 'Silvia',
      perfil: 'Estudiante',
      edad: 40,
    },
    {
      nombre: 'Mari',
      perfil: 'Estudiante',
      edad: 18,
    },
    


  ]
}
