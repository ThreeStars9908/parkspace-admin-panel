<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-y-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="grid grid-cols-1 lg:grid-cols-2 h-[56px] mb-6">
        <div className="flex flex-row justify-start">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Registered hosts
          </div>
          <div className="w-fit h-fit rounded-xl
                border-solid border-2 border-[#C9C9C9]
                pl-3">
                <base-icon name="fa fa-search" class="relative ml-4 mr-2 my-auto"/>
              <input type="text"
                    v-model="search"
                    placeholder="Search"
                    aria-label="search"
                    className="ml-3 px-3 py-3 rounded-r-3xl">
            </div>
        </div>
        <div className="ml-auto">
          <!-- <select v-model="filter" @change="FilterSort"
              class="bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED] py-2 px-4 rounded-lg">
              <option v-for="(item, index) in items" v-bind:key="index" :value="index">{{ item }}</option>
            </select> -->
          <div className="w-[241px] p-[12.5px] bg-[#008AB6]
            text-white rounded-lg cursor-pointer
            m-auto font-semibold"
            @click="registerHosts">
            <base-icon name="fa-solid fa-user-plus"
                       color="#F8F8F8" class="mr-2"/>
            Register host
          </div>
        </div>
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-center">Name</th>
            <th className="px-6 py-3 text-center">E-mail</th>
            <th className="px-6 py-3 text-center">Telephone</th>
            <th className="px-6 py-3 text-center">Host details</th>
            <th className="px-6 py-3 text-center">Rating</th>
            <th className="px-6 py-3 text-center">DNI NIE Document</th>
            <th className="px-6 py-3 text-center">Activate or<br>Deactivate host</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <hosts-geral-table-item-component v-for="(item, index) in onFilter" v-bind:key="index"
                                            :obj="item"
                                            @editHs="editHs"
                                            @deleteHs="deleteHs"
                                            @showH="(val) => this.$emit('showHost', val)" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapState } from 'vuex';
import HostsGeralTableItemComponent from './HostsGeralTableItemComponent.vue';

export default {
  name: 'HostsGeralTableComponent',
  components: { HostsGeralTableItemComponent, BaseIcon },
  data() {
    return {
      items: ['Alphabetical', 'ID'],
      search: '',
      filter: '',
    };
  },
  computed: {
    ...mapState('Hosts', ['hosts']),
    onFilter() {
      return this.hosts.filter(item => item.name.includes(this.search));
    }
  },
  methods: {
    registerHosts() {
      this.$emit('registerHosts', true);
    },
    editHs(val) {
      this.$emit('editHosts', val);
    },
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
    FilterSort() {
      if(this.filter == 0) {
        this.hosts.sort((a, b) => b.name - a.name);
      } else {
        this.hosts.sort((a, b) => a.id - b.id);
      }
    },
  },
};
</script>
