import { Suspense } from 'react';
import { Normalize } from 'styled-normalize';

import Loader from './components/Loader';

import Routes from './pages/_routes';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Normalize />
      <Routes />
    </Suspense>
  );
}
