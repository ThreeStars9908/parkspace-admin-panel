<!-- eslint-disable -->
<template>
  <div className="p-6
  shadow-[4px_6px_30px_0px_#00000020] mt-4
  flex flex-col justify-between rounded-lg">
    <div className="flex flex-row justify-between">
      <div className="text-[16px] font-semibold text-left">
        Schedule automatic payment
      </div>
      <div className="ml-auto">
        <VueToggles v-model="enable"
                    :height="28"
                    :width="54"
                    checkedBg="#1C8E33"
                    style="margin-left: auto; margin-right: auto;" />
      </div>
    </div>
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="text-left">
        Frequency
        <div className="ml-auto mt-2">
          <div className="min-w-[120px] h-fit rounded-lg mb-2 flex flex-row justify-between
          bg-white border-2 border-solid border-[#EBF0ED]">
            <span className="px-[10px] py-2 text-[#3F3F44]">Weekly</span>
            <div className="my-auto mr-3">
              <input type="radio" name="frequency"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-solid border-gray-500">
            </div>
          </div>
        </div>
        <div className="ml-auto mt-2">
          <div className="min-w-[120px] h-fit rounded-lg mb-2 flex flex-row justify-between
          bg-white border-2 border-solid border-[#EBF0ED]">
            <span className="px-[10px] py-2 text-[#3F3F44]">Monthly</span>
            <div className="my-auto mr-3">
              <input type="radio" name="frequency"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-solid border-gray-500">
            </div>
          </div>
        </div>
        <div className="ml-auto mt-2">
          <div className="min-w-[120px] h-fit rounded-lg mb-2 flex flex-row justify-between
          bg-white border-2 border-solid border-[#EBF0ED]">
            <span className="px-[10px] py-2 text-[#3F3F44]">Bimonthly</span>
            <div className="my-auto mr-3">
              <input type="radio" name="frequency"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-solid border-gray-500">
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-left">
        Every
        <div className="ml-auto mt-2">
          <div className="w-full h-fit rounded-lg mb-2 flex flex-row
          bg-white border-2 border-solid border-[#EBF0ED]">
          <select class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          </div>
        </div>
        <div className="ml-auto mt-2">
          <div className="w-full h-fit rounded-lg mb-2 flex flex-row
          bg-white border-2 border-solid border-[#EBF0ED]">
          <select class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]">
            <option v-for="(item, index) in 30" v-bind:key="index" :value="index + 1">{{index + 1}}</option>
          </select>
          </div>
        </div>
        <div className="ml-auto mt-2">
          <div className="flex flex-row justify-between">
            <div className="w-[40%] h-fit rounded-lg mb-2 flex flex-row
            bg-white border-2 border-solid border-[#EBF0ED]">
            <select class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]">
            <option v-for="(item, index) in 30" v-bind:key="index" :value="index + 1">{{index + 1}}</option>
          </select>
            </div>
            <span className="my-auto">And</span>
            <div className="w-[40%] h-fit rounded-lg mb-2 flex flex-row
            bg-white border-2 border-solid border-[#EBF0ED]">
            <select class="w-full rounded-lg py-2 px-4 bg-[#F8F8F8]">
            <option v-for="(item, index) in 30" v-bind:key="index" :value="index + 1">{{index + 1}}</option>
          </select>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left">
        At
        <div className="w-full mt-2 ml-auto h-fit">
          <div className="my-auto">
            <VueDatePicker v-model="date"
              time-picker
              style="padding-top: 0.2rem; padding-bottom: 0.2rem;" />
          </div>
        </div>
        <div className="w-full mt-2 ml-auto h-fit">
          <div className="my-auto">
            <VueDatePicker v-model="date"
              time-picker
              style="padding-top: 0.2rem; padding-bottom: 0.2rem;" />
          </div>
        </div>
        <div className="w-full mt-2 ml-auto h-fit">
          <div className="my-auto">
            <VueDatePicker v-model="date"
              time-picker
              style="padding-top: 0.2rem; padding-bottom: 0.2rem;" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-[272px] h-[44px] mt-4
        px-[16px] py-[8px] font-semibold m-auto
        rounded-lg bg-[#008AB6] text-white text-[16px] cursor-pointer"
        @click="this.confirmPayment = true;">
            Confirm payment schedule
    </div>
    <v-dialog v-model="confirmPayment"
              width="auto">
      <confirm-payment-popup @confirmPaymentChange="confirmPaymentChange" />
    </v-dialog>
  </div>
</template>
<!-- eslint-disable -->
<script>
import { VueToggles } from 'vue-toggles';
import ConfirmPaymentPopup from '../PopupComponents/FinancesPopups/ConfirmPaymentPopup.vue';

export default {
  name: 'ScheduleAutomaticComponent',
  components: {
    VueToggles,
    ConfirmPaymentPopup,
  },
  data() {
    return {
      confirmPayment: false,
    };
  },
  methods: {
    confirmPaymentChange(val) {
      this.confirmPayment = val;
    },
  },
}

</script>
