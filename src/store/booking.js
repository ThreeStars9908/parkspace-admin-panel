/* eslint-disable */

import api from '@/utils/api';

export const BookingModule = {
    namespaced: true,
    state: {
        filter_booking: [],
        all_booking: [],
        selected_booking: {},
        selectedUser_booking: [],
        selectedHost_booking: [],
    },
    getters: {
    },

    mutations: {
        Show_All: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.all_booking = data;
        },
        Filter_Booking: (state, data) => {
        //     console.log(data);
        //     state.show_booking = state.all_booking;
        //     state.show_booking.forEach((element, index) => {
        //         element.booking_time = new Date(element.booking_time);
        //         element.begin_time = new Date(element.begin_time);
        //         element.end_time = new Date(element.end_time);
        //     });
        //     const time_str_filter = ['Last 7 days', 'Last 15 days', 'Last Month', 'Last 3 months', 'Last 6 months',];
        //     const time_index_filter = ['7', '15', '30', '90', '180'];
        //     if(data.time_frame) {
        //         data.time_frame = time_index_filter[time_str_filter.indexOf(data.time_frame)];
        //         const today = new Date();
        //         state.show_booking.forEach((element, index) => {
        //             if((today - element.booking_time) / 3600 / 24 / 1000 > data.time_frame)
        //                 state.show_booking.splice(index, 1);
        //         });
        //     }
        //     if(data.status) {
        //         state.show_booking.forEach((element, index) => {
        //             if(element.status != data.status) {
        //                 state.show_booking.splice(index, 1);
        //             }
        //         });
        //     }

        //     if(data.start_date) {
        //         state.show_booking.forEach((element, index) => {
        //             if(element.booking_time < data.start_date)
        //                 state.show_booking.splice(index, 1);
        //         });
        //     }

        //     if(data.end_date) {
        //         state.show_booking.forEach((element, index) => {                
        //             if(element.booking_time > data.end_date)
        //                 state.show_booking.splice(index, 1);
        //         });
        //     }
            
        //     console.log(state.show_booking);
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
            await api.get('/api/parking/all')
            .then(res => {
                context.commit('Show_All', res.data);
            })
            .catch(err => {
                console.log(err.errors);
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
        Filter_Booking: async (context, data) => {
            console.log(data);
            context.commit('Filter_Booking', data);
        },
        Show_BookingbyHost: async (context, id) => {
            context.commit('Show_BookingbyHostId', id);
        },
        Select_Booking: async (context, data) => {
            context.commit('Select_Booking', data);
        },
    },
};