<template>
    <div class="documentation">
        <page-header title="documentation" />

        <div class="submenu" className="mt-4">
            <div className="mr-auto">
                <div class="menu" className="font-normal flex flex-row justify-between">
                    <div className="flex flex-row justify-start">
                        <div :className="['mr-4 cursor-pointer '
                            + (this.isPage == 'FAQ' ? 'font-semibold' : '')]"
                            @click="changePage('FAQ')">
                            {{ $t('faq') }}
                        </div>
                        <div :className="['mr-4 cursor-pointer '
                            + (this.isPage == 'CancellationTerms' ? 'font-semibold' : '')]"
                            @click="changePage('CancellationTerms')">
                            {{ $t('cancellation_terms') }}
                        </div>
                        <div :className="['mr-4 cursor-pointer '
                            + (this.isPage == 'TermsofUse' ? 'font-semibold' : '')]"
                            @click="changePage('TermsofUse')">
                            {{ $t('terms_of_use') }}
                        </div>
                    </div>
                    <icon-button v-if="this.isPage === 'FAQ'" title="add_question" icon="fa fa-circle-plus" color="#F9F9F9" :mobile="isMobile"
                        @click="AddFAQ" />
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div class="title"
                        className="text-left font-semibold">
                        <span v-if="this.isPage === 'FAQ'">{{ $t('faq') }}</span>
                        <span v-if="this.isPage === 'CancellationTerms'">{{ $t('cancellation_terms') }}</span>
                        <span v-if="this.isPage === 'TermsofUse'">{{ $t('terms_of_use') }}</span>
                    </div>
                    <div class="sub-btn">
                        <div v-if="this.isPage === 'FAQ'">
                            <text-button title="delete_all" icon="fa fa-trash-can" :mobile="isMobile"
                                @click="DeleteAll" />
                        </div>
                        <div v-if="this.isPage === 'CancellationTerms'">
                            <text-button title="edit" icon="fa fa-pen" :mobile="isMobile"
                                @click="this.isCancellationEdit = true" />
                        </div>
                        <div v-if="this.isPage === 'TermsofUse'">
                            <text-button title="edit" icon="fa fa-pen" :mobile="isMobile"
                                @click="this.isTermsofUseEdit = true" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="block mt-4">
            <f-a-q v-if="this.isPage === 'FAQ'"/>
            <cancellation-terms v-if="this.isPage === 'CancellationTerms'"
                :isEdit="isCancellationEdit" @ChangeCancellation="ChangeCancellation" />
            <termsof-use v-if="this.isPage === 'TermsofUse'"
                :isEdit="isTermsofUseEdit" @ChangeTermsofUse="ChangeTermsofUse" />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FAQ from '../components/Documentation/FAQ.vue';
import CancellationTerms from '../components/Documentation/CancellationTerms.vue';
import TermsofUse from '../components/Documentation/TermsofUse.vue';

import PageHeader from '../../src/assets/components/headers/PageHeader.vue'
import IconButton from '../items/IconButton.vue';
import TextButton from '../items/TextButton.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'DocumentationView',
    components: {
        FAQ,
        CancellationTerms,
        TermsofUse,
        PageHeader,
        TextButton,
        IconButton,
    },
    data() {
        return {
            isPage: 'FAQ',
            isMobile: false,
            isCancellationEdit: false,
            isTermsofUseEdit: false,
        };
    },
    computed: {
        ...mapState('Documentation', ['errors', 'success']),
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        ...mapActions('Documentation', ['Show_FaqData', 'Show_TermsData', 'Add_FAQData', 'Delete_All_FAQData']),
        changePage(val) {
            this.isPage = val;
        },
        onResize() {
            if (window.innerWidth <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        },
        AddFAQ() {
            this.Add_FAQData({question: '', answer: '',});
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success('New FAQ added!');
        },
        async DeleteAll() {
            await this.Delete_All_FAQData();
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
        },
        ChangeCancellation(val) {
            this.isCancellationEdit = val;
        },
        ChangeTermsofUse(val) {
            this.isTermsofUseEdit = val;
        },
    },
    created() {
        this.Show_FaqData();
        this.Show_TermsData();
    },
}
</script>
