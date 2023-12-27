import api from '../utils/api';

export const DocumentationModule = {
    namespaced: true,
    state: {
        faqData: [],
        cancellationTermsData: {
            type: 'cancellation',
            terms_conditions: '',
        },
        termsofUseData: {
            type: 'terms_of_use',
            terms_conditions: '',
        },
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
        Set_TermsData: (state, data) => {
            if (data) {
                data.forEach(element => {
                    if(element.type == 'cancellation')
                        state.cancellationTermsData = element;
                    else if(element.type == 'terms_of_use')
                        state.termsofUseData = element;
                });
            } else {
                state.success = null;
                state.errors = 'Terms and Conditions does not exist!';
            }
        },
        Save_TermsData: (state, data) => {
            if (data) {
                if(data.type == 'cancellation')
                    state.cancellationTermsData = data;
                else if(data.type == 'terms_of_use')
                    state.termsofUseData = data;
            }
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
                context.commit('Set_TermsData', res.data);
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
        Save_TermsData: async (context, data) => {
            console.log(data);
            await api.put('/api/faq-terms/terms/', data)
            .then(res => {
                context.commit('Save_TermsData', res.data);
                context.commit('Get_Success', 'Saved!');
            })
            .catch(err => {
                context.commit('Get_Errors', err.errors);
            });
        },
    }
}