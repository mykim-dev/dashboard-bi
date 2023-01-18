import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/styles/index.scss'

library.add(far, fas, fab)

const app = createApp(App)

app.use(store)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
