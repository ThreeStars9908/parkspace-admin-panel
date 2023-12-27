/* eslint-disable */
import api from '@/utils/api';
import axios from 'axios';

export const ClientsModule = {
    namespaced: true,
    state: {
        clients: [],
        total_client: null,
        new_client: null,
        selected_client: {},
        selected_client_car: {},
        selected_client_payment: {},
        selected_client_address: [],
        selected_client_address_list: [],
        client_address: {},
        geo_address_list: [],
    },

    getters: {

    },

    mutations: {
        Add_Client: (state, data) => {
            if(data.address) {
                const address = data.address;
                address.position = JSON.parse(address.position);
                data.address = [];
                data.address.push(address);
                data.edit_address = {
                    id: '',
                    address: '',
                    position: {
                        latitude: '',
                        longitude: '',
                    }
                };
                data.edit_address.id = data.address[0].id;
            }
            state.clients.unshift(data);
            state.total_client ++;
            state.new_client ++;
        },
        Update_Client: (state, data) => {
            console.log(data);
            if(data.address) {
                const address = data.address;
                address.position = JSON.parse(address.position);
                data.address = [];
                data.address.push(address);
                data.edit_address = {
                    id: '',
                    address: '',
                    position: {
                        latitude: '',
                        longitude: '',
                    }
                };
                data.edit_address.id = data.address[0].id;
            }
            let index = state.clients.findIndex((c) => c.id == data.id);
            state.clients[index] = data;
        },
        Delete_Client: (state, id) => {
            let index = state.clients.findIndex((c) => c.id == id);
            state.clients.splice(index, 1);
        },
        Select_Client: (state, data) => {
            data.status = (data.status == '1' ? true : false);
            state.selected_client_address.splice(0, state.selected_client_address.length);
            state.selected_client_address_list.splice(0, state.selected_client_address_list.length);
            state.selected_client = data;
        },
        Get_All_Clients: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.total_client = data.length;
            const current = new Date();
            state.new_client = 0;
            data.forEach((element, index) => {
                const created = new Date(element.created_at);
                if(Math.floor((current - created) / (1000 * 24 * 60 * 60)) <= 7)
                    state.new_client ++;
                if(data[index].address.length) {
                    data[index].address.forEach((address, id) => {
                        data[index].address[id].position = JSON.parse(data[index].address[id].position);
                    });
                }
                data[index].edit_address = {
                    id: '',
                    address: '',
                    position: {
                        latitude: '',
                        longitude: '',
                    }
                };
                if(data[index].address.length) {
                    data[index].edit_address.id = data[index].address[0].id;
                }
            });
            state.clients = data;
        },
        Add_Client_Car: (state, data) => {
            state.selected_client_car.unshift(data);
        },
        Update_Client_Car: (state, data) => {
            let index = state.selected_client_car.findIndex((c) => c.id == data.id);
            state.selected_client_car[index] = data;
        },
        Remove_Client_Car: (state, data) => {
            let index = state.selected_client_car.findIndex((c) => c.id == data.id);
            state.selected_client_car.splice(index, 1);
        },
        Get_Client_car: (state, data) => {
            state.selected_client_car = data;
        },
        Get_Selected_ClientAddress: (state, data) => {
            if(state.selected_client_address) {
                state.selected_client.edit_address.address = data;
            }
            state.selected_client_address.push(data);
        },
        Get_Selected_ClientAddressList: (state, data) => {
            console.log(data);
            state.selected_client_address_list.unshift(data);
        },
        Add_ClientPayment: (state, data) => {
            console.log(data);
            state.selected_client_payment.unshift(data);
        },
        Update_ClientPayment: (state, data) => {
            let index = state.selected_client_payment.findIndex((c) => c.id == data.id);
            state.selected_client_payment[index] = data;
        },
        Remove_ClientPayment: (state, data) => {
            let index = state.selected_client_payment.findIndex((c) => c.id == data.id);
            state.selected_client_payment.splice(index, 1);
        },
        Get_ClientPayment: (state, data) => {
            state.selected_client_payment = data;
        },
        Get_Client_Addresss: (state, data) => {
            state.client_address = data;
        },
        Get_GeoAddress: (state, data) => {
            state.geo_address_list = data;
        },
        Format_GeoAddress: (state) => {
            state.geo_address_list.splice(0, state.geo_address_list.length);
        },
        Add_Client_Address: (state, data) => {
            const address = {
                address: data,
                address_name: '',
            }
            state.selected_client_address_list.unshift(address);
        },
        Save_Client_Address: (state, data) => {
            // const address = {
            //     address: data,
            //     address_name: '',
            // }
            console.log(data);
            // let index = state.selected_client_address_list.findIndex((c) => c.address.id == data.address.id);
            // console.log(index);
            // state.selected_client_address_list[index] = data;
        },
        Delete_Client_Address: (state, data) => {
            let index = state.selected_client_address_list.findIndex((c) => c.address.id == data.id);
            state.selected_client_address_list.splice(index, 1);
        }
    },

    actions: {
        Add_Client: async (context, data) => {
            await api.post('/api/auth/admin/clients', data)
            .then(res => {
                context.commit('Add_Client', res.data.user);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Client: async (context, data) => {
            await api.put(`/api/auth/admin/clients/${data.id}`, data)
            .then(res => {
                context.commit('Update_Client', res.data.user);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Delete_Client: async (context, id) => {
            await api.delete(`/api/auth/admin/clients/${id}`)
            .then(res => {
                context.commit('Delete_Client', id);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Select_Client: async (context, data) => {
            context.commit('Select_Client', data);
            data.address.sort((a, b) => a.id - b.id);
            if(data.address.length) {
                data.address.forEach((address, id) => {
                    axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${data.address[id].position.latitude}&lon=${data.address[id].position.longitude}&apiKey=b36bcb8fe8234991b2878174abd2592f`)
                    .then(res => {
                        context.commit('Get_Selected_ClientAddress', res.data.features[0].properties.formatted);
                        const sdata = {
                            address_name: res.data.features[0].properties.formatted,
                            address: address,
                        }
                        context.commit('Get_Selected_ClientAddressList', sdata);
                    })
                    .catch(err => {
                        console.log(err.errors);
                    });
                });
            }
            await api.get(`/api/auth/admin/clients/${data.id}/car`)
            .then(res => {
                context.commit('Get_Client_car', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
            await api.get(`/api/auth/admin/clients/${data.id}/payment`)
            .then(res => {
                context.commit('Get_ClientPayment', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Get_Clients: async (context) => {
            await api.get('/api/auth/admin/clients')
            .then(res => {
                context.commit('Get_All_Clients', res.data);
            })
            .catch(err => {
                console.log(err);
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
        Get_Client_Address: async (context) => {
            await api.get('/api/auth/address/myAddress')
            .then(res => {
                context.commit('Get_Client_Addresss', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Change_ClientPassword: async (context, data) => {
            await api.put(`/api/auth/admin/clients/change_password/${data.id}`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        EnableStatus: async (context, data) => {
            await api.put(`/api/auth/admin/clients/enable/${data.id}`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Add_Client_Car: async (context, data) => {
            await api.post(`/api/auth/admin/clients/${data.id}/car`, data)
            .then(res => {
                context.commit('Add_Client_Car', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Client_Car: async (context, data) => {
            await api.put(`/api/auth/admin/clients/${data.userId}/${data.id}/`, data)
            .then(res => {
                context.commit('Update_Client_Car', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Remove_Client_Car: async (context, data) => {
            await api.delete(`/api/auth/admin/clients/${data.userId}/${data.id}/`)
            .then(res => {
                context.commit('Remove_Client_Car', data);
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Add_ClientPayment: async (context, data) => {
            await api.post(`/api/auth/admin/clients/${data.id}/payment`, data)
            .then(res => {
                context.commit('Add_ClientPayment', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_ClientPayment: async (context, data) => {
            await api.put(`/api/auth/admin/clients/payment/${data.userId}/${data.id}/`, data)
            .then(res => {
                context.commit('Update_ClientPayment', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Delete_ClientPayment: async (context, data) => {
            await api.delete(`/api/auth/admin/clients/payment/${data.userId}/${data.id}/`)
            .then(res => {
                context.commit('Remove_ClientPayment', data);
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        
        Add_Client_Address: async (context, data) => {
            await api.post(`/api/auth/admin/clients/${data.id}/address`, data)
            .then(res => {
                context.commit('Add_Client_Address', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Save_Client_Address: async (context, data) => {
            await api.put(`/api/auth/admin/clients/address/${data.address.userId}/${data.address.id}`, data.address)
            .then(res => {
                context.commit('Save_Client_Address', data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Delete_Client_Address: async (context ,data) => {
            await api.delete(`/api/auth/admin/clients/address/${data.userId}/${data.id}`)
            .then(res => {
                context.commit('Delete_Client_Address', data);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}