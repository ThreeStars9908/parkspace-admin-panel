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
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto">
          <base-icon name="fa fa-plus-circle" color="#008AB6"/>
            <span class="ml-2">Add new</span>
        </div>
      </div>
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
          <div className="text-[#008AB6] cursor-pointer text-right my-auto">
            <base-icon name="fa fa-pen" color="#008AB6"/>
              <span class="ml-2">Edit</span>
          </div>
        </div>
        <div>
          <div className="text-left text-[16px] font-normal text-[#3F3F44]">
            Payment method
            <input v-model="payment"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                              bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[16px] font-normal text-[#3F3F44]">
            E-mail
            <input v-model="email"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
        <div>
          <div className="text-left text-[16px] font-normal text-[#3F3F44]">
            IBAN
            <input v-model="iban"
                   className="h-[16px] w-full rounded-lg  px-4 py-6 mb-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'UserDataComponent',
  data() {
    return {
      payment: '',
      email: '',
      iban: '',
    };
  },
  components: {
    BaseIcon,
  },  
  methods: {},
};
</script>
