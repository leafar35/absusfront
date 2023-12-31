import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';
import Routes from './routes';

function App() {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
