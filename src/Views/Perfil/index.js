import React, {
    useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegSave } from 'react-icons/fa';
import { updateProfileRequest } from '../../Services/store/user/action';
import {
    Container,
    Save,
    ChangePassword
} from './style';
import {
    Input
} from '../../Style';

function Perfil() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.user);

    const [email, setEmail] = useState(profile.email);
    const [name, setName] = useState(profile.name);
    const [password, setPass] = useState('');
    const [oldPassword, setOldPass] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');

    function handlerSave(e) {
        e.preventDefault();
        
        dispatch(updateProfileRequest({
                name,
                email,
                password,
                oldPassword,
                confirmPassword,
        }));
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
                        type="password"
                        value={oldPassword}
                        onChange={e=>setOldPass(e.target.value)}
                />
                <Input placeholder="Nova senha" 
                        type="password"
                        value={password}
                        onChange={e=>setPass(e.target.value)}
                />
                <Input placeholder="Confirmação de senha"
                        type="password" 
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