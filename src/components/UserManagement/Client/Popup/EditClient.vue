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
        <input type="text"
            placeholder="Address"
            v-model="selected_client.edit_address.address"
            @keyup="Input_Address(selected_client.edit_address.address)"
            className="w-full rounded-lg p-2
                border-solid border-2 border-[#7A7A7A]">
        <div v-if="geo_address_list.length"
            class="absolute z-50 bg-white border-solid border-2 w-[90%]">
            <div v-for="(item, index) in geo_address_list"
                :key="index"
                className="text-sm border-b-2 mb-2 p-2"
                @click="Select_Address(item)">
                {{ item.formatted }}
            </div>
        </div>
        <div class="text-center mt-4">
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
        ...mapState('Clients', ['selected_client', 'selected_client_address', 'geo_address_list']),
    },
    methods: {
        ...mapActions('Clients', ['Edit_Client', 'Get_GeoAddress', 'Format_GeoAddress']),
        onSave() {
            this.Edit_Client(this.selected_client);
            this.$emit('editClients', false);
            
            toast.success('Saved!');
        },

        Input_Address(val) {
            if(val.length >= 3)
                this.Get_GeoAddress(val);
            else
                this.Format_GeoAddress();
        },
        
        Select_Address(val) {
            this.selected_client.edit_address.address = val.formatted;
            this.selected_client.edit_address.position = {
                latitude: val.lat,
                longitude: val.lon,
            };
            this.Format_GeoAddress();
        }
    },
}
</script>
