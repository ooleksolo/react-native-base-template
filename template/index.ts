import { AppRegistry } from 'react-native';
import config from './app.config';
import App from './src';

AppRegistry.registerComponent(config.app.name, () => App);
