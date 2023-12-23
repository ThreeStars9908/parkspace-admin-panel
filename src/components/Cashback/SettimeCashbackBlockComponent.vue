<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg
    shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="text-left font-semibold text-[16px] mb-4">Set time frame and quantity user can transfer the cashback</div>
        <div v-for="(item, index) in cashback" v-bind:key="index"
            className="flex flex-row justify-between mb-4">
            <div className="w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-2">
                    User type
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    <select v-model="item.user_type"
                            class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]">
                            <option value="renter">renter</option>
                            <option value="host">host</option>
                        </select>
                    </div>
                </div>
                <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-2">
                    Time(in days)
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="item.time"
                            className="w-full px-[10px] py-2">
                    </div>
                </div>
                <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-2">
                    Amount needed
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="item.amount"
                            className="w-full px-[10px] py-2">
                    </div>
                </div>    
            </div>
            <div className="mt-8">
                <base-icon name="fa fa-pen" color="#323232" />
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import { mapState } from 'vuex';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
    name: 'SettimeCashbackBlockComponent',
    computed: {
        ...mapState('Subscriptions', ['cashback']),
    },
    components: {
        BaseIcon
    }
}
</script>
