import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: {
            id: -1,
            account: 'root',
            name: 'root',
            email: 'root@example.com',
            avatar: '',
            role: 'admin',
        },
        isAuthenticated: true,
        token: '0516'
    },
    getters: {},
    mutations: {
        setCurrentUser(state, currentUser) {
            state.currentUser = {
                ...state.currentUser,
                ...currentUser
            }
            state.isAuthenticated = true
            state.token = localStorage.getItem('token')
        },
        revokeAuthentication(state) {
            state.currentUser = {}
            state.isAuthenticated = false
            localStorage.removeItem('token')
        }
    },
    actions: {
        // add fetch API 
        // add fetch API 
        // add fetch API 
    },
    modules: {}
})