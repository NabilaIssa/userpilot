import './App.css';
import Sidebar from './components/Sidebar';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/mulish/300.css';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/500.css';
import '@fontsource/mulish/700.css';
import PageContent from './components/PageContent';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  title: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#252733',
  },
  desc: {
    fontSize: '12px',
    fontWeight: '400',
    color: '#c5c7cd',
    marginTop: '5px',
  },
  components: {},
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={10}>
          <PageContent></PageContent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
