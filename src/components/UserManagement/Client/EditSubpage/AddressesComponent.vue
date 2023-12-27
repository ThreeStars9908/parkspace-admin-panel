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
      <div className="flex flex-row justify-end">
        <div className="text-[#008AB6] cursor-pointer mr-4 my-auto"
          @click="Add_Address">
          <base-icon name="fa fa-plus-circle" color="#008AB6" />
            <span class="ml-2">Add new</span>
        </div>
      </div>
    </div>
    <div class="block" v-for="(item, index) in selected_client_address_list"
      v-bind:key="index"
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
        Address name
        <input v-model="item.address.landmark"
          :disabled="!isedit"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
      </div>
      <div className="text-left text-[#3F3F44] mb-4 w-full">
        Address
        <input v-model="item.address_name"
          :disabled="!isedit"
          @keyup="Input_Address(item.address_name)"
          className="h-[16px] w-full rounded-lg px-4 py-6
          bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
        <div v-if="geo_address_list.length"
          class="relative z-50 bg-white border-solid border-2">
          <div v-for="(address, id) in geo_address_list"
            :key="id" className="text-sm border-b-2 mb-2 p-2"
            @click="Select_Address(address, index)">
            {{ address.formatted }}          
          </div>
        </div>
      </div>
      <div className="text-left text-[#3F3F44] mb-4">
        Assigned as
        <select v-model="item.address.type"
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
          bg-[#008AB6] text-white cursor-pointer hover: shadow-lg"
          @click="onSave(item)">
          Save
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { mapActions, mapState } from 'vuex';
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'AddressesComponent',
  data() {
    return {
      name: '',
      address: '',
      assign: '',
      assigned_type: ['Home', 'Work', 'Other'],
      isedit: false,
    };
  },
  components: {
    BaseIcon,
  },
  computed: {
    ...mapState('Clients', ['selected_client', 'selected_client_address', 'geo_address_list', 'selected_client_address_list']),
  },
  methods: {
    ...mapActions('Clients', ['Add_Client_Address', 'Save_Client_Address', 'Get_GeoAddress', 'Format_GeoAddress', 'Delete_Client_Address']),
    Input_Address(val) {
      if(val.length >= 3) {
        this.Get_GeoAddress(val);
      } else {
        this.Format_GeoAddress();
      }
    },
    Select_Address(val, index) {
      this.selected_client_address_list[index].address_name = val.formatted;
      this.selected_client_address_list[index].address.position = {
        latitude: val.lat,
        longitude: val.lon,
      };
      this.Format_GeoAddress();
    },
    onSave(val) {
      this.isedit = false;
      val.address.position = JSON.stringify(val.address.position);
      this.Save_Client_Address(val);
      toast.success('Address Saved!');
    },
    onDelete(val) {
      this.Delete_Client_Address(val.address);
      toast.success('Address Deleted!');
    },
    Add_Address() {
      const address = {
        id: this.selected_client.id,
        type: 'Home',
        landmark: '',
        position: {
          latitude: 0,
          longitude: 0,
        },
      }
      address.position = JSON.stringify(address.position);
      this.Add_Client_Address(address);
    }
  },
};
</script>
