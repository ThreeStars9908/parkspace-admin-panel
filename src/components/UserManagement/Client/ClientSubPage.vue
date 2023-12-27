<template>
  <div class="client-sub-page">
    <div v-if="!edit" 
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12 xl:gap-24">
        <data-block text="Total clients"
            icon="fa-solid fa-users"
            color="#0F83C9"
            :value="total_client"/>
        <data-block text="New clients"
            icon="fa-solid fa-user-plus"
            color="#0F83C9"
            desc="Last 7 days"
            :value="new_client"/>
        <data-block text="Inactive clients"
            icon="fa-solid fa-user-xmark"
            color="#0F83C9"
            desc="Inactives for more than 30 days"
            value="0"/>
    </div>
    <div v-if="!edit" 
        className="my-8">
        <user-table-component 
            @showClient="(val) => this.edit = val"
            @registerClients="registerClients"
            @editClients="editClients"
            @deleteClients="deleteClients"/>
    </div>
    <div class="edit-sub-page" v-if="edit">
        <edit-client-subpage-component @showClient="(val) => this.edit = val" />
    </div>
    <v-dialog v-model="registerClient"
              width="auto">
      <create-client @registerClients="registerClients" />
    </v-dialog>
    <v-dialog v-model="editClient"
              width="auto">
      <edit-client @editClients="editClients" />
    </v-dialog>
    <v-dialog v-model="deleteClient"
              width="auto">
      <delete-client @deleteClients="deleteClients" />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import DataBlock from '../../../items/DataBlock.vue'

import EditClientSubpageComponent from './EditSubpage/EditClientSubpageComponent.vue'
import EditClient from './Popup/EditClient.vue'
import UserTableComponent from './UserTableComponent.vue'
import CreateClient from './Popup/CreateClient.vue'
import DeleteClient from './Popup/DeleteClient.vue'

export default {
    name: 'ClientSubPage',
    components: {
        DataBlock,
        UserTableComponent,
        EditClient,
        CreateClient,
        DeleteClient,
        EditClientSubpageComponent,
    },
    data() {
        return {
            edit: false,
            registerClient: false,
            editClient: false,
            deleteClient: false,
        }
    },
    computed: {
    ...mapState('Clients', ['total_client', 'new_client']),
    },
    methods: {
        ...mapActions('Clients', ['Get_Clients']),
        registerClients(val) {
            this.registerClient = val;
        },
        editClients(val) {
            this.editClient = val;
        },
        deleteClients(val) {
            this.deleteClient = val;
        },
    },
    created() {
        this.Get_Clients();
    },
}
</script>
