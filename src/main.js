import { createApp } from 'vue'
import ViewUIlus from 'view-ui-plus'
import App from './App.vue'

import 'view-ui-plus/dist/styles/viewuiplus.css'
import { router } from './router/router';

const app = createApp(App);

app.use(ViewUIlus).use(router)
.mount('#app');
