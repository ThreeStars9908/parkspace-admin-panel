<template>
    <div class="account">
        <page-header title="My Account" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-16 mt-8">
            <user-data />
            <password-data />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '../items/PageHeader.vue';
import UserData from '../components/Account/UserData.vue';
import PasswordData from '../components/Account/PasswordData.vue';

export default {
    name: 'AccountView',
    components: {
        PageHeader,
        UserData,
        PasswordData,
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions('Auth', ['Get_Admin_Data']),
    },
    created() {
        this.Get_Admin_Data();
    },
}
</script>
