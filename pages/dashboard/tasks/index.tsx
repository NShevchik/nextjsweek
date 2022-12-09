import React from 'react'
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper'
import { MainContainer } from '../../../components/MainContainer/MainContainer'
import { TasksContent } from '../../../components/Tasks/TasksContent'
import TasksHeader from '../../../components/Tasks/TasksHeader'

const index = () => {
    return (
        <MainContainer keywords="FILES, main menu, profile">
            <ContentWrapper>
                <TasksHeader />
                <TasksContent />
            </ContentWrapper>
        </MainContainer>
    )
}

export default index