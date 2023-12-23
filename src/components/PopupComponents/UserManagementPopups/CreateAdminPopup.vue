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
          <v-icon name="io-close" />
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
            <input v-model="new_admin.phone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44]">
        Type
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="role" placeholder="Admin"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            <!-- <select v-model="role"
              class="h-[48px] w-full rounded-lg px-4
              bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
              <option v-for="(element, i) in admin_type"
                v-bind:key="i" :value="element">{{ element }}</option>
            </select> -->
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
            text-white rounded-lg cursor-pointer
            mx-auto font-semibold text-center"
           @click="RegisterAdmin">
        Register Admin
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
        phone: '',
        password: '',
      },
      role: 'Admin',
      admin_type: ['Admin', 'Manager'],
    };
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
      if (this.new_admin.password === this.confirmPass) {
        this.Add_Admin(this.new_admin);
        this.$emit('registerAdmin', false);
      }
    },
  },
};
</script>
