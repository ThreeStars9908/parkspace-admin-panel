<!-- eslint-disable -->
<template>
    <div>
        <div className="w-full max-h-[650px] mt-4 py-[16px] px-[24px] overflow-y-auto
        shadow-[4px_6px_30px_0px_#00000020]
        scrollbar scrollbar-thumb-[#008AB6]
        scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
            <div class="header"
                className="grid grid-cols-2 justify-between mb-[16px]">
                <div className="flex flex-row justify-start">
                        <div className="cursor-pointer"
                            @click="this.$emit('showA', 'Page')">
                            <base-icon name="fa fa-arrow-circle-left"
                                color="#008AB6" size="2em" />
                        </div>
                    <div className="font-semibold text-[16px] my-auto ml-4">
                        Register user type
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="mr-4 my-auto">
                        <input v-model="name"
                            placeholder="User type name"
                            className="h-fit w-full rounded-lg px-4 py-2
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    </div>
                </div>
            </div>
            <table class="table-auto w-full relative overflow-auto
            text-[16px] text-[#3F3F44] text-left">
                <thead className="font-normal
                    border-b-[1px] border-[#C9C9C9]">
                    <tr>
                        <th className="pb-[12px] text-left min-w-[180px]">Page</th>
                        <th className="pb-[12px] text-center">Section</th>
                        <th className="pb-[12px] text-right min-w-[180px]">Enable Access</th>
                    </tr>
                </thead>
                <tbody className="font-light">
                    <tr v-for="(item, index) in menus" v-bind:key="index">
                        <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-left">
                            {{ item.title }}
                        </td>
                        <td className="text-[#3F3F44] text-[14px] font-light py-[24px] text-center">
                            {{ item.subtitle ? item.subtitle : '-' }}
                        </td>
                        <td className="text-[#3F3F44] text-[14px] font-light py-[24px] float-right mr-8">
                            <VueToggles v-model="item.enable"
                                        :height="24"
                                        :width="48"
                                        checkedBg="#1C8E33" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="w-[241px] p-2 bg-[#008AB6]
        float-right text-white rounded-lg
        mt-4 mr-4 font-semibold cursor-pointer"
            @click="SaveNewUserType">
            <base-icon name="fa fa-check-square" />
            Save new user type
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapState, mapActions } from 'vuex';
import { VueToggles } from 'vue-toggles';

export default {
  name: 'RegisterUsertypesComponent',
  components: { VueToggles, BaseIcon },
  data() {
    return {
        enable: true,
        name: '',
    }
  },
  computed: {
    ...mapState('Admins', ['menus', 'admins']),
  },
  methods: {
    ...mapActions('Admins', ['Create_NewUsertypes']),
    SaveNewUserType() {
        const data = {name: this.name, selected: '', users: '',};
        this.menus.forEach((element, index) => {
            if(element.enable == true) {
                data.selected += element.id;
                if(index + 1 < this.menus.length)
                    data.selected += ',';
            }
        });
        this.admins.forEach((element, index) => {
            data.users += element.name;
            if(index + 1 < this.admins.length)
                data.users += ',';
        });
        this.$emit('showA', 'Page');
        this.Create_NewUsertypes(data);
    },
  },
}

</script>