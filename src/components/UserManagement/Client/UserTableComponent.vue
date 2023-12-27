<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
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
            <icon-button title="Register client"
              icon="fa-solid fa-user-plus" color="#F9F9F9"
              @click="this.$emit('registerClients', true);"/>
          </div>
        </div>
      </div>
      <table class="table-auto w-full
        text-sm text-[#3F3F44]
        text-center">
        <thead className="text-md text-left
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">E-mail</th>
            <th className="px-6 py-3 text-center">Telephone</th>
            <th className="px-6 py-3 text-center min-w-[160px]">Client history and Data</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <user-table-item-component v-for="(item, index) in onFilter" v-bind:key="index"
                                     :obj="item"
                                     @editCs="(val) => this.$emit('editClients', val)"
                                     @deleteCs="(val) => this.$emit('deleteClients', val)"
                                     @showC="(val) => this.$emit('showClient', val)" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SearchForm from '../../../assets/components/forms/SearchForm.vue';
import IconButton from '../../../items/IconButton.vue'
import { mapState, mapActions } from 'vuex';
import UserTableItemComponent from './UserTableItemComponent.vue';

export default {
  name: 'UserTableComponent',
  components: { 
    UserTableItemComponent,
    SearchForm,
    IconButton,
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
    ...mapState('Clients', ['clients']),
    onFilter() {
      return this.clients.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    ...mapActions('Clients', ['Get_Clients']),
    onResize() {
      if (window.innerWidth <= 768) {
        this.isClosed = true;
      } else {
        this.isClosed = false;
      }
    },
    // FilterSort() {
    //   if(this.filter == 0) {
    //     this.clients.sort((a, b) => b.name - a.name);
    //   } else {
    //     this.clients.sort((a, b) => a.id - b.id);
    //   }
    // },1
  },
  created() {
    this.Get_Clients();
  },
};
</script>
