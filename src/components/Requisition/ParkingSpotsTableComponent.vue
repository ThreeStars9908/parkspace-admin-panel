<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between gap-4 h-[56px] mb-6">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Parking spots requisitions
          </div>
          <search-form v-model:value="search"
            placeholder="search" />
        </div>
        <!-- <div className="flex flex-row">
          <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      v-model="filter"
                      @click="FilterSort"
                      variant="outlined" />
          </div>
        </div> -->
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-left">Host</th>
            <th className="px-6 py-3 text-left">E-mail</th>
            <th className="px-6 py-3 text-left">Telephone</th>
            <th className="px-6 py-3 text-center">Location</th>
            <th className="px-6 py-3 text-center">Parking spot<br>details</th>
            <th className="px-6 py-3 text-center">Parking spot<br>photos</th>
            <th className="px-6 py-3 text-center">Negative options</th>
            <th className="px-6 py-3 text-center">Send notification<br>to host</th>
            <th className="px-6 py-3 text-center">Verify parking spot</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <parking-spots-table-item-component v-for="(item, index) in onFilter"
                                      v-bind:key="index"
                                      :obj="item"
                                      @deleteHs="deleteHs"
                                      @showH="(val) => this.$emit('showHost', val)" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/assets/components/forms/SearchForm.vue';
import { mapState } from 'vuex';
import ParkingSpotsTableItemComponent from './ParkingSpotsTableItemComponent.vue';

export default {
  name: 'ParkingSpotsTableComponent',
  components: {
    ParkingSpotsTableItemComponent,
    SearchForm,
  },
  data() {
    return {
      objeto: {
        id: 1,
        name: 'Client A',
        email: 'clienta@gmail.com',
        phone: '419909230',
        enable: true,
      },
      items: ['Alphabetical Up', 'Alphabetical Down'],
      search: '',
      filter: '',
    };
  },
  computed: {
    ...mapState('ParkingSlots', ['parking_slotsAll']),
    onFilter() {
      // return this.parking_slotsAll;
      if(Array.isArray(this.parking_slotsAll)) {
        return this.parking_slotsAll.filter(item => item.user.email.toLowerCase().includes(this.search.toLowerCase()));
      } else {
        return [];
      }
    }
  },
  methods: {
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
    FilterSort() {
      if(this.filter == 'Alphabetical') {
        this.parking_slotsAll.sort((a, b) => b.user.name - a.user.name);
      } else {
        this.parking_slotsAll.sort((a, b) => a.user.name - b.user.name);
      }
    }
  },
};
</script>
