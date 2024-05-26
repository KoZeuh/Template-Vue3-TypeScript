import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/main.scss'
import { FontAwesomeIcon } from './plugins/fontAwesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
