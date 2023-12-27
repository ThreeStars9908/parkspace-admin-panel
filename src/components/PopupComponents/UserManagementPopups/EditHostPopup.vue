<!-- eslint-disable -->
<template>
  <div>
    <div className="w-[766px] bg-white
      rounded-lg flex flex-col justify-between
      p-6">
      <div className="flex flex-row justify-between">
        <div className="font-semibold text-[16px]">
          Edit Host Data
        </div>
        <div className="cursor-pointer"
             @click="this.$emit('editHosts', false)">
          <v-icon name="io-close" />
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-4">
        Full Name
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="selected_host.name"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-4">
        E-mail
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="selected_host.email"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-4">
        Phone Number
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="selected_host.cellphone"
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-4">
        User Type
        <div className="ml-auto">
          <div className="h-fit rounded-lg">
            <input v-model="selected_host.role" disabled
                   className="h-[40px] w-full rounded-lg  px-4 py-6
                      bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
      <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-4">
        DNI NIE Document
        <div className="ml-auto">
          <div className="h-fit rounded-lg
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            <input v-model="selected_host.dni_file"
                   className="w-full px-[10px] py-3">
            <a :href="$baseUrl + `${selected_host.dni_file}`" target="_blank">
            <base-icon name="fa fa-eye"
              class="cursor-pointer absolute -ml-20 mt-3"/>
            </a>
            <base-icon name="fa fa-upload"
              class="cursor-pointer absolute -ml-10 mt-3"
              @click="onUpload"/>
            <input type="file" ref="fileinput" style="display: none;"
              @change="Uploaded" />
          </div>
        </div>
      </div>
        <!-- <div className="text-left font-normal text-[#3F3F44] mb-4">
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
        </div> -->
      <div className="w-[241px] p-[12.5px] bg-[#008AB6]
            text-white rounded-lg cursor-pointer
            mx-auto font-semibold text-center"
           @click="onSave">
        Save Changes
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '../../../items/BaseIcon.vue'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'EditWasherPopup',
  data() {
    return {
    };
  },
  components: {
    BaseIcon,
  },
  computed: {
    ...mapState('Hosts', ['selected_host']),
  },
  methods: {
    ...mapActions('Hosts', ['Edit_Host']),
    onUpload() {
      this.$refs.fileinput.click();
    },
    async Uploaded(event) {
      this.selected_host.dni_file = event.target.files[0];
    },
    onSave() {
      this.Edit_Host(this.selected_host);
      this.$emit('editHosts', false);
    }
  },
};
</script>
