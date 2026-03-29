import { Routes } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';
import { Bindeos } from './bindeos/bindeos';
import { Login } from './login/login';
import { Error } from './error/error'
export const routes: Routes = [

    {
        path: 'bienvenida',
        component: Bienvenida,
    },
    {
        path: 'error',
        component: Error,
    },
    {
        path: 'bindeos',
        component: Bindeos,
    },
    {
        path: 'login',
        component: Login,
    },
    
];


// /tutoriales -> Tutoriales
// /bienvenida -> Bienvenida
// /tutoriales -> Tutoriales
