import React from 'react';
import { createRoot } from 'react-dom/client'; // Using createRoot correctly
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
<<<<<<< HEAD
import './index.css';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> d3bff5a (Enhance UI)

// Replace with your Clerk publishable key
const clerkPublishableKey = 'pk_test_ZmxlZXQtaG91bmQtMjguY2xlcmsuYWNjb3VudHMuZGV2JA';

if (!clerkPublishableKey) {
  console.error('Missing Clerk Publishable Key!');
}

// Get the root container
const container = document.getElementById('root');

// Create root using React 18's API
const root = createRoot(container);

// Render the app
root.render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ClerkProvider>
);
