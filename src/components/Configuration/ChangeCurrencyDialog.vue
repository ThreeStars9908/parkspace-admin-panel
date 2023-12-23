<template>
  <div class="change-currency-dialog">
    <div className="rounded-lg bg-white p-6">
        <div className="flex flex-row justify-between mb-6">
            <div className="font-semibold text-[16px]">
                Confirm currency?
            </div>
            <base-icon name="fa fa-xmark" @click="this.$emit('confirmCurrency', false)"/>
        </div>
        <div className="flex flex-row justify-between gap-4">
            <default-button title="Cancel" bgcolor="#F8F8F8" color="#008AB6" 
                @click="this.$emit('confirmCurrency', false)"/>
            <default-button title="Confirm" color="#F8F8F8"
                @click="onSave"/>
        </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import DefaultButton from '../../items/DefaultButton.vue'
import BaseIcon from '../../items/BaseIcon.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'ChangeCurrencyDialog',
    components: {
        BaseIcon,
        DefaultButton,
    },
    props: ['obj'],
    computed: {
        ...mapState('Auth', ['errors', 'success']),
    },
    methods: {
        ...mapActions('Auth', ['Change_Currency']),
        async onSave() {
            await this.Change_Currency(this.obj);
            if(this.errors)
                toast.error(this.errors);
            if(this.success)
                toast.success(this.success);
            
            this.$emit('confirmCurrency', false);
        }
    }
}
</script>
