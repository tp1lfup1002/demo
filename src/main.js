import { createApp } from 'vue';
import ViewUIlus from 'view-ui-plus';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'

import 'view-ui-plus/dist/styles/viewuiplus.css';
import { router } from './router/router';

const app = createApp(App);

app.use(ViewUIlus).use(router).use(VueAxios,axios).use(store)
.mount('#app');
