<template>
  <div>
    <div>
      <div className="w-full max-h-[650px] mt-4 rounded-lg
      py-[16px] px-[24px] overflow-auto
      scrollbar scrollbar-thumb-[#008AB6]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
        <table class="table-auto w-full
        text-[16px] text-[#3F3F44]
        text-left">
          <thead className="font-normal
          border-b-[1px] border-[#C9C9C9]">
            <tr>
              <th className="pb-[12px] text-center">Name</th>
              <th className="pb-[12px] text-center min-w-[180px]">E-mail</th>
              <th className="pb-[12px] text-center min-w-[180px]">Telephone</th>
              <th className="pb-[12px] text-center min-w-[180px]">User Type</th>
              <th className="pb-[12px] text-center min-w-[180px]">Enable User</th>
              <th className="pb-[12px] text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="font-light">
            <registered-admin-table-item-component v-for="(item, index) in admins"
                                                   v-bind:key="index"
                                                   :obj="item"
                                                   @editA="(val) => {
                                                     this.$emit('editAdmin', val);
                                                   }" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RegisteredAdminTableItemComponent from './RegisteredAdminTableItemComponent.vue';

export default {
  name: 'RegisteredSubpageComponent',
  components: { RegisteredAdminTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        name: 'Admin A',
        email: 'admina@gmail.com',
        phone: '419909230',
        type: 'Admin',
      },
      items: ['Alfabetical', 'Date'],
    };
  },
  computed: {
    ...mapState('Admins', ['admins']),
  },
};
</script>
