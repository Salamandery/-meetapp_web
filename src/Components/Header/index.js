import React from 'react';
import history from '../../Services/history';
import { signOutRequest } from '../../Services/store/auth/action'
import { useSelector, useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.user);
    
    function handlerPerfil(e) {
        e.preventDefault();

        history.push('/Perfil');
    }
    function handlerDashboard(e) {
        e.preventDefault();

        history.push('/Dashboard');
    }
    function handlerLogout(e) {
        e.preventDefault();

        dispatch(signOutRequest());
    }
    return (
        <Container>
            <Logo onClick={handlerDashboard}>M</Logo>
            <User>
                <UserInfo>
                    <Username>{profile.name}</Username>
                    <ButtonPerfil onClick={handlerPerfil}>Meu Perfil</ButtonPerfil>
                </UserInfo>
                <Sair onClick={handlerLogout}>Sair</Sair>
            </User>
        </Container>
    );
}

export default Header;