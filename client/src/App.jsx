import { Suspense, lazy } from 'react';
// import Main from './pages/Main';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
const ErrorComponent = lazy(()=> import('./Componants/comman/ErrorComponet'))
import {routes} from './routes/route'
import SuspenseLoader from './Componants/comman/SuspenseLoader';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)

const App = () => {
  return (
    <Suspense fallback = {<SuspenseLoader/>}>
   <RouterProvider router={router}  />
   </Suspense>
  )
}

export default App;