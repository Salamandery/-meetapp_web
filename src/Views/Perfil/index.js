import React, {
    useState,
} from 'react';
import { useSelector } from 'react-redux';
import api from '../../Services/api';
import { FaRegSave } from 'react-icons/fa';

import {
    Container,
    Save,
    ChangePassword
} from './style';
import {
    Input
} from '../../Style';

const Perfil = () => {
    const profile = useSelector(state => state.user.user);

    const [email, setEmail] = useState(profile.email);
    const [name, setName] = useState(profile.name);
    const [password, setPass] = useState('');
    const [oldPassword, setOldPass] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');

    function handlerSave(e) {
        e.preventDefault();
        
        try {
            api.put('/users', {
                email,
                name,
                oldPassword,
                password,
                confirmPassword
            });
        } catch (err) {
            console.tron.log(err);
        }
    }

    return (   
        <Container>
            <Input placeholder="Nome completo" 
                    value={name}
                    onChange={e=>setName(e.target.value)}
            />
            <Input placeholder="Digite seu e-mail" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
            />
            <ChangePassword>
                <Input placeholder="Senha atual" 
                        value={oldPassword}
                        onChange={e=>setOldPass(e.target.value)}
                />
                <Input placeholder="Nova senha" 
                        value={password}
                        onChange={e=>setPass(e.target.value)}
                />
                <Input placeholder="Confirmação de senha" 
                        value={confirmPassword}
                        onChange={e=>setConfirmPass(e.target.value)}
                />
            </ChangePassword>
            <Save onClick={handlerSave}>
                <FaRegSave />
                <span>Salvar perfil</span>
            </Save>
        </Container>
    );
}

export default Perfil;