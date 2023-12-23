<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <tr>
    <td className="text-[#3F3F44] px-6 py-4 text-left"> {{ this.obj.name }} </td>
    <td className="text-[#3F3F44] px-6 py-4 text-left">{{ this.obj.email }}</td>
    <td className="text-[#3F3F44] px-6 py-4">{{ this.obj.cellphone }}</td>
    <td className="text-[#3F3F44] px-6 py-4 text-center
    cursor-pointer underline underline-offset-1"
        @click="showClient">
      View history and data
    </td>
    <td className="px-6 py-4 text-center">
      <span className="cursor-pointer"
            @click="editCs">
        <base-icon name="fa fa-pen" color="#323232" />
      </span>
      <span className="cursor-pointer ml-4"
            @click="deleteCs">
        <base-icon name="fa fa-trash-can" color="#323232" />
      </span>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import BaseIcon from '../../../items/BaseIcon.vue';

export default {
  name: 'UserTableItemComponent',
  props: ['obj'],
  components: {
    BaseIcon
  },
  methods: {
    ...mapActions('Clients', ['Select_Client']),
    ...mapActions('Booking', ['Show_BookingbyId']),
    showClient() {
      this.Select_Client(this.obj);
      this.Show_BookingbyId(this.obj.id);
      this.$emit('showC', true);
    },
    editCs() {
      this.Select_Client(this.obj);
      this.$emit('editCs', true);
    },
    deleteCs() {
      this.Select_Client(this.obj);
      this.$emit('deleteCs', true);
    },
  },
};
</script>
