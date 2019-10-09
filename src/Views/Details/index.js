import React from 'react';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';
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

const Details = () => {
    const meetup = history.location.state.item;

    if (!meetup) {
        history.push('/Dashboard');
    }

    function handlerEdit(e) {
        e.preventDefault();

        history.push('/Meetup', {meetup});
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
                    <CanMeet>
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
                                <span>{meetup.date}</span>
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