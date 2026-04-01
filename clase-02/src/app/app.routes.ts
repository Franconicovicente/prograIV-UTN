import { Routes } from '@angular/router';
import { Usuarios } from './pages/usuarios/usuarios';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'bienvenida',
        pathMatch: 'full'
    },
    
    {
        path: "bienvenida",
        loadComponent: () => import("./pages/bienvenida/bienvenida").then((module) => module.Bienvenida)
    },
    

    
    /*
    ------------------ 
    Rutas Hijas
    ------------------ 
    */
   
    {
        path: 'auth',
        loadComponent: () => import("./pages/auth/auth").then((module) => module.Auth),
        loadChildren: () => import("./pages/auth/auth.routes").then((routes) => routes.authRoutes),
    },
    {
        path: 'usuarios',
        loadComponent: () => import("./pages/usuarios/usuarios").then((module) => module.Usuarios),
    },

    {path: 'usuarios/:id', redirectTo: 'usuarios/:id', pathMatch: 'prefix'},
    {
        path: 'usuarios/:id',
        component: Usuarios
    },

     // WILDCARD
    {
        path: "**", //Cualquier ruta no definida
        loadComponent: () => import("./pages/error/error").then((module) => module.Error)
    },
];