<template>
  <div class="change-currency-dialog">
    <div className="rounded-lg bg-white p-6">
        <div className="flex flex-row justify-between mb-6">
            <div className="font-semibold text-[16px]">
                Delete review?
            </div>
            <base-icon name="fa fa-xmark" @click="this.$emit('deleteHs', false)"/>
        </div>
        <div className="flex flex-row justify-between gap-4">
            <default-button title="Cancel" bgcolor="#F8F8F8" color="#008AB6" 
                @click="this.$emit('deleteHs', false)"/>
            <default-button title="Delete" color="#F8F8F8"
                @click="onDelete"/>
        </div>
    </div>
  </div>
</template>

<script>

// import { mapState, mapActions } from 'vuex';
import DefaultButton from '../../items/DefaultButton.vue'
import BaseIcon from '../../items/BaseIcon.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    name: 'DeleteReview',
    components: {
        BaseIcon,
        DefaultButton,
    },
    props: ['obj'],
    computed: {
      // ...mapState('Clients', ['selected_client']),
    },
    methods: {
      // ...mapActions('Clients', ['Delete_Client']),
      async onDelete() {
        // await this.Delete_Client(this.selected_client.id);
        this.$emit('deleteHs', false);
        toast.error('Error ocurred!');
      }
    }
}
</script>
