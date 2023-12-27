<template>
  <div class="payment-data">
    <div class="header"
         className="grid grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row">
        <div className="font-semibold text-[16px] text-left my-auto ml-4">
          Payment Data
        </div>
      </div>
      <!-- <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto">
          <base-icon name="fa fa-plus-circle" color="#008AB6"/>
            <span class="ml-2">Add new</span>
        </div>
      </div> -->
    </div>
    <div class="block"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED]">
      <div>
        <div className="flex flex-row justify-end">
          <div className="text-[#008AB6] cursor-pointer mr-6 my-auto">
            <base-icon name="fa fa-trash-can" color="#008AB6"/>
              <span class="ml-2">Delete</span>
          </div>
          <div className="text-[#008AB6] cursor-pointer text-right my-auto"
            @click="onSave">
            <base-icon name="fa fa-pen" color="#008AB6"/>
              <span class="ml-2">Edit</span>
          </div>
        </div>
        <div>
          <div className="text-left text-[16px] font-normal text-[#3F3F44]">
            E-mail
            <input v-model="selected_host.email" type="email"
                   placeholder="Enter your email" required
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[16px] font-normal text-[#3F3F44]">
            IBAN
            <input v-model="selected_host.iban_number"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { mapState, mapActions } from 'vuex';
import BaseIcon from '@/items/BaseIcon.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: 'UserDataComponent',
  data() {
    return {
    };
  },
  computed: {
    ...mapState('Hosts', ['selected_host']),
  },
  components: {
    BaseIcon,
  },  
  methods: {
    ...mapActions('Hosts', ['Edit_HostData']),
    onSave() {
      if(this.validateEmail(this.selected_host.email))
        toast.error('Invalid Email!');
      else {
        this.Edit_HostData(this.selected_host);
        toast.success('Host data saved!');
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
