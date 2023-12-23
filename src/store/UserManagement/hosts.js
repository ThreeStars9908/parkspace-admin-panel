/* eslint-disable */
import api from '@/utils/api';

export const HostsModule = {
    namespaced: true,
    state: {
        hosts: [],
        total_host: null,
        new_host: null,
        selected_host: {},
    },

    getters: {

    },

    mutations: {
        Add_Host: (state, data) => {
            state.hosts.unshift(data);
            state.total_host ++;
            state.new_host ++;
        },
        Update_Host: (state, data) => {
            let index = state.hosts.findIndex((c) => c.id == data.id);
            state.hosts[index] = data;
        },
        Delete_Host: (state, id) => {
            let index = state.hosts.findIndex((c) => c.id == id);
            state.hosts.splice(index, 1);
        },
        Select_Host: (state, data) => {
            state.selected_host = data;
        },
        Get_All_Hosts: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.total_host = data.length;
            const current = new Date();
            state.new_host = 0;
            data.forEach((element, index) => {
                data[index].status = (element.status ? true: false);
                const created = new Date(element.created_at);
                if(Math.floor((current - created) / (1000 * 24 * 60 * 60)) <= 7)
                    state.new_host ++;
            });
            state.hosts = data;
        },
    },

    actions: {
        Add_Host: async (context, data) => {
            const formData = new FormData();
            formData.append("file", data.dni_file);
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("role", data.role);
            formData.append("password", data.password);
            
            await api.post('/api/auth/admin/hosts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                context.commit('Add_Host', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Host: async (context, data) => {
            const formData = new FormData();
            formData.append("file", data.dni_file);
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("role", data.role);

            await api.put(`/api/auth/admin/hosts/${data.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                context.commit('Update_Host', data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Delete_Host: async (context, id) => {
            await api.delete(`/api/auth/admin/hosts/${id}`)
            .then(res => {
                context.commit('Delete_Host', id);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Select_Host: async (context, data) => {
            context.commit('Select_Host', data);
        },
        Get_Hosts: async (context) => {
            await api.get('/api/auth/admin/hosts')
            .then(res => {
                context.commit('Get_All_Hosts', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Enable_Host: async (context, data) => {
            await api.put(`/api/auth/admin/hosts/enable/${data.id}`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Change_HostPassword: async (context, data) => {
            await api.put(`/api/auth/admin/hosts/change_password/${data.id}`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
    }
}