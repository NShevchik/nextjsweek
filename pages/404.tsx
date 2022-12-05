import { MainContainer } from "../components/MainContainer/MainContainer";
import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper";

export function ErrorPage() {
    return (
        <MainContainer keywords="error, page not found, error page, 404 page">
            <ContentWrapper>
                <div className='px-[25px] py-[30px] h-96 flex items-center justify-center text-whale-bowhead flex-col'>
                    <div className='text-[150px] flex items-center justify-center text-whale-bowhead leading-none'>
                        404
                    </div>
                    <div>
                        Not found :(
                    </div>
                </div>
            </ContentWrapper>
        </MainContainer >
    )
}

export default ErrorPage; 