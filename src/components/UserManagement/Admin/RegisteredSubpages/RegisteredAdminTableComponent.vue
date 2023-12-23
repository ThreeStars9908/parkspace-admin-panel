<template>
  <div>
    <div className="w-full max-h-[650px] mt-4
      shadow-[4px_6px_30px_0px_#00000020] rounded-lg
      py-[16px] px-[24px] overflow-y-auto
      scrollbar scrollbar-thumb-[#EDBD3A]
      scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
      <table class="table-auto w-full
        text-[16px] text-[#3F3F44]
        text-left">
        <thead className="font-normal
          border-b-[1px] border-[#C9C9C9]">
          <tr>
            <th className="pb-[12px] text-center">Name</th>
            <th className="pb-[12px] text-center">E-mail</th>
            <th className="pb-[12px] text-center">Telephone</th>
            <th className="pb-[12px] text-center">User Type</th>
            <th className="pb-[12px] text-center">Enable</th>
            <th className="pb-[12px] text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="font-light">
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
          <registered-admin-table-item-component :obj="this.objeto" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RegisteredAdminTableItemComponent from './RegisteredAdminTableItemComponent.vue';

export default {
  name: 'RegisteredAdminTableComponent',
  components: { RegisteredAdminTableItemComponent },
  data() {
    return {
      objeto: {
        id: 1,
        name: 'Admin A',
        email: 'admina@gmail.com',
        phone: '419909230',
        type: 'admin',
      },
      items: ['Alfabetical', 'Date'],
    };
  },
};
</script>
