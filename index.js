/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/App';
import { AuthProvider } from './src/context/AuthContext';
function mainPage() {

    return (
        // <PermissionsProvider>
        <AuthProvider>
            <App />
        </AuthProvider>

    )
}

AppRegistry.registerComponent(appName, () => mainPage);
