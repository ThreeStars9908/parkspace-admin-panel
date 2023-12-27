<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg
    shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="text-left font-semibold text-[16px] mb-4">{{ $t('set') }} {{ $t('cashback') }} {{ $t('percentage') }}</div>
        <div v-for="(item, index) in cashback" v-bind:key="index"
            className="mb-4">
            <div className="text-left text-[16px] font-normal text-[#3F3F44] mb-2">User type</div>
            <div className="flex flex-row justify-between">
                <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <select v-model="item.user_type"
                            class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]
                            border-2 border-solid border-[#EBF0ED]">
                            <option value="renter">renter</option>
                            <option value="host">host</option>
                        </select>
                    </div>                    
                    <div className="h-fit rounded-lg mb-2
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="item.percentage"
                            className="w-full px-[10px] py-2">
                    </div>
                </div>
                <div className="mt-2">
                    <base-icon name="fa fa-pen" color="#323232" />
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <div>
    <select v-model="element.prices[0].type"
        className="h-[46px] w-full rounded-lg py-2 px-4
        bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
        <option v-for="(item, index) in amount_type"
            v-bind:key="index" :value="index">{{ item }}</option>
    </select>
    <base-icon name="fa fa-angle-down" color="#7E7E7E"
        class="cursor-pointer relative mt-3 -ml-9" />
</div> -->
<!-- eslint-disable -->
<script>
import { mapState } from 'vuex';
import BaseIcon from '../../items/BaseIcon.vue'

export default {
    name: 'CashbackBlockComponent',
    computed: {
        ...mapState('Subscriptions', ['cashback']),
    },
    components: {
        BaseIcon,
    },
}
</script>
