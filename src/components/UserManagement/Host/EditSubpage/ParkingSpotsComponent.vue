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
            <div className="flex flex-row justify-end">
                <div className="text-[#008AB6] cursor-pointer mr-8 my-auto">
                    <base-icon name="fa fa-trash-can" color="#008AB6"/>
                        <span class="ml-2">Delete</span>
                </div>
                <div className="text-[#008AB6] cursor-pointer text-right mr-4 my-auto">
                    <base-icon name="fa fa-edit" color="#008AB6"/>
                        <span class="ml-2">Edit</span>
                </div>
            </div>
        </div>
        <div class="block" v-if="parking_slotsbyHost.length"
            className="p-6 shadow-[4px_6px_40px_0px_#00000020]
            border-1 border-[#EBF0ED] rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="text-left text-[18px] text-[#3F3F44] font-semibold">
                    Host parking spot {{ parking_slotsbyHost[index].id }}
                </div>
                <div className="cursor-pointer"
                    @click="ClickIndex">
                    <base-icon :name="!arrow ? 'fa fa-arrow-circle-up': 'fa fa-arrow-circle-down'"
                        size="2em" color="#008AB6" />
                </div>
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Parking spot type
                <select v-model="parking_slotsbyHost[index].private"
                    class="h-[46px] w-full rounded-lg py-2 px-4
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                    <option v-for="(item, index) in parking_spot_type"
                        v-bind:key="index" :value="item.id">{{ item.title }}</option>
                </select>
                <base-icon name="fa fa-arrow-down" color="#008AB6"
                    class="cursor-pointer relative mt-3 -ml-9" />
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Parking slot name
                <input v-model="parking_slotsbyHost[index].name"
                    className="h-[16px] w-full rounded-lg px-4 py-6
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Address
                <input v-model="parking_slotsbyHost[index].address"
                    className="h-[16px] w-full rounded-lg px-4 py-6
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Description
                <input v-model="parking_slotsbyHost[index].description"
                    className="h-[16px] w-full rounded-lg px-4 py-6
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Parking spot photos
                <div className="ml-auto">
                    <div className="w-full h-fit rounded-lg
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                        <input v-model="parking_slotsbyHost[index].images"
                            className="w-full rounded-lg px-[10px] py-3">
                        <base-icon name="fa fa-eye"
                            class="cursor-pointer relative -ml-10 mt-3" />
                    </div>
                </div>
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Facilities offered
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div v-for="(item, id) in facilities"
                        v-bind:key="id">
                        <div className="bg-[#F8F8F8] rounded-lg px-4 py-2 my-auto
                        border-2 border-solid border-[#EBF0ED]">
                            {{ item }}
                            <input type="checkbox" :checked="parking_slotsbyHost[index].facility_offer.includes(id) ? true: false"
                            className="w-6 h-6 float-right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Vehicle size allowed
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div v-for="(item, id) in vehicle_size"
                        v-bind:key="id">
                        <div className="bg-[#F8F8F8] rounded-lg px-4 py-2 my-auto
                        border-2 border-solid border-[#EBF0ED]">
                            {{ item }}
                            <input type="checkbox" :checked="parking_slotsbyHost[index].vehicle_size.includes(id) ? true: false"
                            className="w-6 h-6 float-right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Slot size
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input v-model="parking_slotsbyHost[index].slot_depth"
                        className="bg-[#F8F8F8] px-4 py-2 my-auto
                        border-2 border-solid border-[#EBF0ED] rounded-lg">
                    <input v-model="parking_slotsbyHost[index].slot_width"
                        className="bg-[#F8F8F8] px-4 py-2 my-auto
                        border-2 border-solid border-[#EBF0ED] rounded-lg">
                    <input v-model="parking_slotsbyHost[index].slot_height"
                        className="bg-[#F8F8F8] px-4 py-2 my-auto
                        border-2 border-solid border-[#EBF0ED] rounded-lg">
                </div>
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                Parking slots available
                <input v-model="parking_slotsbyHost[index].available"
                    className="h-[16px] w-full rounded-lg px-4 py-6
                    bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
            </div>
            <div className="text-left text-[#3F3F44] mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        Check In
                        <input v-model="parking_slotsbyHost[index].begin_time"
                            className="bg-[#F8F8F8] px-4 py-2 my-auto
                            border-2 border-solid border-[#EBF0ED] rounded-lg">
                    </div>
                    <div className="flex flex-col">
                        Check Out
                        <input v-model="parking_slotsbyHost[index].end_time"
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
                            <select
                                className="h-[46px] w-full rounded-lg py-2 px-4
                                bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                <option v-for="(item, index) in amount_type"
                                    v-bind:key="index" :value="index">{{ item }}</option>
                            </select>
                            <base-icon name="fa fa-arrow-down" color="#008AB6"
                                class="cursor-pointer relative mt-3 -ml-9" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        Monthly rent price
                        <input v-model="parking_slotsbyHost[index].prices[0].price"
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
                            <select
                                className="h-[46px] w-full rounded-lg py-2 px-4
                                bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                <option v-for="(item, index) in amount_type"
                                    v-bind:key="index" :value="index">{{ item }}</option>
                            </select>
                            <base-icon name="fa fa-arrow-down" color="#008AB6"
                                class="cursor-pointer relative mt-3 -ml-9" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        Daily rent price
                        <input v-model="parking_slotsbyHost[index].prices[2].price"
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
                            <select
                                className="h-[46px] w-full rounded-lg py-2 px-4
                                bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                <option v-for="(item, index) in amount_type"
                                    v-bind:key="index" :value="index">{{ item }}</option>
                            </select>
                            <base-icon name="fa fa-arrow-down" color="#008AB6"
                                class="cursor-pointer relative mt-3 -ml-9" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        Weekend fee price
                        <input placeholder="10%"
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
                            <select
                                className="h-[46px] w-full rounded-lg py-2 px-4
                                bg-[#F8F8F8] border-2 border-solid border-[#EBF0ED]">
                                <option v-for="(item, index) in amount_type"
                                    v-bind:key="index" :value="index">{{ item }}</option>
                            </select>
                            <base-icon name="fa fa-arrow-down" color="#008AB6"
                                class="cursor-pointer relative mt-3 -ml-9" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        Seasonal fee price
                        <input placeholder="10%"
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
                <base-icon name="fa fa-arrow-down" color="#008AB6"
                    class="cursor-pointer relative mt-3 -ml-9" />
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
import BaseIcon from '@/items/BaseIcon.vue';
import { mapState } from 'vuex';

export default {
    name: 'ParkingSpotsComponent',
    data() {
        return {
            facilities: [
                'Electric charging',
                'Video monitoring',
                'Disabled parking',
                'Overnight',
                'Covered roof',
            ],
            vehicle_size: [
                'Micro',
                'Hatchback',
                'SUV',
                'Pickup',
                'Minivan',
                'Van',
                'Compervan',
                'Truck',
                'Big Truck',
                'Motorcycle',
            ],
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
            index: 0,
            arrow: true,
        };
    },
    components: {
        BaseIcon
    },
    computed: {
        ...mapState('ParkingSlots', ['parking_slotsbyHost']),
    },
    methods: {
        ClickIndex() {
            console.log(this.parking_slotsbyHost.length);
            if(this.index + 1 < this.parking_slotsbyHost.length && this.arrow)
                this.index ++, this.arrow = false;
            else if(this.index > 0 && !this.arrow)
                this.index --, this.arrow = true;
        },
    },
}
</script>