<!-- eslint-disable -->
<template>
  <div class="vehicles-component">
    <div class="header"
         className="grid grid-cols-2 justify-between
         mt-[40px] mb-[16px]">
      <div className="flex flex-row">
        <div className="font-semibold text-[16px] text-left my-auto ml-4">
          Registered vehicles
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto"
          @click="Add_Client_Car({
              id: selected_client.id,
              name: selected_client.name,
              brand: '',
              type: '',
              color: '',
              number: '',
            })">
          <base-icon name="fa fa-plus-circle" color="#008AB6" />
            <span class="ml-2">Add new</span>
        </div>
      </div>
    </div>
    <div class="block" v-for="(item, index) in selected_client_car" v-bind:key="index"
         className="p-6 shadow-[4px_6px_40px_0px_#00000020]
    border-1 border-[#EBF0ED] rounded-lg mb-4">
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-6 my-auto"
          @click="onDelete(item)">
          <base-icon name="fa fa-trash-can" color="#008AB6" />
            <span class="ml-2">Delete</span>
        </div>
        <div className="text-[#008AB6] cursor-pointer text-right my-auto"
          @click="this.isedit = true">
          <base-icon name="fa fa-pen" color="#008AB6" />
            <span class="ml-2">Edit</span>
        </div>
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Brand
        <input v-model="item.brand"
          :disabled="!isedit"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Model
        <input v-model="item.type"
          :disabled="!isedit"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Color
        <input v-model="item.color"
          :disabled="!isedit"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Registration number
        <input v-model="item.number"
          :disabled="!isedit"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="flex flex-row">
        <div className="ml-auto font-semibold rounded-lg px-4 py-2 min-w-[120px]
          bg-[#008AB6] text-white cursor-pointer hover: shadow-lg"
          @click="OnEdit(item), this.isedit = true">
          Save
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapState, mapActions } from 'vuex';
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'VehiclesComponent',
  data() {
    return {
      isedit: false,
    };
  },
  components: {
    BaseIcon,
  },
  computed: {
    ...mapState('Clients', ['selected_client', 'selected_client_car']),
    ...mapState('ParkingSlots', ['vehicle_sizes']),
  },
  methods: {
    ...mapActions('Clients', ['Add_Client_Car', 'Edit_Client_Car', 'Remove_Client_Car']),
    OnEdit(val) {
      toast.success('Saved!');
      this.Edit_Client_Car(val);
    },
    onDelete(val) {
      toast.success('Deleted!');
      this.Remove_Client_Car(val);
    }
  },
};
</script>
