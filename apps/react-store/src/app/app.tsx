// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.css';

import appShell from './app.shell.tsx';


import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="react-store" /> */}
      <RouterProvider router={appShell} />
    </div>
  );
}

export default App;
