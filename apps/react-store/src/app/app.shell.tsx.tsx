import { createBrowserRouter, Navigate } from 'react-router-dom';


const token = window.localStorage.getItem('token');
const dashboard = 'dashboard'
const startMenu = 'start-menu'
const appShell = createBrowserRouter([
  {
    path: '/',
    element: token ? <div>Main</div> : <div>Home</div>,
    children: [
      {
        index: true,
        element: <Navigate to={startMenu} replace />
      },
    ]
  },
  // {
  //   path: '*',
  //   element: <NotFound code={404} title='Oops! Page Not Be Found' descrip='Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable' link={'/dashboard'} linkdesc={'Back to homepage'} />
  // }
])

// export const guestShells = createBrowserRouter([
//   {
//     // path: '/dashboard/'
//     path: '/',
//     element: token ? <MainLayout /> : <HomeLayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate to={'dashboard'} replace />
//       },
//       dashboardShell,
//       monitoringShell,
//       userManagementShell,
//       ticketManagementShell,
//       KantorLayananShell,
//       QaKantorLayananShell,
//       QaPerangkatPendukungShell,
//       QaMesinAtmShell,
//       QaPsuShell,
//       QaSummaryShell,
//       QaCctvShell
//     ]
//   },
//   {
//     path: '*',
//     element: <div>Not Found</div>
//   }
// ]);

export default appShell

// if (import.meta.vitest) {
//   // add tests related to your file here
//   // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

//   const { it, expect, beforeEach } = import.meta.vitest;
//   let render: typeof import('@testing-library/react').render;

//   beforeEach(async () => {
//     render = (await import('@testing-library/react')).render;
//   });

//   it('should render successfully', () => {
//     const { baseElement } = render(<AppShellTsx />);
//     expect(baseElement).toBeTruthy();
//   });
// }
