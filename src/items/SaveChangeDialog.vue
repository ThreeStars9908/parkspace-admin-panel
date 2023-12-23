<template>
  <div class="save-change-dialog">
    <div className="rounded-lg bg-white p-6">
        <div className="flex flex-row justify-between mb-6">
            <div className="font-semibold text-[16px]">
                {{ title }}
            </div>
            <base-icon name="fa fa-xmark"/>
        </div>
        <div className="flex flex-row justify-between gap-4">
            <default-button title="Cancel" bgcolor="#F8F8F8" color="#008AB6" />
            <default-button title="Save" color="#F8F8F8" />
        </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from './DefaultButton.vue';
import BaseIcon from './BaseIcon.vue';

export default {
    name: 'SaveChangeDialog',
    components: {
        BaseIcon,
        DefaultButton,
    },
    props: {
        title: {
            type: String,
            required: true
        },
    }
}
</script>
