import { styled } from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  height: 80px;
  border-radius: 0px 16px 0px 0px;
  padding: 0px 64px;
  gap: 24px;
  .online {
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: #ED5A5A;
    border-radius: 50px;
    top: 30px;
    right: 4px;
    border: 1px solid #fff;
  }
  .icon {
    position: relative;
    display: flex;
    align-items: center;
  }
  .account {
    display: flex;
    gap: 11px;
  }
  .logo {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h4 {
      font-size: 16px;
      font-weight: 500;
    }
    p {
      color: #ccc;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;
