import styled from "styled-components";

export const BalanceHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
`;
export const BalanceTitle = styled.h3`
  color: #fff;
  font-weight: bold;
  margin: 0;
`;
export const BalanceBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const BalanceFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const BalanceText = styled.div`
  height: 68px;
  display: flex;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.moneyColor};
  font-weight: bold;
`;
