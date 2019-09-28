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
            <div>M</div>
            <User>
                <UserInfo>
                    <Username>Meu nome</Username>
                    <ButtonPerfil>Meu Perfil</ButtonPerfil>
                </UserInfo>
                <Sair>Sair</Sair>
            </User>
        </Container>
    );
}

export default Header;