<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="user-data">
    <div class="header"
         className="grid grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row justify-start">
        <div className="cursor-pointer"
          @click="this.$emit('showC', false)">
          <base-icon name="fa fa-arrow-circle-left" size="2em" color="#008AB6" />
        </div>
        <div className="font-semibold text-[16px] text-left my-auto ml-4">
          User Data
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="mr-4 my-auto">
          Activate or Deactivate user:
        </div>
        <div className="mr-8 my-auto">
          <VueToggles v-model="selected_client.status"
                      @click="EnableStatus(selected_client)"
                      :height="24" :width="48"
                      checkedBg="#1C8E33" />
        </div>
        <div className="text-[#008AB6] font-medium text-[16px]
        cursor-pointer text-right mr-4 my-auto">
          <base-icon name="fa fa-pen" color="#008AB6" />
          <span class="ml-2">Edit</span>
        </div>
      </div>
    </div>
    <div class="block"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED] rounded-lg">
      <div className="text-left text-[#3F3F44]">
        Full Name
        <input v-model="selected_client.name"
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44]">
        E-mail
        <input v-model="selected_client.email"
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44]">
        Phone number
        <input v-model="selected_client.cellphone"
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44]">
        User type
        <input v-model="selected_client.role" disabled
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div v-if="changepassword">
        <div className="text-left text-[#3F3F44]">
          Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg bg-[#F8F8F8]
            border-solid border-2 border-[#EBF0ED] mb-5">
              <input v-model="pass"
                :type="isHiddenOne ? 'password' : 'text'"
                aria-label="Password"
                className="w-full rounded-lg px-[10px] py-3">
                <v-icon :name="isHiddenOne ? 'bi-eye': 'bi-eye-slash'"
                  scale="1.25" fill="black"
                  class="cursor-pointer absolute -ml-10 mt-3"
                  @click="changePass()" />
            </div>
          </div>
        </div>
        <div className="text-left text-[#3F3F44]">
          Confirm password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg bg-[#F8F8F8]
            border-solid border-2 border-[#EBF0ED] mb-5">
              <input v-model="confirmPass"
                :type="isHiddenTwo ? 'password' : 'text'"
                aria-label="Password"
                className="w-full rounded-lg px-[10px] py-3">
                <v-icon :name="isHiddenTwo ? 'bi-eye': 'bi-eye-slash'"
                  scale="1.25" fill="black"
                  class="cursor-pointer absolute -ml-10 mt-3"
                  @click="changeTwoPass()" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="!changepassword"
        className="text-right font-medium text-[16px] text-[#008AB6] cursor-pointer"
        @click="changepassword = true">
        <base-icon name="fa fa-pen" color="#008AB6" />
        Change Password
      </div>
      <div v-if="changepassword"
        className="text-right font-medium text-[16px] text-[#008AB6] cursor-pointer"
        @click="ChangePass">
        <base-icon name="fa fa-pen" color="#008AB6" /> Save Password
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapState, mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'UserDataComponent',
  data() {
    return {
      pass: '',
      confirmPass: '',
      isHiddenOne: '',
      isHiddenTwo: '',
      changepassword: false,
    };
  },
  computed: {
    ...mapState('Clients', ['selected_client']),
  },
  components: {
    VueToggles,
    BaseIcon,
  },
  methods: {
    ...mapActions('Clients', ['Change_ClientPassword', 'EnableStatus']),
    changePass() {
      this.isHiddenOne = !this.isHiddenOne;
    },
    changeTwoPass() {
      this.isHiddenTwo = !this.isHiddenTwo;
    },
    ChangePass() {
      this.Change_ClientPassword({
        id: this.selected_client.id,
        password: this.pass,
        confirmPass: this.confirmPass,
      });
      toast.success('Password changed successfully!');
      this.changepassword = false;
    },
  },
};
</script>
