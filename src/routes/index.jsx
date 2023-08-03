import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export default function Routes(){
  const { user } = useAuth();

  return (
    <BrowserRouter>
      { user ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}