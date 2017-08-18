import Vue from 'vue'
import Router from 'vue-router'
import emailDemo from '@/components/emailDemo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'emailDemo',
        component: emailDemo
    }]
})