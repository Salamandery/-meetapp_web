import React, {
    useState,
    useEffect
} from 'react';
import api from '../../Services/api';
import { FaAngleRight, FaRegCalendarPlus } from 'react-icons/fa';

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
                const res = await api.get('/events', {
                    headers: {
                        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcwNTU3NjMzLCJleHAiOjE1NzExNjI0MzN9.9SoF-qfPUkJdkkCMbiqxYYXO0-YSBXdum3a4wgV3x90"
                    }
                });
                if (res) {
                    setMeetup(res.data);
                }
            } catch(err) {
                console.log(err);
            }
        }
        loadMeetup();
    }, []);

    return (   
        <Container>
            <SubHeader>
                <span>Meus meetups</span>
                <NewMeet>
                    <FaRegCalendarPlus />
                    <span>Novo meetup</span>
                </NewMeet>
            </SubHeader>
            <GroupMeetup>
                { meetup ? (
                    meetup.map(meet=>(
                    <Meetup key={meet.id}>
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