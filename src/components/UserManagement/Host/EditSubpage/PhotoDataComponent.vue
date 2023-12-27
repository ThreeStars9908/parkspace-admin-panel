<!-- eslint-disable -->
<template>
  <div class="photo-data-component">
    <div className="p-[24px] mt-[40px]
    shadow-[4px_6px_40px_0px_#00000020] border-1 border-[#EBF0ED]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="max-w-[128px] max-h-[128px]
          border-4 border-[#107EC4] border-solid rounded-full">
            <img v-if="selected_host.avatar" :src="$baseUrl + `${selected_host.avatar}`" style="border-radius: 50%;"/>
            <img v-else-if="!imageUrl" :src="require('./avatar.jpg')" style="border-radius: 50%;"/>
            <img v-if="imageUrl" :src="imageUrl" style="border-radius: 50%;" />
          </div>
          <div className="my-auto ml-8">
            <div className="text-[16px] font-semibold text-left">{{ selected_host.name }}</div>
            <div className="text-[16px] font-normal text-left">{{ selectedHost_booking.length }} bookings</div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-row text-right">
            <div className="text-[16px] font-semibold mr-2">
              Verified Host
            </div>
            <div className="mr-2">
              <v-icon name="ri-shield-star-fill"
                      fill="#008AB6"
                      scale="2" />
            </div>
            <div className="text-[16px] font-semibold mr-2">
              4.8
            </div>
            <div className="mr-2">
              <base-icon name="fa fa-star"
                color="#EDBD3A" />
            </div>
          </div>
          <div className="text-right text-[#008AB6] cursor-pointer"
            @click="onUpload">
            <span className="mr-2">
              <base-icon name="fa fa-retweet"
                color="#008AB6" />
            </span>Change Profile Picture
            <input type="file" ref="fileinput" style="display: none;"
              @change="Uploaded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import BaseIcon from '../../../../items/BaseIcon.vue'
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PhotoDataComponent',
  computed: {
    ...mapState('Hosts', ['selected_host']),
    ...mapState('Booking', ['selectedHost_booking']),
    imageUrl() {
      return this.file ? URL.createObjectURL(this.file) : null;
    },
  },
  data() {
    return {
      file: null,
    }
  },
  components: {
    BaseIcon,
  },
  methods: {
    ...mapActions('Hosts', ['Change_Host_Avatar']),
    onUpload() {
      this.$refs.fileinput.click();
    },
    async Uploaded(e) {
      this.file = e.target.files[0];
      if(this.selected_host.avatar == ''){
        this.Change_Host_Avatar({ id: this.selected_host.id, avatar: this.file });
      } else {
        this.selected_host.avatar = this.file;
        this.Change_Host_Avatar({ id: this.selected_host.id, avatar: this.selected_host.avatar });
      }
      toast.success('Avatar changed successfully!');
    },
  }
};
</script>
