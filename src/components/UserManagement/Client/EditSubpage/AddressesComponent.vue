<!-- eslint-disable -->
<template>
  <div class="addresses-component">
    <div class="header"
         className="grid grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row">
        <div className="font-semibold text-[16px] text-left my-auto ml-4">
          Registered addresses
        </div>
      </div>
      <!-- <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto">
          <base-icon name="fa fa-plus-circle" color="#008AB6" />
            <span class="ml-2">Add new</span>
        </div>
      </div> -->
    </div>
    <div class="block"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED] rounded-lg">
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-6 my-auto">
          <base-icon name="fa fa-trash-can" color="#008AB6" />
            <span class="ml-2">Delete</span>
        </div>
        <div className="text-[#008AB6] cursor-pointer text-right my-auto">
          <base-icon name="fa fa-pen" color="#008AB6" />
            <span class="ml-2">Edit</span>
        </div>
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Address name
        <input v-model="name"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Address
        <input v-model="address"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Assigned as
        <select v-model="assign"
          class="h-[54px] w-full rounded-lg py-2 px-4
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
          <option v-for="(element, i) in assigned_type"
            v-bind:key="i" :value="element">{{ element }}</option>
        </select>
        <v-icon name="md-keyboardarrowdown" scale="1.25"
          class="cursor-pointer absolute -ml-10 mt-4" />
      </div>
      <div className="flex flex-row">
        <div className="ml-auto font-semibold rounded-lg px-4 py-2 min-w-[120px]
          bg-[#008AB6] text-white cursor-pointer hover: shadow-lg">
          Save
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'AddressesComponent',
  data() {
    return {
      name: '',
      address: '',
      assign: '',
      assigned_type: ['Home', 'Work', 'Other'],
    };
  },
  components: {
    BaseIcon,
  },
};
</script>
