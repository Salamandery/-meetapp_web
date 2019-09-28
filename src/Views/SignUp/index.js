import React from 'react';

import {
    Container,
    Login
} from './style';
import {
    Input
} from '../../Style';

const SignUp = () => {
    return (
        <Container>
            <Input placeholder="Nome completo" />
            <Input placeholder="Digite seu e-mail" />
            <Input placeholder="Sua senha secreta" />
            <Login>Entrar</Login>
            <a href="/">Já tenho uma conta.</a>
        </Container>
    );
}

export default SignUp;