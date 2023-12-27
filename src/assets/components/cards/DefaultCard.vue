<template>
  <div class="default-card w-full shadow p-8 rounded-lg">
    <div class="header">
        {{ value }}
    </div>
    <div class="footer mt-auto">
        <div class="text-lg text-left">
            {{ $t(`${title}`) }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DefaultCard',
    props: ['value', 'title']
}
</script>
