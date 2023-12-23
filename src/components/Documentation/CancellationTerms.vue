<template>
    <div class="cancellationterms">
        <div className="w-full rounded-lg p-4 mb-4
            text-left shadow-[4px_6px_40px_0px_#00000020]">
            <input-form
                type="terms"
                placeholder="Cancellation Terms"
                v-model:value="cancellationTermsData.terms_conditions"
            />
            <div className="flex flex-row justify-end">
                <icon-button title="Save" icon="fa fa-floppy-disk" color="#F9F9F9" :mobile="isMobile"
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
    name: 'CancellationTerms',
    components: {
        InputForm,
        IconButton,
    },
    data() {
        return {
            isMobile: false,
        }
    },
    computed: {
        ...mapState('Documentation', ['cancellationTermsData', 'success', 'errors']),
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        ...mapActions('Documentation', ['Edit_CancellationTermsData']),
        onResize() {
            if (window.innerWidth <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        },
        async onSave() {
            await this.Edit_CancellationTermsData(this.cancellationTermsData);
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
        },
    },
}
</script>

<style>

</style>