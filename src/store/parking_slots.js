/* eslint-disable */

import api from '@/utils/api';

export const ParkingSlotsModule = {
    namespaced: true,
    state: {
        parking_slotsAll: {},
        parking_slots: {},
        parking_slotsbyHost: {},
        vehicle_sizes: {},
        facilities: {},
        
        facilities_def: [
            'charging',
            'video_monitoring',
            'disabled_parking',
            'overnight',
            'covered_roof',
        ],
        vehicle_size_def: [
            'micro',
            'hatchback',
            'suv',
            'pickup',
            'minivan',
            'van',
            'compervan',
            'truck',
            'big_truck',
            'motor_cycle',
        ],
        vehicle_size_list: [
            'Micro',
            'Hatchback',
            'SUV',
            'Pickup',
            'Minivan',
            'Van',
            'Compervan',
            'Truck',
            'Big Truck',
            'Moto cycle',
        ],
    },

    mutations: {
        Set_ParkingSlots: (state, data) => {
            state.parking_slots = data;
        },
        ParkingSlotsbyHost: (state, id) => {
            let data = [];
            console.log(state.parking_slots.parkingSlots);
            if(state.parking_slots.parkingSlots) {
                state.parking_slots.parkingSlots.forEach(element => {
                    if(element.userId == id) {
                        if(typeof element.facility_offer === 'string')
                            element.facility_offer = JSON.parse(element.facility_offer);
                        if(typeof element.vehicle_size === 'string')
                            element.vehicle_size = JSON.parse(element.vehicle_size);
                        if(typeof element.payment_method === 'string')
                            element.payment_method = JSON.parse(element.payment_method);
                        if(typeof element.images === 'string')
                            element.images = JSON.parse(element.images);
                        const prices = [
                            {price: 0, time: 'monthly', type: 1},
                            {price: 0, time: 'weekend', type: 1},
                            {price: 0, time: 'daily', type: 1},
                        ];
                        element.prices.forEach((price, id) => {
                            if(price.time == 'monthly')
                                prices[0] = price, prices[0].type = 0;
                            if(price.time == 'weekend')
                                prices[1] = price, prices[1].type = 0;
                            if(price.time == 'daily')
                                prices[2] = price, prices[2].type = 0;
                        });
                        element.prices = prices;
                        data.push(element);
                    }
                });
            }
            state.parking_slotsbyHost = data;
        },
        Set_Vehicle_Sizes: (state, data) => {
            state.vehicle_sizes = data;
        },
        Set_Facilities: (state, data) => {
            state.facilities = data;
        },
        ParkingSlotsbyId: (state, data) => {

        },
        Get_AllParkingSlots: (state, data) => {
            data.forEach((element, index) => {
                data[index].status = (element.status == 'approved' ? true: false);
            });
            console.log(data);
            state.parking_slotsAll = data;
        },
        Enable_ParkingSlots: (state, data) => {
            let index = state.parking_slotsAll.findIndex((c) => c.id == data.id);
            state.parking_slotsAll[index].status = (data.status == 'approved' ? true: false);
        },
        Remove_ParkingSlots: (state, data) => {
            let index = state.parking_slotsAll.findIndex((c) => c.id == data.id);
            state.parking_slotsAll.splice(index, 1);
        },
        Edit_ParkingSlots: (state, data) => {
            let index = state.parking_slotsAll.findIndex((c) => c.id == data.id);
            const prices = [];
            if(data.prices.allow_daily_rent)
                prices[0] = ({type: 0, price: data.prices.daily_rent_price, time: 'daily'});
            else
                prices[0] = ({type: 1, price: data.prices.daily_rent_price, time: 'daily'});
            if(data.prices.allow_weekend_fee)
                prices[1] = ({type: 0, price: data.prices.weekend_fee_price, time: 'weekend'});
            else
                prices[1] = ({type: 1, price: data.prices.weekend_fee_price, time: 'weekend'});
            if(data.prices.allow_monthly_rent)
                prices[2] =({type: 0, price: data.prices.monthly_rent_price, time: 'monthly'});
            else
                prices[2] =({type: 1, price: data.prices.monthly_rent_price, time: 'monthly'});
            console.log(prices);
            data.prices = prices;
            state.parking_slotsAll[index] = data;
        },
    },
    
    actions: {
        Show_All_ParkingSlots: async (context) => {
            await api.get('/api/parking_slot/admin')
            .then(res => {
                context.commit('Get_AllParkingSlots', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Enable_ParkingSlots: async (context, data) => {
            data.status = (data.status ? 'approved': 'rejected');
            await api.put(`/api/parking_slot/enable/${data.id}`, data)
            .then(res => {
                context.commit('Enable_ParkingSlots', data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Delete_ParkingSlots: async (context, data) => {
            await api.delete(`/api/parking_slot/${data.id}`)
            .then(res => {
                context.commit('Remove_ParkingSlots', data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Edit_ParkingSlots: async (context, data) => {
            await api.put(`/api/parking_slot/admin/${data.id}`, data)
            .then(res => {
                context.commit('Edit_ParkingSlots', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Show_ParkingSlots: async (context) => {
            await api.get('/api/parking_slot/')
            .then(res => {
                context.commit('Set_ParkingSlots', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        ParkingSlotsbyHost: async (context, id) => {
            context.commit('ParkingSlotsbyHost', id);
        },
        ParkingSlotbyId: async (context, id) => {
            await api.get(`/api/parking_slot/my_slot/${id}`)
            .then(res => {
                console.log(res.data);
                context.commit('ParkingSlotsbyId', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
    },
};