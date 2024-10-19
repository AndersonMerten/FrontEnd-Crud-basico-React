/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useMemo, useRef, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { LoginService } from '@/service/LoginService';
import { Toast } from 'primereact/toast';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const { layoutConfig } = useContext(LayoutContext);
    const loginService = useMemo(() => new LoginService(), []);
    const router = useRouter();
    const toast = useRef<Toast>(null);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const efetuarlogin = () =>{
        loginService.login(login,senha).then((response) => {
            console.log("sucesso");
            console.log(response);
            localStorage.setItem("TOKEN_APP_FRONTEND", response.data.token);
            router.push("/");
            window.location.reload();
            
        }).catch(() =>{
            console.log("Erro");
            toast.current?.show({
                severity:"error",
                summary: "Erro!",
                detail: "Login ou senha incorreta" 
            });

        })
    }  
     
    return (
        <div className={containerClassName}>
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/ACompany-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.png`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <div className="text-900 text-3xl font-medium mb-3">Efetuar login</div>
                        </div>

                        <div>
                            <label htmlFor="login" className="block text-900 text-xl font-medium mb-2">
                                Login
                            </label>
                            <InputText id="login" value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Digite seu login" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="senha" className="block text-900 font-medium text-xl mb-2">
                                Senha
                            </label>
                            <Password inputId="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Esqueci minha senha
                                </a>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }} onClick={() => router.push('/auth/newUser')}>
                                    Quero criar um novo usuário
                                </a>
                            </div>
                            <Button label="Entrar" className="w-full p-3 text-xl" onClick={() => efetuarlogin()}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
