import React, {
    useState,
    useEffect
} from 'react';
import { FaRegSave, FaCameraRetro } from 'react-icons/fa';
import history from '../../Services//history';
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
    const { meetup } = history.location.state;
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const [location, setLocation] = useState('');
    const [banner, setBanner] = useState([]);

    useEffect(()=>{
        if (meetup) {
            setId(meetup.id);
            setName(meetup.name);
            setDes(meetup.description);
            setLocation(meetup.location);
            setBanner(meetup.banner);
        }
    }, [meetup]);

    function handlerSave(e) {
        e.preventDefault();

        if (id) {

        } else {

        }
    }

    return (   
        <Container>
            <Image src={banner.url}>
                {banner ? null : (
                    <>
                    <FaCameraRetro />
                    <span>Selecionar Imagem</span> 
                    </>
                )}
            </Image>
            <Input placeholder="Titulo do Meetup" />
            <TextArea placeholder="Descrição completa" />
            <Input placeholder="Data do Meetup" />
            <Input placeholder="Localização" />
            <Save onClick={handlerSave}>
                <FaRegSave />
                <span>Salvar meetup</span>
            </Save>
        </Container>
    );
}

export default NewMeetup;