import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import enLocaleEl from 'element-ui/lib/locale/lang/en'
import viLocaleEl from 'element-ui/lib/locale/lang/vi'
import enLocale from './lang/en'
import viLocale from './lang/vi'

import './scss/element-variables.scss'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocaleEl,
    ...enLocale // Or use `Object.assign({ message: 'hello' }, enLocale)`
  },
  vi: {
    ...viLocaleEl,
    ...viLocale // Or use `Object.assign({ message: 'xin chào' }, viLocale)`
  }
}
const i18n = new VueI18n({
  locale: 'vi', // set locale
  messages // set locale messages
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
