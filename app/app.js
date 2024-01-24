import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'employee-organization-chart/config/environment';
import firebase from 'firebase/app';
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

firebase.initializeApp(config.firebase);

loadInitializers(App, config.modulePrefix);
