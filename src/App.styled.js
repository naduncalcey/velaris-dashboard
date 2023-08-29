import { styled } from "styled-components";

export const AppContainer = styled.div`
    background-color: ${(props) => props.theme.body};
    width: 1440px;
    max-height: 850px;
    border-radius: 16px;
    .menu-link-content--bar {
        
    }
`;


export const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
`;