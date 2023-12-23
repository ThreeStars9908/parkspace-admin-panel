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
    },

    mutations: {
        Set_ParkingSlots: (state, data) => {
            state.parking_slots = data;
        },
        ParkingSlotsbyHost: (state, id) => {
            let data = [];
            state.parking_slots.parkingSlots.forEach((element, index) => {
                if(element.userId == id) {
                    let str = element.facility_offer.replace(/[\[\]]/g, '').replace(/"/g, '');
                    element.facility_offer = str.split(',');
                    const index_facility = [];
                    element.facility_offer.forEach((elf) => {
                        index_facility.push(state.facilities_def.indexOf(elf));
                    });
                    str = element.vehicle_size.replace(/[\[\]]/g, '').replace(/"/g, '');
                    element.vehicle_size = str.split(',');
                    const index_vehicle = [];
                    element.vehicle_size.forEach((elv) => {
                        index_vehicle.push(state.vehicle_size_def.indexOf(elv));
                    });
                    str = element.payment_method.replace(/[\[\]]/g, '').replace(/"/g, '');
                    element.payment_method = str.split(',');
                    element.facility_offer = index_facility;
                    element.vehicle_size = index_vehicle;
                    console.log(element);
                    data.push(element);
                }
            });
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
        Show_Vehicle_Sizes: async (context) => {
            await api.get('/api/vehiclesizes')
            .then(res => {
                context.commit('Set_Vehicle_Sizes', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Show_Facilities: async (context) => {
            await api.get('/api/facilities')
            .then(res => {
                context.commit('Set_Facilities', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
    },
};