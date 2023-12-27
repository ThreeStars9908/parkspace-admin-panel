<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="user-data">
    <div class="header"
         className="grid grid-cols-1 lg:grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row justify-start">
          <div className="cursor-pointer"
               @click="this.$emit('showH', false)">
            <base-icon name="fa fa-arrow-circle-left"
                       color="#008AB6" size="2em"
                       class="mr-2" />
          </div>
        <div className="font-semibold text-[16px] my-auto ml-4">
          Host Data
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="mr-4 my-auto">
          Activate or Deactivate user:
        </div>
        <div className="mr-8 my-auto">
          <VueToggles v-model="selected_host.status"
                      @click="Enable_Host(selected_host)"
                      :height="24" :width="48"
                      checkedBg="#1C8E33" />
        </div>
        <div className="text-[#008AB6] font-medium text-[16px]
        cursor-pointer text-right mr-4 my-auto"
          @click="onEdit">
          <base-icon name="fa fa-pen" color="#008AB6"/>
          <span class="ml-2">Edit</span>
        </div>
      </div>
    </div>
    <div class="block"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED]">
      <div>
        <div>
          <div className="text-left text-[#3F3F44]">
            Full name
            <input v-model="selected_host.name"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                              bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[#3F3F44]">
            E-mail
            <input v-model="selected_host.email"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[#3F3F44]">
            Phone number
            <input v-model="selected_host.cellphone"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[#3F3F44]">
            User Type
            <input v-model="selected_host.role"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                         bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div v-if="changepassword">
          <div className="text-left text-[#3F3F44]">
            Password
            <div className="ml-auto">
              <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]
            mb-5">
                <input v-model="pass"
                       :type="isHiddenOne ? 'password' : 'text'"
                       aria-label="Password"
                       className="w-full rounded-lg px-[10px] py-3">
                <base-icon :name="isHiddenOne ? 'fa fa-eye': 'fa fa-eye-slash'"
                        class="cursor-pointer relative -ml-10 mt-3"
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
                  <base-icon :name="isHiddenTwo ? 'fa fa-eye': 'fa fa-eye-slash'"
                    class="cursor-pointer absolute -ml-10 mt-3"
                    @click="changeTwoPass()" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!changepassword"
        className="text-right font-medium text-[16px] text-[#008AB6] cursor-pointer"
        @click="changepassword = true">
        <base-icon name="fa fa-pen" color="#008AB6" class="mr-2"/>Change Password
      </div>
      <div v-if="changepassword"
        className="text-right font-medium text-[16px] text-[#008AB6] cursor-pointer"
        @click="ChangePass">
        <base-icon name="fa fa-pen" color="#008AB6" class="mr-2"/>Save Password
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { mapState, mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '@/items/BaseIcon.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

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
    ...mapState('Hosts', ['selected_host']),
  },
  components: {
    VueToggles,
    BaseIcon
  },
  methods: {
    ...mapActions('Hosts', ['Change_HostPassword', 'Enable_Host', 'Edit_HostData']),
    changePass() {
      this.isHiddenOne = !this.isHiddenOne;
    },
    changeTwoPass() {
      this.isHiddenTwo = !this.isHiddenTwo;
    },
    ChangePass() {
      this.Change_HostPassword({
        id: this.selected_host.id,
        password: this.pass,
        confirmPass: this.confirmPass,
      });
      this.changepassword = false;
    },
    onEdit() {
      if(this.selected_host.email === '') {
        toast.error('Email is empty');
      } else if(this.validateEmail(this.selected_host.email)) {
        toast.error('Invalid email');
      } else if(this.selected_host.cellphone === '') {
        toast.error('Phone number is empty');
      } else if(this.selected_host.role === '') {
        toast.error('User type is empty');
      } else {
        this.Edit_HostData(this.selected_host);
        toast.success('Host data edited successfully');
      }
    },
    
    validateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false;
            } else {
                return true;
            }
        },
  },
};
</script>
