import { Component, inject, OnInit, OnChanges, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    


  ];

  usuarioActual = 0;

  private   activatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    // Se llama despues del constructor, inicializando propiedades de 
    // inputs, y la primer llamada a ngOnChanges
    console.log('Se instancia el componente usuarios');
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    
    if (id) {
      this.usuarioActual = parseInt(id);
    }

  }


}
