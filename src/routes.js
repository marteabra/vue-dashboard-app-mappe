import Home from './views/Home.vue'
import Component from './views/Component.vue'

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'component', path: '/:component_id', component: Component }
]