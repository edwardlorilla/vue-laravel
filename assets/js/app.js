require('./bootstrap');

window.Vue = require('vue')
import NProgress from 'nprogress';
import ElementUI from 'element-ui';;
import Auth from './components/Plugin/Auth'
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Auth);
Vue.component('pre-loader', require('./components/Utilities/Preloader.vue'));
const router = new VueRouter({
    mode:'history',
    base: '/dashboard',
    routes:[
        {path:'/', component: require('./components/Layout/Wrapper.vue') , name:'Dashboard'},
    ]
});
router.beforeResolve((to, from, next) => {
    if (to.path) {
        NProgress.start()
    }
    next()
});

router.afterEach(() => {
    NProgress.done()
});
const app = new Vue({
    router,
    data(){
        return {
            store: {
                state: {
                    loading: false
                },
                mutations:{},
                dispatch(mutation, data = {}){
                    this.mutations[mutation](this.state, data)
                }
            }
        }
    },
    render: h => h(require('./components/App.vue'))
}).$mount('#app');
