<template>
  <div>
    <div class="geral-sub-page"
         v-if="!edit">
      <div className="mt-8 flex flex-row justify-between">
        <data-block-component :obj="{
          icon: 'pr-users',
          text: 'Total hosts',
          value: total_host,
        }"
                              :hasFilter="0" />
        <data-block-component :obj="{
          icon: 'pr-user-plus',
          text: 'New hosts',
          value: new_host,
        }"
                              :hasFilter="1" />
        <data-block-component :obj="{
          icon: 'bi-geo-alt',
          text: 'New parking spots',
          value: 0,
        }"
                              :hasFilter="2" />
        <data-block-component :obj="{
          icon: 'pr-user-minus',
          text: 'Inactive hosts',
          value: 0,
        }"
                              :hasFilter="3" />
      </div>
      <div className="my-8">
        <hosts-geral-table-component @registerHosts="registerHosts"
                                       @editHosts="editHosts"
                                       @deleteHosts="deleteHosts"
                                       @showHost="(val) => this.edit = val" />
      </div>
    </div>
    <div class="edit-sub-page"
         v-if="edit">
      <edit-hosts-subpage-component @showHost="(val) => this.edit = val" />
    </div>
    <v-dialog v-model="registerHost"
              width="auto">
      <create-host-popup @registerHosts="registerHosts" />
    </v-dialog>
    <v-dialog v-model="editHost"
              width="auto">
      <edit-host-popup @editHosts="editHosts" />
    </v-dialog>
    <v-dialog v-model="deleteHost"
              width="auto">
      <delete-host-popup @deleteHosts="deleteHosts" />
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DataBlockComponent from '../../../DataBlockComponent.vue';
import HostsGeralTableComponent from './HostsGeralTableComponent.vue';
import EditHostsSubpageComponent from '../EditSubpage/EditHostsSubpageComponent.vue';
import CreateHostPopup from '../../../../PopupComponents/UserManagementPopups/CreateHostPopup.vue';
import EditHostPopup from '../../../../PopupComponents/UserManagementPopups/EditHostPopup.vue';
import DeleteHostPopup from '../../../../PopupComponents/UserManagementPopups/DeleteHostPopup.vue';

export default {
  name: 'GeralHostsSubpageComponent',
  components: {
    DataBlockComponent,
    HostsGeralTableComponent,
    EditHostsSubpageComponent,
    CreateHostPopup,
    EditHostPopup,
    DeleteHostPopup,
  },
  data() {
    return {
      edit: false,
      registerHost: false,
      editHost: false,
      deleteHost: false,
    };
  },
  computed: {
    ...mapState('Hosts', ['total_host', 'new_host']),
  },
  methods: {
    ...mapActions('Hosts', ['Get_Hosts']),
    registerHosts(val) {
      this.registerHost = val;
    },
    editHosts(val) {
      this.editHost = val;
    },
    deleteHosts(val) {
      this.deleteHost = val;
    },
  },
  created() {
    this.Get_Hosts();
  },
};
</script>
