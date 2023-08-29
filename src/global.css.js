import { createGlobalStyle } from 'styled-components'

// Dark theme colors here
export const Theme = {
    body: "#FAF9FF",
    navText: "#FFFFFF",
};

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
