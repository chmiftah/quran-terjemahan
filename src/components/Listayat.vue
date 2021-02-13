<template>
<div class="w-full">

  <div class="border-b border-gray-200 py-12 px-6 hover:bg-white">
    <div class="">
            <div class="w-3/4 mb- flex items-center">
            <div class="bg-gray-400 rounded-lg p-4 mr-2">
              {{ no }}:{{ ayat }}
            </div>

            <div>
            <audio
            controls="controls"
            controlslist="nodownload"
            class="focus:ring-0 focus:outline-none"
            preload="none"
          >
            <source :src="audio" />
          </audio>
            </div>

          </div>

    </div>
      <div class="arabic w-full text-right mb-4 mt-12 py-2  antialiased text-4xl">
            {{ arabic }}
          </div>

    <div class="flex mt-6 ml-4 md:ml-0 text-gray-700 arabic mb-8">
       {{ arti }}
    </div>

  </div>



</div>
</template>

<script>
export default {
  data(){
    return {
      no : this.$route.params.id,
    }
  },
props:[
"ayat",
"arabic",
"arti",
"key",
"audio",
"number"
],

}
</script>

<style>


.arabic {
   font-family: QuranFont;
}

</style>