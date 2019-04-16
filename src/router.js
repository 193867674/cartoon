import Vue from 'vue'
import Router from 'vue-router'
import Easel from './views/Easel.vue'
import Setting from './views/Setting.vue'
import Recommend from './views/Recommend.vue'
import FindComic from './views/FindComic.vue'
import Caricature from './views/Caricature.vue'
import Details from './views/second-level-views/Details.vue'
import Selections from './views/second-level-views/Selections.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/easel', name: 'easel', component: Easel},
    {path: '/', name: 'recommend', component: Recommend},
    {path: '/setting', name: 'setting', component: Setting},
    {path: '/findcomic', name: 'findcomic', component: FindComic},
    {path: '/caricature', name: 'caricature', component: Caricature,
      children: [
        {path: '/details', name: 'details', component: Details},
        {path: '/selections', name: 'selections', component: Selections},
      ],redirect: '/details'
    },
    {path: '/find', name: 'find', component:resolve => require(['./views/Find.vue'], resolve)},
    {path: '/cartoon', name: 'cartoon', component:resolve => require(['./views/Cartoon.vue'], resolve)},
    {path: '/classifiedComics', name: 'classifiedComics', component:resolve => require(['./views/Classified-Comics.vue'], resolve)},
  ],
  linkActiveClass:'active'
})
