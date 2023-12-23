<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div className="w-[766px] h-[686px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Client's data
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('registerClients', false)">
          <v-icon name="io-close" />
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Name
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="new_client.name"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        E-mail
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="new_client.email"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Telephone
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="new_client.phone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Address
        <div className="ml-auto">
          <div className="w-[718px] h-fit rounded-lg">
            <input v-model="new_client.address" disabled
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div>
        <div className="text-left text-[16px] font-normal text-[#3F3F44]">
          Password
          <div className="ml-auto">
            <div className="w-full h-fit rounded-lg
            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <input v-model="new_client.password"
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
        <div className="text-left text-[16px] font-normal text-[#3F3F44]">
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
            text-white rounded-[8px] cursor-pointer
            mx-auto font-semibold text-center"
           @click="Register">
        Register Client
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateClientPopup',
  data() {
    return {
      confirmPass: '',
      isHiddenOne: true,
      isHiddenTwo: true,
      new_client: {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('Clients', ['Add_Client']),
    changePass() {
      this.isHiddenOne = !this.isHiddenOne;
    },
    changeConfirmPass() {
      this.isHiddenTwo = !this.isHiddenTwo;
    },
    Register() {
      if (this.new_client.password === this.confirmPass) {
        this.Add_Client(this.new_client);
        this.$emit('registerClients', false);
      }
    },
  },
};
</script>
