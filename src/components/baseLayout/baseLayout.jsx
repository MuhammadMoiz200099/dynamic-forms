import React from 'react';
import { PageWrapper, NavbarWrapper, NavbarTitleText, ContainerWrapper } from "./baseLayout.styled";
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <PageWrapper>
      <NavbarWrapper>
        <NavbarTitleText>Dynamic Forms</NavbarTitleText>
      </NavbarWrapper>
      <ContainerWrapper>
        <Outlet />
      </ContainerWrapper>
    </PageWrapper>
  )
}

export default BaseLayout