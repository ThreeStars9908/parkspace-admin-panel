<template>
  <div class="user-data">
    <div class="header"
        className="flex flex-row justify-between mb-2">
        <div className="text-left font-semibold">
            {{ $t('user_data') }}
        </div>
        <text-button title="edit" icon="fa fa-pen" :mobile="isMobile" />
    </div>
    <div class="block"
        className="p-6 mb-4 shadow-[4px_6px_40px_0px_#00000020] rounded-lg">
        <div className="font-semibold text-left mb-4">{{ $t('form.full_name') }}</div>
        <input-form
            type="text"
            placeholder="form.name"
            v-model:value="adminData.name"
        />
        <div className="font-semibold text-left mb-4">{{ $t('form.telephone') }}</div>
        <input-form
            type="text"
            placeholder="form.telephone"
            v-model:value="adminData.cellphone"
        />
        <div className="font-semibold text-left mb-4">{{ $t('form.email') }}</div>
        <input-form
            type="text"
            placeholder="form.email"
            v-model:value="adminData.email"
        />
        <default-button title="button.save_changes" @click="onSave" />
    </div>
    <v-dialog v-model="isSave"
        width="auto">
        <change-user-dialog :obj="adminData" @saveUserdata="saveUserdata"/>
    </v-dialog>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { mapState } from 'vuex';
import TextButton from '../../items/TextButton.vue';
import DefaultButton from '../../items/DefaultButton.vue';
import InputForm from '../../items/InputForm.vue';
import ChangeUserDialog from './ChangeUserDialog.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'UserData',
    components: {
        TextButton,
        DefaultButton,
        InputForm,
        ChangeUserDialog,
    },
    data() {
        return {
            isSave: false,
        }
    },
    computed: {
        ...mapState('Auth', ['adminData']),
    },
    methods: {
        onSave() {
            if(this.validateEmail(this.adminData.email)) {
                toast.error('Invalid email');
            } else {
                this.isSave = true;
            }
        },
        saveUserdata(val) {
            this.isSave = val;
        },
        validateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false;
            } else {
                return true;
            }
        },
    },
}
</script>
