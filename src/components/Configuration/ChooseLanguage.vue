<template>
  <div class="language-block"
    className="mt-8 p-6
        shadow-[4px_6px_30px_0px_#00000020] rounded-lg">
        <div className="text-[18px] text-left font-semibold">
            Language
        </div>
        <div className="w-full h-[0.5px] mr-70 mt-2 bg-[#C9C9C9]" />
        <div className="h-[240px] overflow-y-auto mt-6
            scrollbar scrollbar-thumb-[#008AB6] p-2
            scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
            <div v-for="(item, index) in languages" v-bind:key="index">
                <div className="flex flex-row justify-between m-2">
                    {{ item.name }}
                    <input v-model="adminData.language"
                        :value="index + 1"
                        name="language-radio"
                        type="radio"
                        className="my-auto w-4 h-4">
                </div>
                <div className="w-full h-[0.5px] mx-auto bg-[#EAEAEA]" />
            </div>
        </div>
        <div className="flex flex-row justify-end mt-4">
            <default-button title="Save Language" @click="onSave"/>
        </div>
        <v-dialog v-model="isChange"
            width="auto">
            <change-language-dialog :obj="adminData" @confirmLanguage="confirmLanguage"/>
        </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
        }
    },
    computed: {
        ...mapState('Configuration', ['languages']),
        ...mapState('Auth', ['adminData']),
    },
    methods: {
        onSave() {
            this.isChange = true;
        },
        confirmLanguage(val) {
            this.isChange = val;
        },
    }
}
</script>
