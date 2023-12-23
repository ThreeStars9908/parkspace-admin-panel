<template>
    <div class="user_management">
        <page-header title="User Management" />
        <div class="sub-menu"
            className="mt-4">
            <div className="mr-auto">
                <div class="menu"
                className="font-normal flex flex-row justify-start">
                    <div :className="['mr-8 cursor-pointer '
                        + (this.isPage == 'clients' ? 'font-semibold' : '')]"
                        @click="changePage('clients')">
                        Clients
                    </div>
                    <div :className="['mr-8 cursor-pointer '
                        + (this.isPage == 'hosts' ? 'font-semibold' : '')]"
                        @click="changePage('hosts')">
                        Hosts
                    </div>
                    <div :className="['mr-8 cursor-pointer '
                        + (this.isPage == 'admins' ? 'font-semibold' : '')]"
                        @click="changePage('admins')">
                        Admins
                    </div>
                </div>
            </div>
        </div>
        <div class="sub-page"
            className="mt-8">
            <client-sub-page v-if="this.isPage == 'clients'"/>
            <host-sub-page v-if="this.isPage == 'hosts'"/>
            <geral-admins-subpage-component v-if="this.isPage == 'admins'"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../items/PageHeader.vue';
import GeralAdminsSubpageComponent from '../components/UserManagement/Admin/GeralSubpage/GeralAdminsSubpageComponent.vue';
import ClientSubPage from '../components/UserManagement/Client/ClientSubPage.vue'
import HostSubPage from '../components/UserManagement/Host/HostSubPage.vue';

export default {
    name: 'UserManagementView',
    components: {
        ClientSubPage,
        HostSubPage,
        PageHeader,
        GeralAdminsSubpageComponent,
    },
    data() {
        return {
            isPage: 'clients',
        }
    },
    methods: {
        ...mapActions('Clients', ['Get_Clients']),
        ...mapActions('Admins', ['Get_All_Admins', 'Get_Menus', 'Get_Usertypes']),
        ...mapActions('Booking', ['Show_Booking']),
        ...mapActions('ParkingSlots', ['Show_ParkingSlots']),
        changePage(val) {
            this.isPage = val;
        },
    },
    created() {
        this.Get_Clients();
        this.Get_All_Admins();
        this.Get_Menus();
        this.Get_Usertypes();
        this.Show_Booking();
        this.Show_ParkingSlots();
    }
}
</script>
