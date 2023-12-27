<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-8
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="flex flex-row justify-between h-[56px] mb-6 gap-4">
        <div className="flex flex-row">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Hosts requisitions
          </div>
          <search-form v-model:value="search"
            placeholder="search" />
        </div>
        <!-- <div className="flex flex-row">
          <div className="w-[230px] text-right mb-[16px] mr-[40px]">
            <v-select label="Filter"
                      :items="this.items"
                      v-model="filter"
                      @click:append="FilterSort"
                      variant="outlined" />
          </div>
        </div> -->
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
import SearchForm from '@/assets/components/forms/SearchForm.vue';
import { mapState } from 'vuex';
import HostsTableItemComponent from './HostsTableItemComponent.vue';

export default {
  name: 'HostsGeralTableComponent',
  components: {
    HostsTableItemComponent,
    SearchForm,
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
      return this.hosts.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  methods: {
    deleteHs(val) {
      this.$emit('deleteHosts', val);
    },
    FilterSort() {
      if(this.filter == 'Alphabetical Up') {
        this.hosts.sort((a, b) => b.name - a.name);
      } else {
        this.hosts.sort((a, b) => a.name - b.name);
      }
    }
  },
};
</script>
