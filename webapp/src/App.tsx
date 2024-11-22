import AppRoutes from './routes';
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

export default function App() {
    return (
        <PrimeReactProvider >
            <AppRoutes />
        </PrimeReactProvider>
    );
}
