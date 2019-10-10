import React from 'react';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';
import api from '../../Services/api';
import history from '../../Services/history';
import {
    Container,
    GroupMeetup,
    Meetup,
    Description,
    SubHeader,
    EditMeet,
    CanMeet,
    Labels,
    ButtonGroup,
    Image,
    LabelInfo
} from './style';
import { toast } from 'react-toastify';

const Details = () => {
    const meetup = history.location.state.item;

    if (!meetup) {
        history.push('/Dashboard');
    }

    function handlerEdit(e) {
        e.preventDefault();

        history.push('/Meetup', {meetup});
    }
    async function handlerCancel(e) {
        e.preventDefault();

        await api.delete(`/events/${meetup.id}`);

        toast.success("Evento deletado com sucesso");

        setTimeout(()=>{
            history.push('/Dashboard');
        }, 1000);
    }

    return (   
        <Container>
            <SubHeader>
                <span>{meetup.name}</span>
                <ButtonGroup>
                    <EditMeet onClick={handlerEdit}>
                        <FaEdit />
                        <span>Editar</span>
                    </EditMeet>
                    <CanMeet onClick={handlerCancel}>
                        <FaTrashAlt />
                        <span>Cancelar</span>
                    </CanMeet>
                </ButtonGroup>
            </SubHeader>
            <GroupMeetup>
                { meetup ? (
                    <Meetup>
                        <Image src={meetup.banner.url}></Image>
                        <Description>{meetup.description}</Description>
                        <LabelInfo>
                            <Labels>    
                                <FaRegCalendarAlt />
                                <span>{meetup.formattedDate}</span>
                            </Labels>
                            <Labels>    
                                <FaMapMarkerAlt />
                                <span>{meetup.location}</span>
                            </Labels>
                        </LabelInfo>
                    </Meetup>
                ) : null }
            </GroupMeetup>
        </Container>
    );
}

export default Details;