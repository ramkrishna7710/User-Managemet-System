import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { RouterModule} from '@angular/router';

import { Login } from './features/auth/login/login';
import { UserList } from './features/admin/user-list/user-list';
import { Profile } from './features/user/profile/profile';

import { authGuard } from './core/guards/auth-guard';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'login', 
        pathMatch: 'full' 
    },

    {
     path: 'login', 
     component: Login
    },

    {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    children: [
        {
         path: 'users', component: UserList
        }
    ]

    },

    {
    path: 'profile',
    canActivate: [authGuard],
    component: Profile
    }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
