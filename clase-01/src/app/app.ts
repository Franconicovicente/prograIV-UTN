import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Bindeos } from './bindeos/bindeos';
import { Login } from './login/login';
import { Error } from './error/error';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Bienvenida,Bindeos,Login,Error,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
