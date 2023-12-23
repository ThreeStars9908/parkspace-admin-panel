import api from '../utils/api';

export const ConfigurationModule = {
    namespaced: true,
    state: {
        languages: {},
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
        }
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
    }
}