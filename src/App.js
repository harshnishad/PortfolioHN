
import  styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Themes"
import Navbar from "./component/Navbar";
import {BrowserRouter} from "react-router-dom";
import Hero from './component/HeroSection/Hero'
import Skill from './component/sections/Skill'
import Projects from "./component/sections/Projects";


const Body = styled.div`
background-color:${({theme})=> theme.bg};
color:${({theme})=> theme.text_primary};
width:100%;
height:90vh;
overflow-x:hidden;
position:relative;
`; 

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
    <Navbar />
      <Body>
        <Hero/>
        <Skill/>
        <Projects/>
      </Body>
    </BrowserRouter>
   
   </ThemeProvider>
  );
}

export default App;
