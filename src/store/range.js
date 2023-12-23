/* eslint-disable */

import api from '@/utils/api';

export const RangesModule = {
    namespaced: true,
    state: {
        ranges: {},
    },
    getters: {
        Get_Ranges: state => {
            return state.ranges;
        },
    },

    mutations: {
        Add_Range: (state, data) => {
            state.ranges.push(data);
        },
        Get_Ranges: (state, data) => {
            state.ranges = data;
        },
        Edit_Range: (state, data) => {
            let index = state.ranges.findIndex((c) => c.id == data.id);
            state.ranges[index] = data;
        },
        Delete_Range: (state, id) => {
            let index = state.ranges.findIndex((c) => c.id == id);
            state.ranges.splice(index, 1);
        },
    },
    
    actions: {
        Show_Ranges: async (context) => {
            await api.get('/api/range/')
            .then(res => {
                context.commit('Get_Ranges', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Add_Range: async (context, data) => {
            await api.post('/api/range/', data)
            .then(res => {
                context.commit('Add_Range', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Range: async (context, data) => {
            await api.put(`/api/range/${data.id}`, data)
            .then(res => {
                context.commit('Edit_Range', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Remove_Range: async (context, id) => {
            await api.delete(`/api/range/${id}`)
            .then(res => {
                context.commit('Delete_Range', id);
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
    },
};