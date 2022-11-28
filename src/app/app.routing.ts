import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    {path: '', pathMatch : 'full', redirectTo: 'logs/alertas/1'},

    // Admin routes
    {
        path       : '',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        data: {
            layout: 'classic'
        },
        children   : [

            // Dashboards
            {path: 'logs', children: [
                {path: 'alertas/:idAmbiente', loadChildren: () => import('app/modules/admin/dashboards/project/project.module').then(m => m.ProjectModule)}
            ]}
        ]
    },

    {path: '**', pathMatch : 'full', redirectTo: 'logs/alertas/1'},
];
