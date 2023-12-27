/* eslint-disable */

import api from '@/utils/api';

export const BookingModule = {
    namespaced: true,
    state: {
        filter_booking: [],
        all_booking: [],
        total_booking: 0,
        selected_booking: {},
        selectedUser_booking: [],
        selectedHost_booking: [],
    },
    getters: {
    },

    mutations: {
        Show_All: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.total_booking = data.length;
            state.all_booking = data;
        },
        Filter_Booking: (state, data) => {
            state.all_booking = data;
        },
        Select_Booking: (state, data) => {
            state.selected_booking = data;
        },
        Show_BookingbyClientId: (state, id) => {
            const data = [];
            state.all_booking.forEach(element => {
                if(element.userId == id)
                   data.push(element);
            });
            state.selectedUser_booking = data;
        },
        Show_BookingbyHostId: (state, id) => {
            const data = [];
            state.all_booking.forEach(element => {
                if(element.parkingSlot.user.id == id)
                    data.push(element);
            });
            state.selectedHost_booking = data;
        },
    },
    
    actions: {
        Show_Booking: async (context) => {
            await api.get('/api/booking/all')
            .then(res => {
                context.commit('Show_All', res.data.booking);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Show_BookingbyId: async (context, id) => {
            context.commit('Show_BookingbyClientId', id);
            // await api.get(`/api/parking/${id}`)
            // .then(res => {
            //     context.commit('Show_BookingbyId', res.data);
            // })
            // .catch(err => {
            //     console.log(err.errors);
            // });
        },
        Show_BookingbyHost: async (context, id) => {
            context.commit('Show_BookingbyHostId', id);
        },
        Select_Booking: async (context, data) => {
            context.commit('Select_Booking', data);
        },
        Filter_Booking: async (context, data) => {
            await api.post('/api/booking/admin/filter', data)
            .then(res => {
                console.log(res.data);
                context.commit('Filter_Booking', res.data.bookings);
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
};