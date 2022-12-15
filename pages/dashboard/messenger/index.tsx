import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { MainContainer } from "../../../components/MainContainer/MainContainer";

function messenger() {
    return (
        <MainContainer keywords="messenger, messages, message, send message" title={'Messenger'}>
            <ContentWrapper style="white">
                <div className='px-[25px] py-[30px]'>
                    MESSENGER NOT AVAILABLE
                </div>
            </ContentWrapper>
        </MainContainer>
    )
}
export default messenger;