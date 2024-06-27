import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../Componants/Emails'));
const ViewEmail = lazy(() => import('../Componants/ViewEmail'));
// import Main from "../pages/Main";
// import Emails from "../Componants/Emails";

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export { routes };