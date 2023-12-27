<!-- eslint-disable -->
<template>
  <div>
    <div className="lg:w-[766px] md:w-[480px] bg-white
      rounded-lg flex flex-col justify-between gap-2
      overflow-auto h-screen max-h-[720px]
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Admin's data
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('registerAdmin', false)">
          <base-icon name="fa fa-close" />
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Name
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_admin.name"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        E-mail
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_admin.email"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Telephone
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_admin.cellphone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Type
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <!-- <input v-model="new_admin.role" placeholder="Admin"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]"> -->
            <select v-model="new_admin.role"
              class="h-[48px] w-full rounded-lg px-4
              bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <option v-for="(element, i) in admin_type"
                v-bind:key="i" :value="element">{{ element }}</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="text-left text-[16px] font-normal text-[#3F3F44]">
          Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <input v-model="new_admin.password"
                     :type="isHiddenOne ? 'password' : 'text'"
                     aria-label="Password"
                     className="w-full px-[10px] py-3">
              <base-icon :name="isHiddenOne ? 'fa fa-eye' : 'fa fa-eye-slash'"
                class="cursor-pointer absolute -ml-10 mt-3"
                @click="changePass()" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-left text-[16px] font-normal text-[#3F3F44]">
          Confirm Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <input v-model="confirmPass"
                     :type="isHiddenTwo ? 'password' : 'text'"
                     aria-label="Confirm Password"
                     className="w-full px-[10px] py-3">
              <base-icon :name="isHiddenTwo ? 'fa fa-eye' : 'fa fa-eye-slash'"
                class="cursor-pointer absolute -ml-10 mt-3"
                @click="changeConfirmPass()" />
            </div>
          </div>
        </div>
      </div>
      <default-button title="Register Admin"
        @click="RegisterAdmin" />
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '../../../items/BaseIcon.vue';
import DefaultButton from '../../../items/DefaultButton.vue';
import { mapActions } from 'vuex';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: 'CreateAdminPopup',
  data() {
    return {
      confirmPass: '',
      isHiddenOne: true,
      isHiddenTwo: true,
      new_admin: {
        name: '',
        email: '',
        role: 'admin',
        cellphone: '',
        password: '',
      },
      admin_type: ['admin'],
    };
  },
  components: {
    DefaultButton,
    BaseIcon,
  },
  methods: {
    ...mapActions('Admins', ['Add_Admin']),
    changePass() {
      this.isHiddenOne = !this.isHiddenOne;
    },
    changeConfirmPass() {
      this.isHiddenTwo = !this.isHiddenTwo;
    },
    RegisterAdmin() {
      if (this.new_admin.name === '' || this.new_admin.email === '' || this.new_admin.cellphone === '' || this.new_admin.password === '' || this.confirmPass === '') {
        toast.error('Please fill in all fields');
      } else if (this.validateEmail(this.new_admin.email)) {
        toast.error('Invalid email');
      } else if (this.new_admin.password !== this.confirmPass) {
        toast.error('Passwords do not match');
      } else if (this.new_admin.password === this.confirmPass) {
        this.Add_Admin(this.new_admin);
        this.$emit('registerAdmin', false);
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
