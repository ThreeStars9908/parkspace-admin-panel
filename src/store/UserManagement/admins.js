/* eslint-disable */
import api from '@/utils/api';

export const AdminsModule = {
    namespaced: true,
    state: {
        admins: [],
        selected_admin: {},
        menus: [],
        usertypes: [],
        selected_usertype: {},
    },

    mutations: {
        Add_Admin: (state, data) => {
            state.admins.unshift(data);
        },
        Get_All_Admins: (state, data) => {
            data.sort((a,b) => b.id - a.id);
            state.admins = data;
            data.forEach((element, index) => {
                state.admins[index].status = (element.status == "1" ? true: false);
            });
            console.log(state.admins);
        },
        Edit_Admin: (state, data) => {
            let index = state.admins.findIndex((c) => c.id == data.id);
            state.admins[index] = data;
        },
        Delete_Admin: (state, id) => {
            let index = state.admins.findIndex((c) => c.id == id);
            state.admins.splice(index, 1);
        },
        Selected_Admin: (state, data) => {
            state.selected_admin = data;
        },
        Get_Menus: (state, data) => {
            data.forEach((element, index) => {
                data[index].enable = true;
            });
            state.menus = data;
        },
        Create_NewUsertypes: (state, data) => {
            data.admins = '';
            state.admins.forEach((val, id) => {
                data.admins += val.name;
                if(id + 1 < state.admins.length)
                    data.admins += ',';
            });
            state.usertypes.push(data);
        },
        Get_Usertypes: (state, data) => {
            data.forEach((element, index) => {
                data[index].enable = (element.enable == 'true' ? true: false);
            });
            state.usertypes = data;
        },
        Delete_Usertype: (state, id) => {
            let index = state.usertypes.findIndex((c) => c.id == id);
            state.usertypes.splice(index, 1);
        },
        Select_Usertype: (state, data) => {
            state.selected_usertype = data;
            let enabled_pages = data.selected.split(',');
            state.menus.forEach((ele, index) => {
                state.menus[index].enable = false;
            });
            enabled_pages.forEach(val => {
                state.menus[val - 1].enable = true;
            });
        },
        Update_Usertype: (state, data) => {
            let index = state.usertypes.findIndex((c) => c.id == id);
            state.usertypes[index] = data;
        }
    },

    actions: {
        Add_Admin: async (context, data) => {
            await api.post('/api/auth/admin/create', data)
            .then(res => {
                context.commit('Add_Admin', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Edit_Admin: async (context, data) => {
            await api.put(`/api/auth/admin/${data.id}`, data)
            .then(res => {
                context.commit('Edit_Admin', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Delete_Admin: async (context, id) => {
            await api.delete(`/api/auth/admin/${id}`)
            .then(res => {
                context.commit('Delete_Admin', id);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Selected_Admin: async (context, data) => {
            context.commit('Selected_Admin', data);
        },
        Change_Status_Admin: async (context, data) => {
            await api.put(`/api/auth/admin/enable/${data.id}`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Get_All_Admins: async (context) => {
            await api.get('/api/auth/admin/all')
            .then(res => {
                context.commit('Get_All_Admins', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Get_Menus: async (context) => {
            await api.get('/api/auth/admin/menus')
            .then(res => {
                context.commit('Get_Menus', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Create_NewUsertypes: async (context, data) => {
            await api.post('/api/auth/admin/usertypes', data)
            .then(res => {
                context.commit('Create_NewUsertypes', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Get_Usertypes: async (context, data) => {
            await api.get('/api/auth/admin/usertypes')
            .then(res => {
                context.commit('Get_Usertypes', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Delete_Usertype: async (context, id) => {
            await api.delete(`/api/auth/admin/usertypes/${id}`)
            .then(res => {
                context.commit('Delete_Usertype', id);
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Selete_Usertype: async (context, data) => {
            context.commit('Select_Usertype', data);
        },
        Enable_Usertype: async (context, data) => {
            await api.put(`/api/auth/admin/usertypes/${data.id}/enable`, data)
            .then(res => {
                console.log(res.data.message);
            })
            .catch(err => {
                console.log(err.errors);
            });
        },
        Update_Usertype: async (context, data) => {
            await api.put(`/api/auth/admin/usertypes/${data.id}`, data)
            .then(res => {
                context.commit('Update_Usertype', res.data);
            })
            .catch(err => {
                console.log(err.errors);
            });
        }
    }
}