import todoApi from '../services/todo';

export default {
    namespaced: true,
    state: {
        hasErrors: false,
        errorMessage: '',
        loading: false,
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
                let response = await todoApi.getItemOpenList();

                commit("unloading");

                if( response ){
                    commit('setOpenList', response.items);
                }
            } catch (errors) {
                commit("unloading");
                commit("errors", errors);
            }
        }
     }
};