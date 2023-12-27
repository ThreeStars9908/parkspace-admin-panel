<template>
  <div class="password-data">
    <div class="header"
      className="flex flex-row justify-between mb-2">
        <div className="text-left font-semibold">
            {{ $t('form.password') }}
        </div>
        <text-button title="edit" icon="fa fa-pen" :mobile="isMobile" />
    </div>
    <div class="block"
      className="p-6 mb-4 shadow-[4px_6px_40px_0px_#00000020] rounded-lg">
      <div className="font-semibold text-left mb-4">{{ $t('form.password') }}</div>
      <input-form
        type="password"
        placeholder="form.password"
        v-model:value="info.password"
      />
      <div className="font-semibold text-left mb-4">{{ $t('form.confirm_password') }}</div>
      <input-form
        type="password"
        placeholder="form.confirm_password"
        v-model:value="info.confirmPass"
      />
      <default-button title="button.save_changes" 
        @click="onSave"/>
    </div>
    <v-dialog v-model="isSave"
      width="auto">
      <change-password-dialog :obj="info" @savePassword="savePassword"/>
    </v-dialog>
  </div>
</template>

<script>

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import DefaultButton from '../../items/DefaultButton.vue'
import TextButton from '../../items/TextButton.vue'
import InputForm from '../../items/InputForm.vue'
import ChangePasswordDialog from './ChangePasswordDialog.vue'

export default {
    name: 'PasswordData',
    components: {
        TextButton,
        DefaultButton,
        InputForm,
        ChangePasswordDialog,
    },
    data() {
      return {
        info: {
          password: '',
          confirmPass: '',
        },
        isSave: false, 
      }
    },
    methods: {
      onSave() {
        if(!this.info.password || !this.info.confirmPass) {
          toast.error('Please input password!');
        } else if(this.info.password == this.info.confirmPass) {
          this.isSave = true;
        } else {
          toast.error('Password does not matched!');
        }
      },
      savePassword(val) {
        this.isSave = val;
      },
    },
}
</script>
