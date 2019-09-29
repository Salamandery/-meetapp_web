import React from 'react';

import {
    Container,
    Login
} from './style';
import {
    Input
} from '../../Style';

const SignIn = () => {

    return (
        <Container> 
            <span>M</span>
            <Input placeholder="Login" />
            <Input placeholder="Senha" />
            <Login>Entrar</Login>
            <a href="/SignUp">Criar conta grátis</a>
        </Container>
    );
}

export default SignIn;