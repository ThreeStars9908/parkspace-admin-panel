/* eslint-disable */

import api from '@/utils/api';

export const SupportsModule = {
    namespaced: true,
    state: {
        supports: {},
        selected_support: {},
    },
    getters: {
        Get_SupportsData: state => {
            return state.supports;
        },
    },

    mutations: {
        Set_SupportsData: (state, data) => {
            data.forEach((element, index) => {
                data[index].status = (element.status ? true: false);
            });
            data.sort((a, b) => b.id - a.id);
            console.log(data);
            state.supports = data;
        },
        Select_SupportData: (state, data) => {
            state.selected_support = data;
        },
        Enable_SupportData: (state, data) => {
            let index = state.supports.findIndex((c) => c.id == data.id);
            state.supports[index].status = data.status;
        },
    },
    
    actions: {
        Show_SupportsData: async (context) => {
            await api.get('/api/support/')
            .then(res => {
                context.commit('Set_SupportsData', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Enable_SupportData: async (context, data) => {
            await api.put(`/api/support/${data.id}`, data)
            .then( res => {
                context.commit('Enable_SupportData', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            })
        },
        Select_SupportData: async (context, data) => {
            context.commit('Select_SupportData', data);
        },
    },
};