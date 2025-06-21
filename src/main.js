import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import createRouter from './router'; 

const app = createApp(App);
const router = createRouter(); 

app.use(router); 
app.use(Quasar, {
  plugins: {},
  config: {}
});

app.mount('#app');