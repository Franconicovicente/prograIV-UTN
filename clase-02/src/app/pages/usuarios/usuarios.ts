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
    },
    {
      nombre: 'Franco',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Carlos',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Silvia',
      perfil: 'Estudiante',
    },
    {
      nombre: 'Mari',
      perfil: 'Estudiante',
    },
    


  ]
}
