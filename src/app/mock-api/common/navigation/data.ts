/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'logs',
        title   : 'Logs',
        subtitle: 'Consola de administracion de logs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : '1',
                title: 'BANCO AZTECA MEXICO',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/1'
            },
            {
                id   : '2',
                title: 'BANCO AZTECA KIO',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/2'
            },
            {
                id   : '3',
                title: 'AFORE MEXICO',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/3'
            },
            {
                id   : '3',
                title: 'AFORE KIO',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/4'
            },
            {
                id   : '4',
                title: 'ELEKTRA',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/5'
            },
            {
                id   : '5',
                title: 'CONECTIVIDAD',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/logs/alertas/6'
            }
        ]
    }
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'logs',
        title   : 'logs',
        tooltip : 'logs',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'logs',
        title   : 'logs',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'logs',
        title   : 'logs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
