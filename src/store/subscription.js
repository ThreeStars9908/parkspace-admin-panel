/* eslint-disable */

import api from '@/utils/api';

export const SubscriptionsModule = {
    namespaced: true,
    state: {
        subscriptions: {},
        active: 0,
        cashback: {},
    },
    
    getters: {
        Get_Subscriptions: state => {
            return state.subscriptions;
        },
    },

    mutations: {
        Get_Subscriptions: (state, data) => {
            state.active = 0;
            data.forEach(element => {
                if(element.status === 'Ongoing')
                    state.active ++;
            });
            state.subscriptions = data;
        },
        Get_Cashback: (state, data) => {
            state.cashback = data;
        },
    },

    actions: {
        Show_Subscriptions: async (context) => {
            await api.get('/api/subscriptions/')
            .then(res => {
                context.commit('Get_Subscriptions', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Show_Cashback: async (context) => {
            await api.get('/api/cashback/')
            .then(res => {
                context.commit('Get_Cashback', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
    }
}