<template>
    <div class="termsofuse">
        <div className="w-full rounded-lg p-4 mb-4
            text-left shadow-[4px_6px_40px_0px_#00000020]">
            <input-form
                type="terms"
                :disabled="this.isEdit"
                placeholder="Terms of Use"
                v-model:value="termsofUseData.terms_conditions"
            />
            <div className="flex flex-row justify-end">
                <icon-button title="button.save" icon="fa fa-floppy-disk" color="#F9F9F9" :mobile="isMobile"
                    @click="onSave" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InputForm from '../../items/InputForm.vue'
import IconButton from '../../items/IconButton.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'TermsofUse',
    components: {
        InputForm,
        IconButton,
    },
    data() {
        return {
            isMobile: false,
        }
    },
    props: ['isEdit'],
    computed: {
        ...mapState('Documentation', ['termsofUseData', 'success', 'errors']),
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        ...mapActions('Documentation', ['Save_TermsData']),
        onResize() {
            if (window.innerWidth <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        },
        async onSave() {
            await this.Save_TermsData(this.termsofUseData);
            this.$emit('ChangeTermsofUse', false);
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
        },
    },
}
</script>
