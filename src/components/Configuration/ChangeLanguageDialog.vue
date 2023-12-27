<template>
  <div class="change-language-dialog">
    <div className="rounded-lg bg-white p-6">
        <div className="flex flex-row justify-between mb-6">
            <div className="font-semibold text-[16px]">
                {{ $t('button.confirm') }} {{ $t('language') }}?
            </div>
            <base-icon name="fa fa-xmark" @click="this.$emit('confirmLanguage', false)"/>
        </div>
        <div className="flex flex-row justify-between gap-4">
            <default-button title="Cancel" bgcolor="#F8F8F8" color="#008AB6" 
                @click="this.$emit('confirmLanguage', false)"/>
            <default-button title="button.confirm" color="#F8F8F8"
                @click="onSave"/>
        </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import DefaultButton from '../../items/DefaultButton.vue'
import BaseIcon from '../../items/BaseIcon.vue'

// import { toast } from 'vue3-toastify'
// import 'vue3-toastify/dist/index.css'

export default {
    name: 'ChangeLanguageDialog',
    components: {
        BaseIcon,
        DefaultButton,
    },
    props: ['obj'],
    methods: {
        ...mapActions('Configuration', ['Change_Language']),
        onSave() {
            this.Change_Language(this.obj);
            
            this.$i18n.locale = this.obj;
            this.$emit('confirmLanguage', false);
        }
    }
}
</script>
