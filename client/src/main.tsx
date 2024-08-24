import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import {App} from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
  domain="dev-of7ftg86vyprv8ev.us.auth0.com"
  clientId="YSEAIHftskMiId9jqvuJAxwPMY6E5E2N"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
