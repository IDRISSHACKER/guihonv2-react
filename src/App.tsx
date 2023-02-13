import {BrowserRouter as Router} from "react-router-dom"
import AppRouter from "./routes/Routes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

    const Theme = createTheme({
        palette: {
            primary: {
                main: "#228C22",
            },
            secondary: {
                main: "#080b16",
            },
        },
        typography: {
            fontFamily: [
                'Montserrat',
            ].join(','),
        },
    });

  return (
      <Router>
          <ThemeProvider theme={Theme}>
              <CssBaseline />
              <div className="App">
                  <AppRouter />
              </div>
          </ThemeProvider>
      </Router>
  )
}

export default App
