import axios from "axios";
import React from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { MainContainer } from "../../components/MainContainer/MainContainer";

export default function dashboard() {
  return (
    <MainContainer keywords="dashboard, main menu, profile" title={'Dashboard'}>
      <ContentWrapper style="white">
        <div className='px-[25px] py-[30px]'>
          DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD DASHBOARD
        </div>
      </ContentWrapper>
    </MainContainer>
  )
}
