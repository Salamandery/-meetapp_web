import React from 'react';
import { FaAngleRight, FaRegCalendarPlus } from 'react-icons/fa';
import Header from '../../Components/Header';
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
    return (   
        <>
            <Header />
            <Container>
                <SubHeader>
                    <span>Meus meetups</span>
                    <NewMeet>
                        <FaRegCalendarPlus />
                        <span>Novo meetup</span>
                    </NewMeet>
                </SubHeader>
                <GroupMeetup>
                    <Meetup>
                        <Title>Meetup</Title>

                        <DataLabel>    
                            <span>Data meetup</span>
                            <FaAngleRight />
                        </DataLabel>
                    </Meetup>
                    <Meetup>
                        <Title>Meetup</Title>

                        <DataLabel>    
                            <span>Data meetup</span>
                            <FaAngleRight />
                        </DataLabel>
                    </Meetup>
                </GroupMeetup>
            </Container>
        </>
    );
}

export default Dashboard;