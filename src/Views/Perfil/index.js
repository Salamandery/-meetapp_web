import React from 'react';

import Header from '../../Components/Header';
import {
    Container,
    Save,
    ChangePassword
} from './style';
import {
    Input
} from '../../Style';

const Perfil = () => {
    return (   
        <>
            <Header />
            <Container>
                <Input placeholder="Nome completo" />
                <Input placeholder="Digite seu e-mail" />
                <ChangePassword>
                    <Input placeholder="Senha atual" />
                    <Input placeholder="Nova senha" />
                    <Input placeholder="Confirmação de senha" />
                </ChangePassword>
                <Save>Salvar perfil</Save>
            </Container>
        </>
    );
}

export default Perfil;