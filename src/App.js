
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import ErrorPage from './ErrorPage';
import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';


function App() {

  const theme ={
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",

    },

    media: {
      mobile: "768px",
      tab: "998px",
    }
  }
  return (
    <ThemeProvider theme ={theme}>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='*' element ={<ErrorPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
