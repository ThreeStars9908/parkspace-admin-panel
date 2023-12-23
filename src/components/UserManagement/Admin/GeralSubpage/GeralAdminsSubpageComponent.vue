<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <div class="sub-menu"
         className="mt-[21px] h-[791px]
         shadow-[4px_6px_30px_0px_#00000020] p-[32px]"
         v-if="isGeral == 'Page'">
      <div className="flex flex-row">
        <div className="mr-auto">
          <div class="menu"
               className="flex flex-row
               text-[16px] font-normal mt-4">
            <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
            <div :className="['mr-[57px] cursor-pointer '
              + (this.isUser == 'registered' ? 'font-semibold' : '')]"
                 @click="changePage('registered')">
              Registered Admins
            </div>
            <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
            <div :className="['mr-[57px] cursor-pointer '
              + (this.isUser == 'types' ? 'font-semibold' : '')]"
                 @click="changePage('types')">
              User Types
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <div className="flex flex-row h-[56px]">
            <!-- <div className="w-[230px] text-right mr-4"
                 v-if="isUser == 'registered'">
              <v-select label="Filter"
                        :items="this.items"
                        variant="outlined" />
            </div> -->
            <div className="p-[12.5px] bg-[#008AB6]
            text-white rounded-lg cursor-pointer
            m-auto font-semibold"
                 @click="changeGeral('NewUsertype')">
              <base-icon name="fa fa-plus-circle"
                         color="white"
                         scale="1.25" />
              Register user type
            </div>
            <div className="p-[12.5px] bg-[#008AB6]
            text-white rounded-[8px] cursor-pointer
            m-auto font-semibold ml-4"
            @click="this.newAdminVal = true;">
              <base-icon name="fa fa-user-plus"
                         color="white"
                         scale="1.25" />
              Register admin
            </div>
            <!-- <div className="w-fit h-fit
              rounded-[10px] border-2
               border-solid border-[#C9C9C9]
               pl-3" v-if="isUser == 'types'">
              <input type="text"
                     v-model="search"
                     placeholder="User type name"
                     aria-label="User type name"
                     className="rounded-[10px] px-2 py-3 w-[360px]">
            </div> -->
          </div>
        </div>
      </div>
      <div class="sub-page">
        <registered-subpage-component v-if="isUser == 'registered'"
                                      @editAdmin="(val) => {
                                        this.editAdminVal = val
                                      }" />
        <usertypes-table-component v-if="isUser == 'types'"
                                     @changeGeral="changeGeral"
                                     @deleteUsertype="(val) => this.deleteUsertype = val" />
      </div>
    </div>
    <div v-if="isGeral == 'NewUsertype'">
      <register-usertypes-component @showA="(val) => {this.isGeral = val, this.isUser = 'types' }"/>
    </div>
    <div v-if="isGeral == 'EditUsertype'">
      <edit-usertypes-component @showA="(val) => { this.isGeral = val, this.isUser = 'types' }"
        @deleteUsertype="(val) => this.deleteUsertype = val" />
    </div>
    <v-dialog v-model="newAdminVal"
              width="auto">
      <create-admin-popup @registerAdmin="(val) => this.newAdminVal = val" />
    </v-dialog>
    <v-dialog v-model="editAdminVal"
              width="auto">
      <edit-admin-popup @editAdmin="(val) => this.editAdminVal = val" />
    </v-dialog>
    <v-dialog v-model="deleteUsertype"
              width="auto">
      <delete-usertype-popup @deleteUsertype="(val) => this.deleteUsertype = val" />
    </v-dialog>
  </div>
</template>

<script>
import RegisteredSubpageComponent from '../RegisteredSubpages/RegisteredSubpageComponent.vue';
import UsertypesTableComponent from '../UsertypesSubpages/UsertypesTableComponent.vue';
import EditUsertypesComponent from '../UsertypesSubpages/EditUsertypesComponent.vue';
import RegisterUsertypesComponent from '../UsertypesSubpages/RegisterUsertypesComponent.vue';

import CreateAdminPopup from '../../../PopupComponents/UserManagementPopups/CreateAdminPopup.vue'
import EditAdminPopup from '../../../PopupComponents/UserManagementPopups/EditAdminPopup.vue';
import DeleteUsertypePopup from '../../../PopupComponents/UserManagementPopups/DeleteUsertypePopup.vue';
import BaseIcon from '@/items/BaseIcon.vue';

export default {
  name: 'GeralAdminsSubpageComponent',
  components: {
    RegisteredSubpageComponent,
    UsertypesTableComponent,
    CreateAdminPopup,
    EditAdminPopup,
    EditUsertypesComponent,
    DeleteUsertypePopup,
    RegisterUsertypesComponent,
    BaseIcon,
  },
  data() {
    return {
      isUser: 'registered',
      isGeral: 'Page',
      editAdminVal: false,
      newAdminVal: false,
      deleteUsertype: false,
      items: [
        'Admin',
        'SubAdmin',
      ],
    };
  },
  methods: {
    changePage(val) {
      this.isUser = val;
    },
    changeGeral(val) {
      this.isGeral = val;
    },
  },
};
</script>
