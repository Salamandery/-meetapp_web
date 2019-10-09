import React, {
    useState,
    useEffect
} from 'react';
import api from '../../Services/api';
import { FaAngleRight, FaRegCalendarPlus } from 'react-icons/fa';
import history from '../../Services//history';
import {
    Container,
    GroupMeetup,
    Meetup,
    Title,
    SubHeader,
    NewMeet,
    DataLabel
} from './style';

const Dashboard = () => {
    const [meetup, setMeetup] = useState('');

    useEffect(()=>{
        async function loadMeetup() {
            try {
                const res = await api.get('/events');
                if (res) {
                    setMeetup(res.data);
                }
            } catch(err) {
                console.log(err);
            }
        }
        loadMeetup();
    }, []);

    function handlerNewEvent(e) {
        e.preventDefault();

        history.push('/Meetup');
    }
    function handleDetails(e, item) {
        e.preventDefault();

        history.push('/Details', {item});
    }

    return (   
        <Container>
            <SubHeader>
                <span>Meus meetups</span>
                <NewMeet onClick={handlerNewEvent}>
                    <FaRegCalendarPlus />
                    <span>Novo meetup</span>
                </NewMeet>
            </SubHeader>
            <GroupMeetup>
                { meetup ? (
                    meetup.map(meet=>(
                    <Meetup key={meet.id} onClick={e=>handleDetails(e,meet)}>
                        <Title>{meet.name}</Title>

                        <DataLabel>    
                            <span>{meet.date}</span>
                            <FaAngleRight />
                        </DataLabel>
                    </Meetup>))
                ) : null }
            </GroupMeetup>
        </Container>
    );
}

export default Dashboard;