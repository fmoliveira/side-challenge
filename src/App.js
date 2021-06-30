import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Loader from './components/Loader';

import Routes from './pages/_routes';
import theme from './styles/theme';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Normalize />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Suspense>
  );
}
