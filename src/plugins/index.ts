import vuetify from '../utils/vuetify';
import pinia from '../utils/pinia'
import router from '../router'

import type { App } from 'vue'

export function registerPlugins(app: App) {
    app
        .use(vuetify)
        .use(router)
        .use(pinia)
}
