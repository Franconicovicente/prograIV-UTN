import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Auth } from './pages/auth/auth';

// import { Bienvenida } from './pages/bienvenida/bienvenida';
// import { Error } from './pages/error/error';
// import { Login } from './pages/login/login';
import { Registro } from './pages/auth/registro/registro';

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
<<<<<<< HEAD
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
=======
        path: 'auth',
        loadComponent: () => import("./pages/auth/auth").then((module) => module.Auth),
        loadChildren: () => import("./pages/auth/auth.routes").then((routes) => routes.authRoutes),
>>>>>>> 2dee6c8fecb959c3da085d9ba46cfed90f10b0c6
    },

    // {
    //     path: "login",
    //     loadComponent: () => import("./pages/login/login").then((module) => module.Login)
    // },

    // {
    //     path: "registro",
    //     loadComponent: () => import("./pages/registro/registro").then((module) => module.Registro)
    // },


     // WILDCARD
    {
        path: "**", //Cualquier ruta no definida
        loadComponent: () => import("./pages/error/error").then((module) => module.Error)
    },
];
