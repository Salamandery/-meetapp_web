import React from 'react';
import history from '../../Services/history';
import { useSelector } from 'react-redux';
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
    const profile = useSelector(state => state.user.user);
    
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
                    <Username>{profile.name}</Username>
                    <ButtonPerfil onClick={handlerPerfil}>Meu Perfil</ButtonPerfil>
                </UserInfo>
                <Sair>Sair</Sair>
            </User>
        </Container>
    );
}

export default Header;