<!-- eslint-disable -->
<template>
    <div class="chat-component" 
        className="w-full h-[720px] mt-8
            shadow-[4px_6px_30px_0px_#00000020] rounded-lg
            py-[16px] px-[24px] overflow-y-auto
            scrollbar scrollbar-thumb-[#008AB6]
            scrollbar-track-[#D9D9D9] scrollbar-thumb-rounded">
        <div class="header"
            className="grid grid-cols-2 justify-between
            mt-4 mb-8">
            <div className="flex flex-row justify-start">
                    <div className="cursor-pointer"
                        @click="this.$emit('backtoTicket', true)">
                        <base-icon
                            name="fa-solid fa-circle-arrow-left"
                            size="2em"
                            color="#008AB6" />
                    </div>
                <div className="font-semibold text-[16px] text-left my-auto ml-4">
                    Back to tickets
                </div>
            </div>
        </div>
        <div class="block"
            className="m-4 border-solid">
            <div className="h-[540px] w-full grid grid-cols-5 justify-between">
                <div className="border-4 border-[#008AB6] rounded-l-xl">
                    <div className="h-[128px] w-[128px] mx-auto mt-4
                    border-4 border-[#008AB6] rounded-full">
                        <img src="../../../public/assets/avatar/3753172.png"
                            style="border-radius: 50%;"/>
                    </div>
                    <div className="mx-auto mt-4">
                        <div className="text-[16px] font-semibold">{{ selected_support.user.name }}</div>
                        <div className="text-[16px] text-[#7E7E7E] font-normal">{{ selected_support.parkingSlotId }}</div>
                    </div>
                    <div className="mx-auto mt-8 text-[16px]">
                        <div className="text-[#7E7E7E] font-normal mb-4">{{ selected_support.tickets.ticket_type }}</div>
                        <div className="text-[#7E7E7E] font-normal mb-4">{{ selected_support.user.role }}</div>
                        <div className="text-[#7E7E7E] font-normal mb-4">
                            {{ selected_support.time }} {{ selected_support.time }}
                        </div>
                        <div className="text-[#7E7E7E] font-normal mb-4">{{ selected_support.status? 'Resolved': 'Open'}}</div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-rows-6 justify-between">
                    <div className="bg-[#008AB6] text-white lg:w-[480px] md:w-[480px] xl:w-[960px]
                        text-[14px] rounded-tr-xl p-4 text-left">
                        {{ selected_support.tickets.ticket_type }}
                    </div>
                    <div className="bg-[#F8F8F8] row-span-4
                        border-r-4 border-[#008AB6]">
                    </div>
                    <div className="bg-[#008AB6] text-white
                        rounded-br-xl p-4 text-left">
                        <input className="bg-white w-full 
                            px-4 py-4 rounded-lg">
                            <base-icon
                            name="fa-solid fa-paper-plane"
                            color="#008AB6" 
                            class="absolute -ml-10 mt-5"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '../../items/BaseIcon.vue'
import { mapState } from 'vuex';

export default {
    name: 'ChatComponent',
    computed: {
        ...mapState('Supports', ['selected_support']),
    },
    components: {
        BaseIcon
    }
}
</script>
