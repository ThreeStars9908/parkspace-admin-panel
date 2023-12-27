<template>
  <div>
    <div v-if="isGeral" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="col1">
        <user-data-component
          @enableClicked="enableClicked"
          @showC="(val) => this.$emit('showClient', val)" />
        <payment-methods-component />
      </div>
      <div class="col2">
        <vehicles-component />
        <addresses-component />
      </div>
    </div>
    <div v-if="isGeral">
      <book-history-table-component @changeToDescript="changeToDescript"/>
    </div>
    <div v-if="!isGeral">
      <finance-specific-page-component @changeToDescript="changeToDescript" />
    </div>
    <v-dialog v-model="enabled" width="auto">
      <enable-client-popup @enableClicked="enableClicked"/>
    </v-dialog>
  </div>
</template>

<script>
import UserDataComponent from './UserDataComponent.vue';
import PaymentMethodsComponent from './PaymentMethodsComponent.vue';
import VehiclesComponent from './VehiclesComponent.vue';
import AddressesComponent from './AddressesComponent.vue';
import BookHistoryTableComponent from './BookHistoryTableComponent.vue';

import EnableClientPopup from '../../../PopupComponents/UserManagementPopups/EnableClientPopup.vue'
import FinanceSpecificPageComponent from '../../../Booking/FinanceSpecificPageComponent.vue'

export default {
  name: 'EditClientSubpageComponent',
  components: {
    UserDataComponent,
    PaymentMethodsComponent,
    VehiclesComponent,
    AddressesComponent,
    BookHistoryTableComponent,
    EnableClientPopup,
    FinanceSpecificPageComponent,
  },
  data() {
    return {
      enabled: false,
      isGeral: true,
    };
  },
  methods: {
    enableClicked(val) {
      this.enabled = val;
    },
    changeToDescript(val) {
      this.isGeral = val;
    },
  },
};
</script>
