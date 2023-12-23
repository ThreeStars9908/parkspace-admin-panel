<template>
  <div class="user-data">
    <div class="header"
        className="flex flex-row justify-between mb-2">
        <div className="text-left font-semibold">
            User data
        </div>
        <text-button title="Edit" icon="fa fa-pen" :mobile="isMobile" />
    </div>
    <div class="block"
        className="p-6 mb-4 shadow-[4px_6px_40px_0px_#00000020] rounded-lg">
        <div className="font-semibold text-left mb-4">Full name</div>
        <input-form
            type="text"
            placeholder="Name"
            v-model:value="adminData.name"
        />
        <div className="font-semibold text-left mb-4">Telephone</div>
        <input-form
            type="text"
            placeholder="Telephone"
            v-model:value="adminData.cellphone"
        />
        <div className="font-semibold text-left mb-4">E-mail</div>
        <input-form
            type="text"
            placeholder="E-mail"
            v-model:value="adminData.email"
        />
        <default-button title="Save Changes" @click="onSave" />
    </div>
    <v-dialog v-model="isSave"
        width="auto">
        <change-user-dialog :obj="adminData" @saveUserdata="saveUserdata"/>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TextButton from '../../items/TextButton.vue';
import DefaultButton from '../../items/DefaultButton.vue';
import InputForm from '../../items/InputForm.vue';
import ChangeUserDialog from './ChangeUserDialog.vue'

export default {
    name: 'UserData',
    components: {
        TextButton,
        DefaultButton,
        InputForm,
        ChangeUserDialog,
    },
    data() {
        return {
            isSave: false,
        }
    },
    computed: {
        ...mapState('Auth', ['adminData']),
    },
    methods: {
        onSave() {
            this.isSave = true;
        },
        saveUserdata(val) {
            this.isSave = val;
        },
    },
}
</script>
