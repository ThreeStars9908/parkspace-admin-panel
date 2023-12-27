<template>
  <div class="card-box">
    <div className="shadow-[4px_6px_30px_0px_#00000020]
        rounded-lg p-8 h-full">
        <div className="grid grid-cols-2 mb-8">
            <div className="mr-auto">
                <base-icon :name="this.icon" :color="this.color" size="2em"/>
            </div>
            <div className="text-2xl
                text-[#0F83C9] ml-auto">
                {{ this.value }}
            </div>
        </div>
        <div className="text-xl text-left">
            {{ $t(`${this.text}`) }}
        </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
    name: 'CardBox',
    components: { BaseIcon },
    props: ['value', 'icon', 'color', 'text'],
};
</script>
