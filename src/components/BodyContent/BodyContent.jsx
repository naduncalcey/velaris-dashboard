import React from "react";
import TableComponent from "../TableComponent/TableComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ActionBarComponent from "../ActionBarComponet/ActionBarComponent";
import { styled } from "styled-components";

const BodyContainer = styled.div`
  .content {
    padding-inline: 64px;
    padding-block: 32px;
  }
`;

function BodyContent() {
  return (
    <BodyContainer>
      <HeaderComponent />
      <div className="content">
        <ActionBarComponent />
        <TableComponent />
      </div>
    </BodyContainer>
  );
}

export default BodyContent;
