<!-- eslint-disable -->
<template>
    <div className="support">
        
        <page-header title="support" />
      <div class="table-component" v-if="isGeral"
        className="h-[720px] mt-8
            shadow-[4px_6px_30px_0px_#00000020] rounded-lg
            py-[16px] px-[24px] overflow-auto
            scrollbar scrollbar-thumb-[#008AB6]
            scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
        <div class="title"
            className="flex flex-row justify-between mt-4">
            <div className="text-[16px] font-semibold text-left mb-4 mr-4 my-auto">
                Support requests
            </div>
        </div>
        <table class="table-auto w-full text-sm text-center overflow-x-auto">
            <thead className="text-md text-left border-b-[1px] border-[#C9C9C9]">
                <tr>
                    <th className="px-6 py-3 text-left">Ticket type</th>
                    <th className="px-6 py-3 text-center">User</th>
                    <th className="px-6 py-3 text-center">Parking ID</th>
                    <th className="px-6 py-3 text-center">User type</th>
                    <th className="px-6 py-3 text-center">Time/Date received</th>
                    <th className="px-6 py-3 text-center">Solve ticket</th>
                    <th className="px-6 py-3 text-center">Actions</th>
                </tr>
            </thead>
            <tbody className="font-light">
                <tr v-for="(item, index) in supports" v-bind:key="index">
                    <td className="text-[14px] px-6 py-3 text-left font-semibold">{{ item.tickets.ticket_type }}</td>
                    <td className="text-[14px] px-6 py-3 text-center">{{ item.user.name }}</td>
                    <td className="text-[14px] px-6 py-3 text-center">{{ item.parkingSlotId }}</td>
                    <td className="text-[14px] px-6 py-3 text-center">{{ item.user.role }}</td>
                    <td className="text-[14px] px-6 py-3 text-center">{{ item.time }} {{ item.time }}</td>
                    <td className="text-[14px] px-6 py-3 text-center">
                        <VueToggles v-model="item.status"
                            :disabled="item.status"
                            @click="Enabled({id: item.id, status: (item.status ? 1 : 0)})"
                            checkedBg="#1C8E33" :height="24" :width="48"
                            style="margin: auto"/>
                    </td>
                    <td className="text-[14px] px-6 py-3 text-center">
                        <base-icon name="fa-regular fa-comment" size="2em" color="#323232"
                            @click="clickChat(item)"/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div v-if="!isGeral">
        <chat-component @backtoTicket="backtoTicket"/>
      </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import PageHeader from '../../src/assets/components/headers/PageHeader.vue'
import { mapState, mapActions } from 'vuex';
import ChatComponent from '../components/Support/ChatComponents.vue';
import { VueToggles } from 'vue-toggles';
import BaseIcon from '../items/BaseIcon.vue'

export default {
    name: 'SupportView',
    data() {
        return {
            isGeral: true,
        };
    },
    computed: {
        ...mapState('Supports', ['supports']),
    },
    components: {
        VueToggles,
        ChatComponent,
        PageHeader,
        BaseIcon,
    },
    methods: {
        ...mapActions('Supports', ['Show_SupportsData', 'Select_SupportData', 'Enable_SupportData']),
        backtoTicket(val) {
            this.isGeral = val;
        },
        clickChat(val) {
            this.Select_SupportData(val);
            this.isGeral = false;
        },
        Enabled(val) {
            this.Enable_SupportData(val);
        },
    },
    created() {
        this.Show_SupportsData();
    },
}
</script>
