import React from 'react';
import history from '../../Services/history';
import {
    Container,
    User,
    UserInfo,
    Username,
    ButtonPerfil,
    Sair,
    Logo
} from './style';

const Header = () => {

    function handlerPerfil(e) {
        e.preventDefault();

        history.push('/Perfil');
    }
    function handlerDashboard(e) {
        e.preventDefault();

        history.push('/Dashboard');
    }
    return (
        <Container>
            <Logo onClick={handlerDashboard}>M</Logo>
            <User>
                <UserInfo>
                    <Username>Rodolfo M F Abreu</Username>
                    <ButtonPerfil onClick={handlerPerfil}>Meu Perfil</ButtonPerfil>
                </UserInfo>
                <Sair>Sair</Sair>
            </User>
        </Container>
    );
}

export default Header;