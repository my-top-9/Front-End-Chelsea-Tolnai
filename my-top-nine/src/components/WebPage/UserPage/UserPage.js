import React from 'react';

import CardContainer from './CardContainer'

import { PageContainer,  MainPageHeader, CardsContainer } from '../../Reusable/StyledComponents'

const array= [1, 2, 3, 4, 5, 6, 7, 8, 9]

const UserPage = () => {
    return (
        <PageContainer>
            <MainPageHeader>My <br></br>interests...</MainPageHeader>
            <CardsContainer>
                {array.map(item => <CardContainer content={item} key={item}/>)}
            </CardsContainer>
        </PageContainer>
    );
}

export default UserPage;