<template>
  <div class="host-sub-page">
    <div v-if="!edit"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-6 xl:gap-12">
        <data-block text="Total hosts"
            icon="fa-solid fa-users"
            color="#0F83C9"
            :value="total_host"/>
        <data-block text="New hosts"
            icon="fa-solid fa-user-plus"
            color="#0F83C9"
            desc="Last 7 days"
            :value="new_host"/>
        <data-block text="New parking slots"
            icon="fa-solid fa-location-dot"
            color="#0F83C9"
            desc="Last 7 days"
            value="0"/>
        <data-block text="Inactive hosts"
            icon="fa-solid fa-user-xmark"
            color="#0F83C9"
            desc="Inactives for more than 30 days"
            value="0"/>
    </div>
    <div className="my-8" v-if="!edit">
        <hosts-geral-table-component @registerHosts="registerHosts"
                                       @editHosts="editHosts"
                                       @deleteHosts="deleteHosts"
                                       @showHost="(val) => this.edit = val" />
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
import DataBlock from '../../../items/DataBlock.vue'
import HostsGeralTableComponent from './GeralSubpage/HostsGeralTableComponent.vue'
import CreateHostPopup from '../../PopupComponents/UserManagementPopups/CreateHostPopup.vue'
import EditHostPopup from '../../PopupComponents/UserManagementPopups/EditHostPopup.vue'
import DeleteHostPopup from '../../PopupComponents/UserManagementPopups/DeleteHostPopup.vue'
import EditHostsSubpageComponent from '../../UserManagement/Host/EditSubpage/EditHostsSubpageComponent.vue'

export default {
    name: 'HostSubPage',
    components: {
        DataBlock,
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
        }
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
}
</script>
