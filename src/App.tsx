import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './contexts/theme';
import Routes from './routes';
import AuthProvider from './contexts/AuthContext';
import { useEffect } from 'react';
import M from 'materialize-css';

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    M.updateTextFields();
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  },[])
  
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
