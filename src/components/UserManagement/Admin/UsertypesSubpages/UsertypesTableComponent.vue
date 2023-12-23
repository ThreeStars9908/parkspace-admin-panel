<template>
  <div>
    <div className="w-full max-h-[650px] mt-4 rounded-lg
      py-[16px] px-[24px] overflow-auto relative
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <table class="table-auto w-full
        text-[16px] text-[#3F3F44]
        text-left">
        <thead className="font-normal
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="pb-[12px] text-left min-w-[180px]">User Type</th>
            <th className="pb-[12px] text-center min-w-[180px]">Registered Users</th>
            <th className="pb-[12px] text-center min-w-[180px]">Enable User type</th>
            <th className="pb-[12px] text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <usertypes-table-item-component v-for="(item, index) in usertypes"
            v-bind:key="index" :obj="item"
            @changeG="(val) => { this.$emit('changeGeral', val); }"
            @deleteU="(val) => { this.$emit('deleteUsertype', val); }"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UsertypesTableItemComponent from './UsertypesTableItemComponent.vue';

export default {
  name: 'GeralAdminTableComponent',
  components: { UsertypesTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        type: 'Client',
        users: [
          'User 1',
          'User 2',
        ],
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  computed: {
    ...mapState('Admins', ['usertypes']),
  },
  methods: {
    ...mapActions('Admins', ['Get_Usertypes']),
  },
  created() {
    this.Get_Usertypes();
  },
};
</script>
