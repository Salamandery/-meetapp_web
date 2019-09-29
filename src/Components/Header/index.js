import React from 'react';

import {
    Container,
    User,
    UserInfo,
    Username,
    ButtonPerfil,
    Sair
} from './style';

const Header = () => {
    return (
        <Container>
            <a href="/Dashboard">M</a>
            <User>
                <UserInfo>
                    <Username>Rodolfo M F Abreu</Username>
                    <ButtonPerfil>Meu Perfil</ButtonPerfil>
                </UserInfo>
                <Sair>Sair</Sair>
            </User>
        </Container>
    );
}

export default Header;