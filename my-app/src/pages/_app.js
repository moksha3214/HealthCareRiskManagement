import { ThemeProvider } from '../contexts/ThemeContext';
import '../app/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
