<template>
  <div class="bg-white rounded-lg p-6 md:w-[480px] w-[360px]">
    <div class="flex flex-row justify-between">
        <div class="font-semibold">Edit client</div>
        <base-icon name="fa fa-xmark" @click="this.$emit('editClients', false)"/>
    </div>
    <div class="mt-4 text-[#3F3F44]">
        <div class="text-left">Name</div>
        <input-form type="text"
            placeholder="Name"
            v-model:value="selected_client.name"
        />
        <div class="text-left">E-mail</div>
        <input-form type="text"
            placeholder="E-mail"
            v-model:value="selected_client.email"
        />
        <div class="text-left">Telephone</div>
        <input-form type="text"
            placeholder="Telephone"
            v-model:value="selected_client.cellphone"
        />
        <div class="text-left">Address</div>
        <input-form type="text"
            placeholder="Address"
            v-model:value="selected_client.address"
        />
        <div class="text-center">
            <default-button title="Save Changes" bgcolor="#008AB6" color="#F8F8F8" 
                @click="onSave"/>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseIcon from '../../../../items/BaseIcon.vue';
import InputForm from '../../../../items/InputForm.vue';
import DefaultButton from '../../../../items/DefaultButton.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'EditClient',
    components: {
        BaseIcon,
        InputForm,
        DefaultButton
    },
    computed: {
        ...mapState('Clients', ['selected_client']),
    },
    methods: {
        ...mapActions('Clients', ['Edit_Client']),
        onSave() {
            this.Edit_Client(this.selected_client);
            this.$emit('editClients', false);
            
            toast.success('Saved!');
        }
    },
}
</script>
