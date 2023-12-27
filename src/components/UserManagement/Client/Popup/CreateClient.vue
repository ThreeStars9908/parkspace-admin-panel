<template>
  <div class="bg-white rounded-lg p-6 md:w-[480px] w-[360px]">
    <div class="flex flex-row justify-between">
        <div class="font-semibold">Client's data</div>
        <base-icon name="fa fa-xmark" @click="this.$emit('registerClients', false)"/>
    </div>
    <div class="mt-4 text-[#3F3F44]">
        <div class="text-left">Name</div>
        <input-form type="text"
            placeholder="Name"
            v-model:value="new_client.name"
        />
        <div class="text-left">E-mail</div>
        <input-form type="text"
            placeholder="E-mail"
            v-model:value="new_client.email"
        />
        <div class="text-left">Telephone</div>
        <input-form type="text"
            placeholder="Telephone"
            v-model:value="new_client.cellphone"
        />
        <div class="text-left">Address</div>
        <input type="text"
            v-model="new_client.address"
            @keyup="Input_Address(new_client.address)"
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
        <div className="text-left mt-4">Password</div>
        <input-form
            type="password"
            placeholder="Password"
            v-model:value="new_client.password"
        />
        <div className="text-left">Confirm password</div>
        <input-form
            type="password"
            placeholder="Confirm Password"
            v-model:value="confirmPass"
        />
        <div class="text-center">
            <default-button title="Register Client" bgcolor="#008AB6" color="#F8F8F8" 
                @click="Register"/>
        </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapState, mapActions } from 'vuex';
import BaseIcon from '../../../../items/BaseIcon.vue';
import InputForm from '../../../../items/InputForm.vue';
import DefaultButton from '../../../../items/DefaultButton.vue';

export default {
    name: 'CreateClient',
    data() {
        return {
            confirmPass: '',
            new_client: {
                name: '',
                email: '',
                cellphone: '',
                address: '',
                password: '',
                type: 'Home',
                position: {
                    latitude: 0,
                    longitude: 0,
                },
            },
        }
    },
    components: {
        BaseIcon,
        InputForm,
        DefaultButton
    },
    computed: {
        ...mapState('Clients', ['geo_address_list']),
    },
    methods: {
        ...mapActions('Clients', ['Add_Client', 'Get_GeoAddress', 'Format_GeoAddress']),
        Register() {
            if(!this.new_client.name || !this.new_client.email || !this.new_client.cellphone || !this.new_client.address) {
                toast.error('Please input all fields!');
            } else if(!this.new_client.password || !this.confirmPass) {
                toast.error('Please input password!');
            } else if(this.new_client.password == this.confirmPass) {
                this.Add_Client(this.new_client);
                toast.success('Client registered!');
                this.$emit('registerClients', false);
            } else {
                toast.error('Password does not matched!');
            }
        },
        Input_Address(val) {
            if(val.length >= 3)
                this.Get_GeoAddress(val);
            else
                this.Format_GeoAddress();
        },
        Select_Address(val) {
            this.new_client.address = val.formatted;
            this.new_client.position = {
                latitude: val.lat,
                longitude: val.lon,
            };
            this.Format_GeoAddress();
        },
        
        validateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false;
            } else {
                return true;
            }
        },
    },
    created() {
        this.Format_GeoAddress();
    },
}
</script>
