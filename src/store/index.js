import Vue from 'vue'
import Vuex from 'vuex'
import todoApi from '../services/todo';

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        hasErrors: false,
        errorMessage: '',
        loading: false,
        uuid: false,
        name: '',
        todoListOpen: false,
        todoListComplete: false
    },
    mutations: {
        errors(state, errors) {
            state.errorMessage = errors.errors.message;
            state.hasErrors = true;
            state.loading = false;
        },
        loading(state) {
            state.hasErrors = false;
            state.loading = true;
        },
        unloading(state) {
            state.loading = false;
        },
        clearList(state){
            state.todoListOpen = false;
            state.todoListComplete = false;
        },
        setUuid(state, uuid){
            state.uuid = uuid;
        },
        setName(state, name){
            state.name = name;
        },
        setOpenList(state, list){
            state.todoListOpen = list;
        },
        setCompleteList(state, list){
            state.todoListComplete = list;
        }
    },
    actions: {
        getItemOpenList: async ({ commit }) => {
            commit("loading");  

            try {
                let response = await todoApi.getItemOpenList();

                commit("unloading");

                if( response ){
                    commit('setOpenList', response.items);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        },
        getItemCompleteList: async ({ commit }) => {
            commit("loading");  

            try {
                let response = await todoApi.getItemCompleteList();

                commit("unloading");

                if( response ){
                    commit('setCompleteList', response.items);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        },
        markComplete: async ({ state, commit, dispatch }) => {
            commit("loading");  

            try {
                let response = await todoApi.markItem(state.uuid, 'complete');

                commit("unloading");

                if( response ){
                    dispatch('getItemOpenList');
                    dispatch('getItemCompleteList');
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        },
        markOpen: async ({ state, commit, dispatch }) => {
            commit("loading");  

            try {
                let response = await todoApi.markItem(state.uuid, 'open');

                commit("unloading");

                if( response ){
                    dispatch('getItemOpenList');
                    dispatch('getItemCompleteList');
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        },
        addItem: async ({ state, commit, dispatch }) => {
            commit("loading");  

            try {
                let response = await todoApi.addItem(state.name);

                commit("unloading");

                if( response ){
                    dispatch('getItemOpenList');
                    dispatch('getItemCompleteList');
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        },
        deleteItem: async ({ state, commit, dispatch }) => {
            commit("loading");  

            try {
                let response = await todoApi.deleteItem(state.uuid);

                commit("unloading");

                if( response ){
                    dispatch('getItemOpenList');
                    dispatch('getItemCompleteList');
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        }
    }
});

