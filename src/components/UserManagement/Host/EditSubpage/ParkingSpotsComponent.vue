<!-- eslint-disable -->
<template>
    <div class="parking-spots">
        <div class="header"
            className="grid grid-cols-2 justify-between
            mt-[40px] mb-[16px]">
            <div className="flex flex-row">
                <div className="font-semibold text-[16px] text-left my-auto ml-4">
                    Host's parking spots
                </div>
            </div>
        </div>
        <!-- v-if="parking_slotsbyHost.length" -->
        <div class="block"
            v-for="(element, iden) in parking_slotsbyHost"
            v-bind:key="iden">
            <div className="flex flex-row justify-end mb-2">
                <div className="text-[#008AB6] cursor-pointer mr-8 my-auto"
                    @click="onDelete(element)">
                    <base-icon name="fa fa-trash-can" color="#008AB6"/>
                        <span class="ml-2">Delete</span>
                </div>
                <div className="text-[#008AB6] cursor-pointer text-right mr-4 my-auto"
                    @click="onEdit(element)">
                    <base-icon name="fa fa-edit" color="#008AB6"/>
                        <span class="ml-2">Edit</span>
                </div>
            </div>
            <div className="p-6 shadow-[4px_6px_40px_0px_#00000020]
            border-1 border-[#EBF0ED] rounded-lg mb-4">
                <div className="flex flex-row justify-between">
                    <div className="text-left text-[18px] text-[#3F3F44] font-semibold">
                        Host parking spot {{ element.id }}
                    </div>
                    <div className="cursor-pointer"
                        @click="ClickIndex(iden)">
                        <base-icon :name="!isclicked == iden ? 'fa fa-arrow-circle-down': 'fa fa-arrow-circle-up'"
                            size="2em" color="#008AB6" />
                    </div>
                </div>
                <div v-if="isclicked == iden">
                    <div className="text-left text-[#3F3F44] mb-4">
                        Parking spot type
                        <select v-model="element.private"
                            class="h-[46px] w-full rounded-lg py-2 px-4
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                            <option v-for="(item, index) in parking_spot_type"
                                v-bind:key="index" :value="item.id">{{ item.title }}</option>
                        </select>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Parking slot name
                        <input v-model="element.name"
                            className="h-[16px] w-full rounded-lg px-4 py-6
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Address
                        <input v-model="element.address"
                            className="h-[16px] w-full rounded-lg px-4 py-6
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Description
                        <input v-model="element.description"
                            className="h-[16px] w-full rounded-lg px-4 py-6
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Parking spot photos
                        <div className="ml-auto">
                            <div className="w-full h-fit rounded-lg
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                <input v-model="element.images"
                                    className="w-full rounded-lg px-[10px] py-3">
                                <base-icon name="fa fa-eye"
                                    class="cursor-pointer relative -ml-10 mt-2" />
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Facilities offered
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            <div v-for="(item, id) in facilities_def"
                                v-bind:key="id">
                                <div className="bg-[#F8F8F8] rounded-lg px-4 py-2 my-auto flex flex-row justify-between
                                border-2 border-solid border-[#EBF0ED]">
                                    <span class="w-[80%]"
                                        style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">{{ item }}</span>
                                    <input type="checkbox" v-model="element.facility_offer" :value="item"
                                        className="w-6 h-6 float-right border border-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Vehicle size allowed
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            <div v-for="(item, id) in vehicle_size_def"
                                v-bind:key="id">
                                <div className="bg-[#F8F8F8] rounded-lg px-4 py-2 my-auto flex flex-row justify-between
                                border-2 border-solid border-[#EBF0ED]">
                                <span class="w-[80%]"
                                    style="white-space: nowrap; overflow:hidden; text-overflow: ellipsis;">{{ item }}</span>
                                    <input type="checkbox" v-model="element.vehicle_size" :value="item"
                                    className="w-6 h-6 float-right border border-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Slot size
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input v-model="element.slot_depth"
                                className="bg-[#F8F8F8] px-4 py-2 my-auto
                                border-2 border-solid border-[#EBF0ED] rounded-lg">
                            <input v-model="element.slot_width"
                                className="bg-[#F8F8F8] px-4 py-2 my-auto
                                border-2 border-solid border-[#EBF0ED] rounded-lg">
                            <input v-model="element.slot_height"
                                className="bg-[#F8F8F8] px-4 py-2 my-auto
                                border-2 border-solid border-[#EBF0ED] rounded-lg">
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Parking slots available
                        <input v-model="element.available"
                            className="h-[16px] w-full rounded-lg px-4 py-6
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                Check In
                                <input v-model="element.check_in"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                            <div className="flex flex-col">
                                Check Out
                                <input v-model="element.check_out"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                Allow monthly rent
                                <div>
                                    <select v-model="element.prices[0].type"
                                        className="h-[46px] w-full rounded-lg py-2 px-4
                                        bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                        <option v-for="(item, index) in amount_type"
                                            v-bind:key="index" :value="index">{{ item }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                Monthly rent price
                                <input v-model="element.prices[0].price"
                                    :disabled="element.prices[0].type == 1 ? true: false"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                Allow daily rent
                                <div>
                                    <select v-model="element.prices[2].type"
                                        className="h-[46px] w-full rounded-lg py-2 px-4
                                        bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                        <option v-for="(item, index) in amount_type"
                                            v-bind:key="index" :value="index">{{ item }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                Daily rent price
                                <input v-model="element.prices[2].price"
                                    :disabled="element.prices[2].type == 1 ? true: false"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                Allow weekend fee
                                <div>
                                    <select v-model="element.prices[1].type"
                                        className="h-[46px] w-full rounded-lg py-2 px-4
                                        bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                        <option v-for="(item, index) in amount_type"
                                            v-bind:key="index" :value="index">{{ item }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                Weekend fee price
                                <input v-model="element.prices[1].price"
                                    :disabled="element.prices[1].type == 1 ? true: false"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                Allow seasonal fee
                                <div>
                                    <select v-model="seasonal_type"
                                        className="h-[46px] w-full rounded-lg py-2 px-4
                                        bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                        <option v-for="(item, index) in amount_type"
                                            v-bind:key="index" :value="index">{{ item }}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                Seasonal fee price
                                <input
                                    :disabled="seasonal_type == 1 ? true: false"
                                    className="bg-[#F8F8F8] px-4 py-2 my-auto
                                    border-2 border-solid border-[#EBF0ED] rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="text-left text-[#3F3F44] mb-4">
                        Seasonal fee months
                        <select 
                            className="h-[46px] w-full rounded-lg py-2 px-4
                            bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                            <option v-for="(item, index) in months"
                                v-bind:key="index" :value="index">{{ item }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapState, mapActions } from 'vuex';

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'ParkingSpotsComponent',
    data() {
        return {
            parking_spot_type: [
                {id: 0, title: 'Corporate parking slots'},
                {id: 1, title: 'Private parking slots'},
            ],
            amount_type: [
                'Yes',
                'No',
            ],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            isclicked: 0,
            seasonal_type: 1,
            arrow: true,
        };
    },
    components: {
        BaseIcon
    },
    computed: {
        ...mapState('ParkingSlots', ['parking_slotsbyHost', 'facilities_def', 'vehicle_size_def']),
    },
    methods: {
        ...mapActions('ParkingSlots', ['Edit_ParkingSlots', 'Delete_ParkingSlots']),
        ClickIndex(val) {
            this.isclicked = val;
        },
        onDelete(item) {
            this.Delete_ParkingSlots(element);
            toast.success('Deleted!');
        },
        onEdit(item) {
            const prices = {
                allow_monthly_rent: !item.prices[0].type ? 1: 0,
                monthly_rent_price: item.prices[0].price,
                allow_weekend_fee: !item.prices[1].type ? 1: 0,
                weekend_fee_price: item.prices[1].price,
                allow_daily_rent: !item.prices[2].type ? 1: 0,
                daily_rent_price: item.prices[2].price,
            }
            toast.success('Edit parking slot successfully!');
            this.Edit_ParkingSlots({
                id: item.id,
                name: item.name,
                userId: item.userId,
                status: item.status,
                address: item.address,
                description: item.description,
                facility_offer: JSON.stringify(item.facility_offer),
                vehicle_size: JSON.stringify(item.vehicle_size),
                slot_width: item.slot_width,
                slot_height: item.slot_height,
                slot_depth: item.slot_depth,
                available: item.available,
                payment_method: JSON.stringify(item.payment_method),
                private: item.private,
                rate: item.rate,
                prices: prices,
            });
        },
    },
}
</script>