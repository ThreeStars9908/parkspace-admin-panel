<template>
  <div class="table-component">
    <div className="w-full h-[580px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <div class="title"
           className="grid grid-cols-1 lg:grid-cols-2 h-[56px] gap-4 mb-6">
        <div className="flex flex-row justify-start">
          <div className="text-[16px] font-semibold text-left mb-[16px] mr-[20px] my-auto">
            Registered clients
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
        <div className="flex flex-row justify-end">
          <div className="w-[230px] text-right mr-[40px]">
            <select v-model="filter" @change="FilterSort"
              class="bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED] py-2 px-4 rounded-lg">
              <option v-for="(item, index) in items" v-bind:key="index" :value="index">{{ item }}</option>
            </select>
          </div>
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
import BaseIcon from '../../../items/BaseIcon.vue';
import { mapState } from 'vuex';
import IconButton from '../../../items/IconButton.vue';
import UserTableItemComponent from './UserTableItemComponent.vue';

export default {
  name: 'UserTableComponent',
  components: { 
    UserTableItemComponent,
    IconButton,
    BaseIcon,
  },
  data() {
    return {
      items: ['Alphabetical', 'ID'],
      search: '',
      filter: '',
    };
  },
  computed: {
    ...mapState('Clients', ['clients']),
    onFilter() {
      return this.clients.filter(item => item.name.includes(this.search));
    },
  },
  methods: {
    FilterSort() {
      if(this.filter == 0) {
        this.clients.sort((a, b) => b.name - a.name);
      } else {
        this.clients.sort((a, b) => a.id - b.id);
      }
    },
  }
};
</script>
