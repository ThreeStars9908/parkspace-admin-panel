<!-- eslint-disable -->
<template>
    <div className="p-6 rounded-lg w-full
        shadow-[4px_6px_30px_0px_#00000020] mt-4">
        <div className="flex flex-row justify-between mb-4">
            <div className="text-left font-semibold">
                Active countries and regions
            </div>
            <div className="text-[#008AB6] cursor-pointer"
                @click="this.$emit('showAddNewRegions', true);">
                <base-icon
                    name="fa fa-plus-circle"
                    color="#008AB6" />
                <span class="ml-4">Add new range</span>
            </div>
        </div>
        <div v-for="(item, index) in ranges" v-bind:key="index"
            className="flex flex-row justify-between gap-4">
            <div className="w-full mt-4 mb-2 rounded-lg
                border-2 border-solid border-[rgb(0,138,182)]">
                <input v-model="item.name" placeholder="Country name"
                    v-if="isShow != index + 1" disabled
                    className="w-full h-fit px-[10px] py-2 rounded-lg
                    bg-[#F8F8F8]">
                    <base-icon v-if="isShow != index + 1"
                        name="fa fa-angle-down" 
                        color="#323232"
                        @click="Showinfo(index + 1)"
                        class="absolute -ml-6 mt-3 cursor-pointer"/>
                        <!-- class="absolute -ml-6 mt-3 cursor-pointer" -->
                <base-icon v-else
                    name="fa fa-angle-up" 
                    color="#323232"
                    @click="Showinfo(index + 1)"
                    class="cursor-pointer float-right mr-3 mt-2"/>
                <div v-if="isShow == index + 1"
                    className="w-full h-fit p-4">
                    <div className="font-semibold text-left mb-4">Country name</div>                    
                    <div className="flex flex-row justify-between gap-8">
                        <div className="w-[40%] flex flex-col justify-start text-left">
                            <span className="mb-2">Country active</span>
                            <input v-model="item.name" placeholder="Country name"
                                @keyup="Get_GeoAddress(item.name)"
                                className="bg-[#F8F8F8] rounded-lg p-2 w-full">
                            <div v-if="geo_address_list.length"
                                class="py-2 z-50 bg-white border-solid border-2">
                                <div v-for="(el, id) in geo_address_list"
                                    :key="id"
                                    className="text-sm border-b-2 mb-2 p-2"
                                    @click="Select_Address(el, index)">
                                    {{ el.formatted }}
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%] flex flex-col justify-between gap-2 mb-2 text-left">
                            <span>Price per time (Country)</span>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[0]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_cw"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[1]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_cf"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[2]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_cm"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                            <span>Price per time (Kilometers)</span>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[0]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_kw"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[1]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_kf"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                            <div className="flex flex-row justify-between gap-4 mb-2">
                                <input v-model="time[2]" disabled
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[60%]">
                                <input v-model="item.price_km"
                                    className="bg-[#F8F8F8] rounded-lg p-2 w-[40%]">
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 rounded-lg m-auto py-3 w-[240px]
                        font-semibold bg-[#008AB6] text-white cursor-pointer"
                        @click="onEdit(item)">
                        Confirm changes
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end mt-6 cursor-pointer">
                <base-icon name="fa fa-pen" color="#323232"
                    @click="Showinfo(index + 1)" class="mr-2"/>
                <base-icon name="fa fa-trash-can" color="#323232"
                    @click="Remove(item)"/>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '../../items/BaseIcon.vue';
import { mapState, mapActions } from 'vuex';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'ActiveRegionsBlockComponent',
    data() {
        return {
            isShow: null,
            time: [ '7 days', '15 days', '30 days' ],
        };
    },
    components: {
        BaseIcon
    },
    computed: {
        ...mapState('Ranges', ['ranges', 'geo_address_list']),
    },
    methods: {
        ...mapActions('Ranges', ['Edit_Range', 'Remove_Range', 'Get_GeoAddress', 'Format_GeoAddress']),
        Showinfo(index) {
            if(!this.isShow)
                this.isShow = index;
            else
                this.isShow = null;
        },
        Select_Address(val, index) {
            this.ranges[index].name = val.formatted;
            this.Format_GeoAddress();
        },
        onEdit(item) {
            this.Edit_Range(item);
            toast.success('Saved!');
        },
        Remove(item) {
            this.Remove_Range(item.id);
            toast.success('Deleted!');
        }
    },
}
</script>
