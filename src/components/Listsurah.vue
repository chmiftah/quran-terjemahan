<template>

<div>
  <router-link :to="`/surah/${number}`">


  <div class="bg-white shadow-sm px-4 py-8 rounded-sm  w-full hover:shadow-md border border-indigo-200">
  <div class="flex w-full">
    <div class="text-left w-1/2">
                <div class="flex">
                <div class="font-semibold">
                  {{ number }}.
                </div>
                <div class="px-1">
                    <div class="font-semibold flex">{{ name }} ({{ayat}} )</div>
                    <div class="">{{translated_name}}</div>
                </div>
              </div>
    </div>
    <div class="w-1/2 text-right items-center">
                <div class="arabic text-2xl mt-4 font-extralight">
                {{ arabic_name }}
                </div>
    </div>
  </div>

</div>
 </router-link>

</div>


</template>

<script>
export default {
props:[
   "number",
    "name",
    "arabic_name",
    "translated_name",
    "ayat",
    "revelation",
]
}
</script>

<style>

</style>