import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from '@meforma/vue-toaster';
import DisableAutocomplete from 'vue-disable-autocomplete';

createApp(App)
    .use(store)
    .use(router)
    .use(Toaster, {
        position: 'bottom-right'
    })
    .use(DisableAutocomplete)
    .mount('#app')
