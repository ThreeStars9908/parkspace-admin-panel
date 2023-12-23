import api from '../utils/api';
import router from '../router';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    adminData: {},
    errors: null,
    success: null,
};

export const AuthModule = {
    namespaced: true,
    state: initialState,

    getters: {
        Get_Token: state => {
            return state.token;
        },
        Admin_Authenticated: state => {
            return state.isAuthenticated;
        },
        Get_Admin_Data: state => {
            return state.adminData;
        },
    },

    mutations: {
        Set_Token: (state, payload) => {
            state.errors = null;
            state.token = payload;
            state.isAuthenticated = true;
        },
        Log_Out: state => {
            state.token = null;
            state.isAuthenticated = false;
            state.adminData = null;
        },
        Set_Admin_Data: (state, payload) => {
            state.isAuthenticated = true;
            state.adminData = payload;
        },
        Edit_Admin_Data: (state, data) => {
            state.adminData = data;
        },
        Get_Errors: (state, err) => {
            state.success = null;
            state.errors = err;
        },
        Get_Success: (state, suc) => {
            state.errors = null;
            state.success = suc;
        },
    },

    actions: {
        Login: async (context, payload) => {
            await api.post('/jwt', payload)
            .then(res => {
                context.commit('Set_Token', res.data.token);

                context.commit('Get_Success', 'Login Success!');
                setAuthToken(res.data.token);
                router.push({ name: 'dashboard' });
            })
            .catch(err => {
                context.commit('Get_Errors', err.response.data.errors[0]);
            });
        },
        Get_Admin_Data: async (context) => {
            await api.get('/api/auth/admin')
            .then(res => {
                context.commit('Set_Admin_Data', res.data);
            })
            .catch(err => {
                console.log(err);
            });
        },
        Update_Admin_Data: async (context, data) => {
            await api.put('/api/auth/admin', data)
            .then(res => {
                context.commit('Edit_Admin_Data', res.data);
                context.commit('Get_Success', 'User data changed!');
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Change_Password: async (context, data) => {
            await api.put('/api/auth/admin/change_password/', data)
            .then(res => {
                context.commit('Get_Success', res.data.message);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Change_Language: async (context, data) => {
            await api.put(`/api/languages/${data.id}`, data)
            .then(res => {
                context.commit('Edit_Admin_Data', data);
                context.commit('Get_Success', res.data.message);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Change_Currency: async (context, data) => {
            await api.put(`/api/currencies/${data.id}`, data)
            .then(res => {
                context.commit('Edit_Admin_Data', data);
                context.commit('Get_Success', res.data.message);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Logout: (context) => {
            context.commit('Log_Out');
            setAuthToken(null);
        },
    },
};