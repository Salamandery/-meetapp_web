import React, {
    useState,
    useEffect
} from 'react';
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
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const [oldPassword, setOldPass] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');

    useEffect(()=>{
        async function loadUserInfo() {
            try {
                const user = await api.get('/users');
                if (user) {
                    setEmail(user.data.email);
                    setName(user.data.name);
                }
            } catch (err) {
                console.log(err);
            }
        }

        loadUserInfo();
    }, []);

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