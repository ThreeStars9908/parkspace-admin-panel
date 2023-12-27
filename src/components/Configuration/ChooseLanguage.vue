<template>
  <div class="language-block"
    className="mt-8 p-6
        shadow-[4px_6px_30px_0px_#00000020] rounded-lg">
        <div className="text-[18px] text-left font-semibold">
            {{ $t('language') }}
        </div>
        <div className="w-full h-[0.5px] mr-70 mt-2 bg-[#C9C9C9]" />
        <div className="h-[240px] overflow-y-auto mt-6
            scrollbar scrollbar-thumb-[#008AB6] p-2
            scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
            <div v-for="(item, index) in languages" :key="index">
                <div className="flex flex-row justify-between m-2">
                    {{ item.name }}
                    <input v-model="select_language"
                        :value="item.id"
                        name="language-radio"
                        type="radio"
                        class="my-auto w-4 h-4 text-blue-600 bg-gray-100 border-solid border-gray-500">
                </div>
                <div className="w-full h-[0.5px] mx-auto bg-[#EAEAEA]" />
            </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
            <default-button title="save_language" @click="onSave"/>
        </div>
        <v-dialog v-model="isChange"
            width="auto">
            <change-language-dialog :obj="select_language" @confirmLanguage="confirmLanguage"/>
        </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DefaultButton from '../../items/DefaultButton.vue';
import ChangeLanguageDialog from './ChangeLanguageDialog.vue';

export default {
    name: 'ChooseLanguage',
    components: {
        DefaultButton,
        ChangeLanguageDialog
    },
    data() {
        return {
            isChange: false,
            languages: [
                { id: 'en', name: 'English' },
                { id: 'pt', name: 'Português' },
                { id: 'es', name: 'Español' },
                { id: 'fr', name: 'Français' },
                { id: 'de', name: 'Deutsch' },
                { id: 'it', name: 'Italiano' },
                { id: 'nl', name: 'Nederlands' },
                { id: 'pl', name: 'Polski' },
                { id: 'ru', name: 'Русский' },
                { id: 'tr', name: 'Türkçe' },
                { id: 'ar', name: 'العربية' },
                { id: 'zh', name: '中文' },
                { id: 'ja', name: '日本語' },
            ],
            select_language: '',
        }
    },
    computed: {
        ...mapState('Configuration', ['selected_language']),
    },
    methods: {
        ...mapActions('Configuration', ['Change_Language']),
        onSave() {
            this.isChange = true;
        },
        confirmLanguage(val) {
            this.isChange = val;
        },
    },
    created() {
        this.select_language = this.selected_language;
    },
}
</script>
