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
            v-model:value="new_client.phone"
        />
        <div class="text-left">Address</div>
        <input-form type="text"
            placeholder="Address"
            v-model:value="new_client.address"
        />
        <div className="text-left">Password</div>
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

<script>
import { mapActions } from 'vuex';
import BaseIcon from '../../../../items/BaseIcon.vue';
import InputForm from '../../../../items/InputForm.vue';
import DefaultButton from '../../../../items/DefaultButton.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'CreateClient',
    data() {
        return {
            confirmPass: '',
            new_client: {
                name: '',
                email: '',
                phone: '',
                address: '',
                password: '',
            },
        }
    },
    components: {
        BaseIcon,
        InputForm,
        DefaultButton
    },
    methods: {
        ...mapActions('Clients', ['Add_Client']),
        Register() {
            if(!this.new_client.password || !this.confirmPass) {
                toast.error('Please input password!');
            } else if(this.new_client.password == this.confirmPass) {
                this.Add_Client(this.new_client);
                toast.success('Client registered!');
                this.$emit('registerClients', false);
            } else {
                toast.error('Password does not matched!');
            }
        }
    },
}
</script>
