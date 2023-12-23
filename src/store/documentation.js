import api from '../utils/api';

export const DocumentationModule = {
    namespaced: true,
    state: {
        faqData: [],
        cancellationTermsData: {},
        termsofUseData: {},
        errors: null,
        success: null,
    },
    
    getters: {
        Get_FaqData: state => {
            return state.faqData;
        },
        Get_CancellationTermsData: state => {
            return state.cancellationTermsData;
        },
        Get_TermsofUseData: state => {
            return state.termsofUseData;
        },
    },

    mutations: {
        Set_FaqData: (state, data) => {
            data.sort((a, b) => b.id - a.id);
            state.faqData = data;
        },
        Set_CancellationTermsData: (state, data) => {
            state.cancellationTermsData = data;
        },
        Set_TermsofUseData: (state, data) => {
            state.termsofUseData = data;
        },
        Add_FAQData: (state, data) => {
            state.faqData.unshift(data);
        },
        Update_FAQData: (state, data) => {
            let index = state.faqData.findIndex((c) => c.id == data.id);
            state.faqData[index] = data;
        },
        Remove_FAQData: (state, id) => {
            let index = state.faqData.findIndex((c) => c.id == id);
            state.faqData.splice(index, 1);
        },
        Remove_All_FAQData: (state) => {
            state.faqData.splice(0, state.faqData.length);
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
        Show_FaqData: async (context) => {
            await api.get('/api/faq-terms/faq')
            .then(res => {
                context.commit('Set_FaqData', res.data);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Show_TermsData: async (context) => {
            await api.get('/api/faq-terms/terms')
            .then(res => {
                context.commit('Set_CancellationTermsData', res.data[0]),
                context.commit('Set_TermsofUseData', res.data[1]);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Add_FAQData: async (context, data) => {
            await api.post('/api/faq-terms/faq', data)
            .then(res => {
                context.commit('Add_FAQData', res.data);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Edit_FAQData: async (context, data) => {
            await api.put(`/api/faq-terms/faq/${data.id}`, data)
            .then(res => {
                context.commit('Update_FAQData', res.data);
                context.commit('Get_Success', 'Saved!');
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Delete_FAQData: async (context, id) => {
            await api.delete(`/api/faq-terms/faq/${id}`)
            .then(res => {
                context.commit('Remove_FAQData', id);
                context.commit('Get_Success', res.data.message);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Delete_All_FAQData: async (context) => {
            await api.delete('/api/faq-terms/faq')
            .then(res => {
                context.commit('Remove_All_FAQData');
                context.commit('Get_Success', res.data.message);
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Edit_CancellationTermsData: async (context, data) => {
            await api.put(`/api/faq-terms/terms/${data.id}`, data)
            .then(res => {
                context.commit('Set_CancellationTermsData', res.data);
                context.commit('Get_Success', 'Saved!');
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
        Edit_TermsofUseData: async (context, data) => {
            await api.put(`/api/faq-terms/terms/${data.id}`, data)
            .then(res => {
                context.commit('Set_TermsofUseData', res.data);
                context.commit('Get_Success', 'Saved!');
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
    }
}