import React from 'react';

import CardContainer from './CardContainer'

import { 
    PageContainer, 
    MainPageHeader,
    CardsContainer,
} from '../../Reusable/StyledComponents'

const UserPage = props => {
    return (
        <PageContainer>
            <MainPageHeader>My <br></br>interests...</MainPageHeader>
            <CardsContainer>
                
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />
               <CardContainer />

            </CardsContainer>
        </PageContainer>
    );
}

export default UserPage;