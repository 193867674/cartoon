import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.use(Vuex)

const state =  {
    img: "https://cdn.mangaeden.com/mangasimg/", //图片显示前缀
    manga:[], //所有漫画
    likes: [], //喜欢推荐
    hots: [], //最热推荐
    categorys: [], //分类列表
    carmes: {}, //漫画信息
    cartoons: [], //漫画内容
    caricatures: {},
    clscar: []
}

const mutations =  {
    // 所有漫画
    save(state, data) {
        state.manga = data
    },
    caricatureMessage(state, data) {
        state.carmes = data
    },
    // 漫画页面
    cart(state, data) {
        state.cartoons = data.reverse()
        // eslint-disable-next-line
        console.log(state.carmes)
    },
    // 漫画信息
    carcat(state, data) {
        state.caricatures = data
    },
    // 猜你喜欢
    like(state) {
        for (let index = 0; index < state.manga.length; index++) {
            state.likes.push(state.manga[index])
            if (index === 5) {
                return
            }
        }
    },
    // 最热推荐
    hot(state) {
        for (let i = 0; i < state.manga.length; i++) {
            state.hots.push(state.manga[Math.floor(Math.random() * state.manga.length)])
            if (i === 3) {
                return
            }
        }
    },
    // 分类详情
    cateGory(state) {
        var arr = []
        for (let index = 0; index < state.manga.length; index++) {
            arr.push(state.manga[index].c)
        }
        state.categorys = Array.from(new Set([].concat.apply([], arr)))
    },
    // 分类内容
    classifiedComics(state, e) {
        state.clscar = []
        for (let index = 0; index < state.manga.length; index++) {
            if (state.manga[index].c.indexOf(e) != -1) {
                state.clscar.push(state.manga[index])
            }
        }
    },
    // 查找漫画
    findComics(state, e) {
        state.clscar = []
        for (let index = 0; index < state.manga.length; index++) {
            if (state.manga[index].t.toUpperCase().indexOf(e.toUpperCase()) != -1) {
                state.clscar.push(state.manga[index])
            }
        }
    }
}

const actions = {
    // 获取所有漫画
    saveget(context) {
        axios.get('https://www.mangaeden.com/api/list/0/').then((res) => {
            context.commit('save',res.data.manga)
            context.commit('like')
            context.commit('hot')
            context.commit('cateGory')
        })
    },
    // 获取漫画信息
    carGet(context, id) {
        axios.get('https://www.mangaeden.com/api/manga/' + id + '/').then((res) => {
            context.commit('caricatureMessage', res.data)
        })
    },
    // 获取漫画内容
    cartoonGet(context, id) {
        context.commit('cart', [])
        axios.get('https://www.mangaeden.com/api/chapter/' + id + '/').then(res => {
            context.commit('cart', res.data.images)
        })
    }
}

const store = new Vuex.Store( {
    state, 
    mutations,
    actions
})

export default store