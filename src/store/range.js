/* eslint-disable */

import api from '@/utils/api';
import axios from 'axios';

export const RangesModule = {
    namespaced: true,
    state: {
        ranges: {},
        geo_address_list: [],
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
        Get_GeoAddress: (state, data) => {
            state.geo_address_list = data;
        },
        Format_GeoAddress: (state) => {
            state.geo_address_list.splice(0, state.geo_address_list.length);
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
        Get_GeoAddress: async (context, data) => {
            await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${data}&format=json&apiKey=b36bcb8fe8234991b2878174abd2592f`)
            .then(res => {
                context.commit('Get_GeoAddress', res.data.results);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Format_GeoAddress: async (context) => {
            context.commit('Format_GeoAddress');
        },
    },
};