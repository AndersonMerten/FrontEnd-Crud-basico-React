/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Home', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Cruds incriveis',
            items: [
                { label: 'Usuário', icon: 'pi pi-fw pi-id-card', to: '/pages/usuario' },
                { label: 'Recursos', icon: 'pi pi-fw pi-truck', to: '/pages/recurso' },
                { label: 'Perfis', icon: 'pi pi-fw pi-users', to: '/pages/perfil' },
                { label: 'Funções', icon: 'pi pi-fw pi-wrench', to: '/pages/perfil-usuario' },
                { label: 'Permissões', icon: 'pi pi-fw pi-lock', to: '/pages/permissao-perfil-recurso' },
                

            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}

                <Link href="https://github.com/AndersonMerten" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/github-logo.webp`} />
                </Link>
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
