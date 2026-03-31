import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
// import { Bienvenida } from './pages/bienvenida/bienvenida';
// import { Error } from './pages/error/error';
// import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';

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
        children: [
            {
                path: "login",
                component: Login
            },
            
            {
                path: "registro",
                component: Registro
            },

        ]
    },

    // {
    //     path: "login",
    //     loadComponent: () => import("./pages/login/login").then((module) => module.Login)
    // },

    // {
    //     path: "registro",
    //     loadComponent: () => import("./pages/registro/registro").then((module) => module.Registro)
    // },

    {
        path: "**", //Cualquier ruta no definida
        loadComponent: () => import("./pages/error/error").then((module) => module.Error)
    },
];
