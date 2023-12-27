import api from '../utils/api';

export const ConfigurationModule = {
    namespaced: true,
    state: {
        languages: {},
        selected_language: 'en',
        selected_currency: 'usd',
        currencies: {},
        errors: null,
        success: null,
    },

    mutations: {
        Get_Languages: (state, data) => {
            state.languages = data;
        },
        Get_Currencies: (state, data) => {
            state.currencies = data;
        },
        Get_Errors: (state, err) => {
            state.success = null;
            state.errors = err;
        },
        Change_Language: (state, data) => {
            state.selected_language = data;
        },
        Change_Currency: (state, data) => {
            state.selected_currency = data;
        },
    },

    actions: {
        Show_Languages: async (context) => {
            await api.get('/api/languages/')
            .then(res => {
                context.commit('Get_Languages', res.data);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Show_Currencies: async (context) => {
            await api.get('/api/currencies/')
            .then(res => {
                context.commit('Get_Currencies', res.data);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Change_Language: async (context, data) => {
            context.commit('Change_Language', data);
        },
        Change_Currency: async (context, data) => {
            context.commit('Change_Currency', data);
        },
    }
}