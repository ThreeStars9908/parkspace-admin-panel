/* eslint-disable */
import api from '@/utils/api';

export const ClientsModule = {
    namespaced: true,
    state: {
        clients: [],
        total_client: null,
        new_client: null,
        selected_client: {},
        selected_client_car: {},
        selected_client_payment: {},
        client_address: {},
    },

    getters: {

    },

    mutations: {
        Add_Client: (state, data) => {
            state.clients.unshift(data);
            state.total_client ++;
            state.new_client ++;
        },
        Update_Client: (state, data) => {
            let index = state.clients.findIndex((c) => c.id == data.id);
            state.clients[index] = data;
        },
        Delete_Client: (state, id) => {
            let index = state.clients.findIndex((c) => c.id == id);
            state.clients.splice(index, 1);
        },
        Select_Client: (state, data) => {
            data.status = (data.status == '1' ? true : false);
            state.selected_client = data;
        },
        Get_All_Clients: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.total_client = data.length;
            const current = new Date();
            state.new_client = 0;
            data.forEach(element => {
                const created = new Date(element.created_at);
                if(Math.floor((current - created) / (1000 * 24 * 60 * 60)) <= 7)
                    state.new_client ++;
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
        Add_ClientPayment: (state, data) => {
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
    },

    actions: {
        Add_Client: async (context, data) => {
            await api.post('/api/auth/admin/clients', data)
            .then(res => {
                context.commit('Add_Client', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Client: async (context, data) => {
            await api.put(`/api/auth/admin/clients/${data.id}`, data)
            .then(res => {
                context.commit('Update_Client', data);
            })
            .catch(err => {
                console.log(err.errors);
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
                console.log(err.errors);
            });
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
    }
}