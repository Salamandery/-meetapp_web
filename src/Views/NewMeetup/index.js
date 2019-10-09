import React from 'react';
import { FaRegSave, FaCameraRetro } from 'react-icons/fa';

import {
    Container,
    Save,
    Image
} from './style';
import {
    Input,
    TextArea
} from '../../Style';

const NewMeetup = () => {
    return (   
        <Container>
            <Image>
                <FaCameraRetro />
                <span>Selecionar Imagem</span>
            </Image>
            <Input placeholder="Titulo do Meetup" />
            <TextArea placeholder="Descrição completa" />
            <Input placeholder="Data do Meetup" />
            <Input placeholder="Localização" />
            <Save>
                <FaRegSave />
                <span>Salvar meetup</span>
            </Save>
        </Container>
    );
}

export default NewMeetup;