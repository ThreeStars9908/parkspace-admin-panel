<template>
    <div class="faq">
        <div v-for="(item, index) in faqData"
            v-bind:key="index"
            className="w-full rounded-lg p-4 mb-4
            text-left shadow-[4px_6px_40px_0px_#00000020]">
            <div className="flex flex-row justify-between">
                <div className="font-semibold mb-4">Question</div>
                <div className="ml-auto flex flex-row">
                    <text-button title="Edit" icon="fa fa-pen" :mobile="isMobile" />
                    <text-button title="Delete" icon="fa fa-trash-can" :mobile="isMobile"
                        @click="onDelete(item)"/>
                </div>
            </div>
            <input-form
                type="question"
                placeholder="Question"
                v-model:value="item.question"
            />
            <div className="font-semibold mb-4">Answer</div>
            <input-form
                type="answer"
                placeholder="Answer"
                v-model:value="item.answer"
            />
            <div className="flex flex-row justify-end">
                <icon-button title="Save Question" icon="fa fa-floppy-disk" color="#F9F9F9" :mobile="isMobile"
                    @click="onSave(item)"/>
            </div>
        </div>
    </div>
</template>

<script>
import InputForm from '../../items/InputForm.vue'
import { mapState, mapActions } from 'vuex'
import IconButton from '../../items/IconButton.vue'
import TextButton from '../../items/TextButton.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'FAQ',
    components: {
        InputForm,
        IconButton,
        TextButton,
    },
    data() {
        return {
            isMobile: false,
        }
    },
    computed: {
        ...mapState('Documentation', ['faqData', 'errors', 'success']),
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        ...mapActions('Documentation', ['Edit_FAQData', 'Delete_FAQData']),
        onResize() {
            if (window.innerWidth <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        },
        async onSave(data) {
            await this.Edit_FAQData(data);
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
        },
        async onDelete(data) {
            await this.Delete_FAQData(data.id);
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
        }
    },
}
</script>

<style>

</style>