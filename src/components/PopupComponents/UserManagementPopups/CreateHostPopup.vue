<!-- eslint-disable -->
<template>
  <div>
    <div className="lg:w-[766px] md:w-[480px] bg-white max-h-[640px] h-screen
      rounded-lg flex flex-col justify-between
      scrollbar scrollbar-thumb-[#008AB6] overflow-y-auto
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded
      p-6">
      <div className="flex flex-row justify-between mb-4">
        <div className="font-semibold text-[16px]">
          Host data
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('registerHosts', false)">
          <v-icon name="io-close" />
        </div>
      </div>
      <div className="text-left font-normal text-[#3F3F44] mb-4">
        Full Name
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_host.name"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left font-normal text-[#3F3F44] mb-4">
        E-mail
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_host.email"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left font-normal text-[#3F3F44] mb-4">
        Phone Number
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_host.phone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left font-normal text-[#3F3F44] mb-4">
        User Type
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="new_host.role" disabled
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left font-normal text-[#3F3F44] mb-4">
        DNI NIE Document
        <div className="ml-auto">
          <div className="w-full h-fit rounded-lg
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            <input v-model="new_host.dni_file.name"
                   className="w-full px-[10px] py-3">
            <base-icon name="fa fa-upload" @click="onUpload"
            class="cursor-pointer relative -ml-10 mt-3" />
            <input type="file" ref="fileinput" style="display: none;"
              @change="Uploaded" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-left font-normal text-[#3F3F44] mb-4">
          Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <input v-model="new_host.password"
                     :type="isHiddenOne ? 'password' : 'text'"
                     aria-label="Password"
                     className="w-full px-[10px] py-3">
              <v-icon :name="isHiddenOne ? 'bi-eye' : 'bi-eye-slash'"
                      scale="1.25"
                      fill="black"
                      class="cursor-pointer absolute -ml-10 mt-3"
                      @click="changePass()" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-left font-normal text-[#3F3F44] mb-4">
          Confirm Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <input v-model="confirmPass"
                     :type="isHiddenTwo ? 'password' : 'text'"
                     aria-label="Confirm Password"
                     className="w-full px-[10px] py-3">
              <v-icon :name="isHiddenTwo ? 'bi-eye' : 'bi-eye-slash'"
                      scale="1.25"
                      fill="black"
                      class="cursor-pointer absolute -ml-10 mt-3"
                      @click="changeConfirmPass()" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[241px] p-[12.5px] bg-[#008AB6]
            text-white rounded-lg cursor-pointer
            mx-auto font-semibold text-center"
           @click="OnRegister">
        Register Host
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CreateHostPopup',
  data() {
    return {
      confirmPass: '',
      isHiddenOne: true,
      isHiddenTwo: true,
      new_host: {
        name: '',
        email: '',
        phone: '',
        role: 'host',
        dni_file: "",
        password: '',
      },
    };
  },
  components: {
    BaseIcon
  },
  methods: {
    ...mapActions('Hosts', ['Add_Host']),
    changePass() {
      this.isHiddenOne = !this.isHiddenOne;
    },
    changeConfirmPass() {
      this.isHiddenTwo = !this.isHiddenTwo;
    },
    OnRegister() {
      if (this.new_host.password === this.confirmPass) {
        this.Add_Host(this.new_host);
        this.$emit('registerHosts', false);
      }
    },
    onUpload() {
      this.$refs.fileinput.click();
    },
    async Uploaded(event) {
      this.new_host.dni_file = event.target.files[0];
    },
  },
};
</script>
