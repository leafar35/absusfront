import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './contexts/theme';
import Routes from './routes';
import AuthProvider from './contexts/AuthContext';

function App() {
  const { theme } = useTheme();
  
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
