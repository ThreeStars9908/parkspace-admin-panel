<template>
  <div class="review-box"
    className="shadow-[4px_6px_30px_0px_#00000020]
        px-6 py-8 rounded-lg">
    <div className="flex flex-row justify-between text-[#3F3F44] mb-8">
        <div className="text-[18px] font-semibold mr-auto">
            {{ $t(`${this.title}`) }}
        </div>
        <div className="text-[32px] font-semibold ml-auto -mt-3">
            {{ this.total }}
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
            <div className="flex flex-row justify-start">
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <span class="ml-2"
                style="margin-top: -2px;">{{ this.fifth }}</span>
            </div>
            <div className="flex flex-row justify-start">
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <span class="ml-2"
                style="margin-top: -2px;">{{ this.fourth }}</span>
            </div>
            <div className="flex flex-row justify-start">
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <span class="ml-2"
                style="margin-top: -2px;">{{ this.third }}</span>
            </div>
            <div className="flex flex-row justify-start">
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <span class="ml-2"
                style="margin-top: -2px;">{{ this.second }}</span>
            </div>
            <div className="flex flex-row justify-start">
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-regular fa-star" size="1em" color="#EDBD3A" />
                <base-icon name="fa-solid fa-star" size="1em" color="#EDBD3A" />
                <span class="ml-2"
                style="margin-top: -2px;">{{ this.first }}</span>
            </div>
        </div>
        <div className="flex ml-auto mt-auto">
            <div className="text-[32px] text-[#EDBD3A] -mt-2.5 mr-2">
                {{ this.average }}
            </div>
            <base-icon name="fa-solid fa-star" size="1.5em" color="#EDBD3A" />
        </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon },
    name: 'ReviewBox',
    props: [
        'title',
        'total',
        'first', 'second', 'third', 'fourth', 'fifth',
        'average',
    ],
}
</script>
