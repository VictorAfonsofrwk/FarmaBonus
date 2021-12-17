// @flow
import * as React from "react";
import styled from "styled-components";
import { Cards } from "../../../types/global";
import { CardsContainer } from "../styles";
import { MdClear } from "react-icons/md";
interface Props extends Cards {
  title: string;
  content: any;
}

export const MenssageCardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: bold;
`;
export const MenssageCardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`;
export const MenssageCard = ({ background, color, title, content }: Props) => {
  return (
    <CardsContainer hoverable background={background} color={color}>
      <MenssageCardHeader>
        <span>{title}</span>
        <MdClear className="hoverable-icon ms-auto p-1" size={28}/>
      </MenssageCardHeader>
      <MenssageCardBody>
         {content}
      </MenssageCardBody>
    </CardsContainer>
  );
};
