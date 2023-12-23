<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg w-full
    shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="flex flex-row justify-between mb-4">
            <div className="text-left font-semibold">Add new region and country active</div>
        </div>
        <div className="flex flex-row justify-between gap-8 text-left">
            <div className="w-[40%] flex flex-col justify-start">
                <span className="mb-2">Country active</span>
                <input v-model="newRange.name" placeholder="Country name"
                    className="bg-[#F8F8F8] rounded-lg p-2 w-full">
            </div>
            <div className="w-[60%] flex flex-col justify-between gap-2 mb-2">
                <span>Price per time (Country)</span>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[0]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_cw"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[1]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_cf"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[2]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_cm"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
                <span>Price per time (Kilometers)</span>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[0]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_kw"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[1]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_kf"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
                <div className="flex flex-row justify-between gap-4 mb-2">
                    <input v-model="time[2]" disabled
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                    <input v-model="newRange.price_km"
                        className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                </div>
            </div>
        </div>
        <div className="mt-4 rounded-lg m-auto py-3 w-[272px] 
            font-semibold bg-[#008AB6] text-white cursor-pointer"
            @click="Add_Range(newRange), this.$emit('showAddNewRegions', false);">
            Add new region and country
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddnewRegionsBlockComponent',
    data() {
        return {
            newRange: {
                name: '',
                price_cw: 0,
                price_cf: 0,
                price_cm: 0,
                price_kw: 0,
                price_kf: 0,
                price_km: 0,
            },
            time: [ '7 days', '15 days', '30 days' ],
        };
    },
    methods: {
        ...mapActions('Ranges', ['Add_Range']),
    },
}
</script>
