<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-8
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between h-[56px] mb-6">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Hosts requisitions
          </div>
          <div className="flex flex-row justify-start bg-[#F8F8F8]
            rounded-3xl border-solid border-2 border-[#C9C9C9]">
            <base-icon name="fa fa-search" class="relative ml-4 mr-2 my-auto"/>
            <input type="text"
              v-model="search"
              placeholder="Search"
              aria-label="search"
              class="px-2 py-2 rounded-r-3xl">
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      v-model="filter"
                      @click="FilterSort"
                      variant="outlined" />
          </div>
        </div>
      </div>
      <table class="table-auto w-full text-sm text-center">
        <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">E-mail</th>
            <th className="px-6 py-3 text-left">Telephone</th>
            <th className="px-6 py-3 text-center">Host details</th>
            <th className="px-6 py-3 text-center min-w-[160px]">DNI NIE Document</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Negative options</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Send notification to host</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Allow to host</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <hosts-table-item-component v-for="(item, index) in onFilter"
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
import BaseIcon from '../../items/BaseIcon.vue'
import { mapState } from 'vuex';
import HostsTableItemComponent from './HostsTableItemComponent.vue';

export default {
  name: 'HostsGeralTableComponent',
  components: {
    HostsTableItemComponent,
    BaseIcon,
  },
  data() {
    return {
      items: ['Alphabetical Up', 'Alphabetical Down'],
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
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
    FilterSort() {
      if(this.filter == 'Alphabetical') {
        this.subscriptions.sort((a, b) => b.name - a.name);
      } else {
        this.subscriptions.sort((a, b) => a.name - b.name);
      }
    }
  },
};
</script>
