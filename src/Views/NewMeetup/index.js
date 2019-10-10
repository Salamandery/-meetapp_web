import React, {
    useState,
    useEffect
} from 'react';
import { FaRegSave, FaCameraRetro } from 'react-icons/fa';
import history from '../../Services//history';
import api from '../../Services/api';
import {
    Container,
    Save,
    Image
} from './style';
import {
    Input,
    TextArea
} from '../../Style';
import { toast } from 'react-toastify';

const NewMeetup = () => {
    const { meetup } = history.location.state || {};
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDes] = useState('');
    const [location, setLocation] = useState('');
    const [preview, setPreview] = useState('');
    const [file, setFile] = useState(0);

    useEffect(()=>{
        if (meetup) {
            setId(meetup.id);
            setName(meetup.name);
            setDate(meetup.date);
            setDes(meetup.description);
            setLocation(meetup.location);
            setPreview(meetup.banner.url);
            setFile(meetup.banner.id);
        }
    }, []);

    async function handleAvatar(e) {
        try {
            const data = new FormData();

            data.append('file', e.target.files[0]);
            const res = await api.post('/files', data);
            
            const { id, url } = res.data;
            console.log(res);
            setFile(id);
            setPreview(url)
        } catch (err) {

        }
    }

    async function handlerSave(e) {
        e.preventDefault();

        if (id) {
            // Editando
            try {
                const res = await api.put('/events', {
                    id,
                    name,
                    date,
                    description,
                    location,
                    banner_id: file,
                });
                toast.success("Cadastro atualizado com sucesso.");
                setTimeout(()=>{
                    history.push('/Dashboard');
                }, 1000);
            } catch (err) {
                toast.error('Não foi possivel atualizar o meetup, verifique os dados informados')
            }
        } else {
            // Inserindo
            try {
                const res = await api.post('/events', {
                    id,
                    name,
                    date,
                    description,
                    location,
                    banner_id: file,
                });

                toast.success('Cadastro realizado com sucesso');

                setTimeout(()=>{
                    history.push('/Dashboard');
                }, 1000);
            } catch (err) {
                toast.error('Não foi possivel cadastrar o meetup, verifique os dados informados')
            }
        }
    }

    return (   
        <Container>
            <label htmlFor="avatar">
                <Image src={preview}>
                    {preview ? null : (
                        <>
                        <FaCameraRetro />
                        <span>Selecionar Imagem</span> 
                        </>
                    )}
                </Image>
                <input  type="file"
                        id="avatar"
                        data-file={file}
                        accept="images/*"
                        onChange={handleAvatar} />
            </label>
            <Input placeholder="Titulo do Meetup" 
                   value={name}
                   onChange={e=>setName(e.target.value)}
            />
            <TextArea placeholder="Descrição completa" 
                   value={description}
                   onChange={e=>setDes(e.target.value)}
            />
            <Input placeholder="Data do Meetup" 
                   value={date}
                   type="datetime-local"
                   onChange={e=>setDate(e.target.value)}
            />
            <Input placeholder="Localização" 
                   value={location}
                   onChange={e=>setLocation(e.target.value)}            
            />
            <Save onClick={handlerSave}>
                <FaRegSave />
                <span>Salvar meetup</span>
            </Save>
        </Container>
    );
}

export default NewMeetup;