import React from 'react';
import { FaRegSave } from 'react-icons/fa';
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
                <Save>
                    <FaRegSave />
                    <span>Salvar perfil</span>
                </Save>
            </Container>
        </>
    );
}

export default Perfil;