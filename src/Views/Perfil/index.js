import React, {
    useState,
    useEffect
} from 'react';
import * as Yup from 'yup';
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

const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('Necessário inserir um e-mail.'),
    password: Yup.string().min(6).required('Senha obrigatória.')
});

const Perfil = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const [oldPassword, setOldPass] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');

    useEffect(()=>{
        async function loadUserInfo() {
            try {
                const user = await api.get('/users', {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcwNDg2NzQ5LCJleHAiOjE1NzEwOTE1NDl9.GTtZq47s3LuXy0Lz0hPurxlFLJF0pzm2wq9JIEINOrA"
                    }
                });
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
            },{
                headers: {
                    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcwNDg2NzQ5LCJleHAiOjE1NzEwOTE1NDl9.GTtZq47s3LuXy0Lz0hPurxlFLJF0pzm2wq9JIEINOrA"
                }
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