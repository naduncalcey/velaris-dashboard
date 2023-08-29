//imported libraries
import { AppContainer, MainLayout } from "./App.styled";
import { ThemeProvider } from "styled-components";

// imported components
import BodyContent from "./components/BodyContent/BodyContent";
import SideBar from "./components/SideBar/SideBar";
import { Theme, GlobalStyles } from './global.css'

function App() {
  return (
    <div className="body-container">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <AppContainer className="App">
          <MainLayout>
            <SideBar />
            <BodyContent />
          </MainLayout>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
