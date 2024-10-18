/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/layout/images/Acompany-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.png`} alt="Logo" height="20" className="mr-2" />
            <span style={{  textDecorationLine: "line-through" }} className="font-medium ml-2">Copiado </span>
            <span className="font-medium ml-2">Desenvolvido com </span>
            <span style={{  color: 'var(--primary-color)' }} className="font-medium ml-2">PrimeReact</span>
        </div>
    );
};

export default AppFooter;
