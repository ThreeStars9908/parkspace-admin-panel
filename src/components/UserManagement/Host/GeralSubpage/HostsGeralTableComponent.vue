<!-- eslint-disable -->
<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-y-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Registered clients
          </div>
          <search-form v-model:value="search"
            placeholder="search" />
        </div>
        <div className="ml-auto">
          <div className="text-right">
            <icon-button title="Register host"
              :mobile="isClosed"
              icon="fa-solid fa-user-plus" color="#F9F9F9"
              @click="this.$emit('registerHosts', true);"/>
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
import SearchForm from '@/assets/components/forms/SearchForm.vue';
import IconButton from '@/items/IconButton.vue';
import { mapState } from 'vuex';
import HostsGeralTableItemComponent from './HostsGeralTableItemComponent.vue';

export default {
  name: 'HostsGeralTableComponent',
  components: {
    HostsGeralTableItemComponent,
    IconButton,
    SearchForm,
  },
  data() {
    return {
      items: ['Alphabetical', 'ID'],
      search: '',
      filter: '',
      isClosed: false,
    };
  },
  computed: {
    ...mapState('Hosts', ['hosts']),
    onFilter() {
      return this.hosts.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
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
    onResize() {
      if (window.innerWidth <= 768) {
        this.isClosed = true;
      } else {
        this.isClosed = false;
      }
    },
  },
};
</script>
