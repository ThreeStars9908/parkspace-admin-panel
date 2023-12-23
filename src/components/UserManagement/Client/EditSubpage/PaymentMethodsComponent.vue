<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="payment-methods">
    <div class="header"
         className="grid grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row">
        <div className="font-semibold text-[16px] text-left my-auto ml-4">
          Registered payment methods
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto"
          @click="Add_ClientPayment({
            id: selected_client.id,
            email: '',
            method: '',
          })">
         <base-icon name="fa fa-plus-circle" color="#008AB6" />
            <span class="ml-2">Add new</span>
        </div>
      </div>
    </div>
    <div class="block"
         v-for="(item, index) in selected_client_payment"
         v-bind:key="index"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED] rounded-lg mb-4">
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-6 my-auto"
          @click="onDelete(item)">
          <base-icon name="fa fa-trash-can" color="#008AB6" />
            <span class="ml-2">Delete</span>
        </div>
        <div className="text-[#008AB6] cursor-pointer text-right my-auto">
          <base-icon name="fa fa-pen" color="#008AB6" />
          <span class="ml-2">Edit</span>
        </div>
      </div>
      <div className="text-left text-[#3F3F44]">
        Payment method
        <input v-model="item.method"
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44]">
        E-mail
        <input v-model="item.email"
          className="h-[16px] w-full rounded-lg px-4 py-6 mb-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="flex flex-row">
        <div className="ml-auto font-semibold rounded-lg px-4 py-2 min-w-[120px]
          bg-[#008AB6] text-white cursor-pointer hover: shadow-lg"
          @click="onSave(item)">
          Save
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseIcon from '@/items/BaseIcon.vue';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: 'PaymentMethodsComponent',
  data() {
    return {
      payment: '',
      email: '',
    };
  },
  components: {
    BaseIcon,
  },
  computed: {
    ...mapState('Clients', ['selected_client', 'selected_client_payment']),
  },
  methods: {
    ...mapActions('Clients', ['Add_ClientPayment', 'Edit_ClientPayment', 'Delete_ClientPayment']),
    onSave(val) {
      this.Edit_ClientPayment(val);
      toast.success('Payment Saved!');
    },
    onDelete(val) {
      this.Delete_ClientPayment(val);
      toast.success('Payment Deleted!');
    }
  },
};
</script>
