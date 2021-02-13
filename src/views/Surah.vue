<template>
  <div class="home">

  <div class="">
     <div v-if="loadingStatus" class="loading-div">
      <vue-spinner class="mt-24" />
    </div>
    <div v-else class="w-full p-6">

    <div class="text-xl text-center  p-6 m-8">
    <div class="font-semibold arabic text-5xl">
     Surat  {{ data_surah.name.transliteration.id }}
    </div>
    <div class="text-2xl arabic mt-2 mb-2">
        ({{ data_surah.name.translation.id }})
    </div>

    <div class="text-sm arabic">

          {{ data_surah.revelation.arab }} |
           {{ data_surah.revelation.id }}
           <div>{{data_surah.numberOfVerses}} ayat</div>
    </div>


    </div>
      <div v-if="data_surah.preBismillah!=null">
        <div class="arabic w-full text-center mb-2 mt-12 py-2  antialiased text-4xl">
          {{ data_surah.preBismillah.text.arab }}
          <div class="text-sm text-gray-700 mt-3">Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang</div>
         </div>
      </div>



      </div>
      <Listayat
      v-for="surah in surah"
      :key= surah.number
      :audio = surah.audio.primary
      :number = surah.number
      :ayat= surah.number.inSurah
      :arabic = surah.text.arab
      :arti = surah.translation.id
    />




    </div>
        <div class="flex justify-between p-4 mt-4">
      <button @click="prev"  v-if="data_surah.number>1"  class="bg-gray-200 px-2 py-1 hover:bg-gray-300 text-lg font-semibold  shadow-md rounded-lg">Pervious Surah</button>
      <button @click="next" v-if="data_surah.number<114"  class="bg-gray-200 px-2 py-1 hover:bg-gray-300 text-lg font-semibold shadow-md rounded-lg">Next Surah</button>
    </div>
  <div class="bg-blue-200 bottom-0 mt-12">
         <div class="text-sm text-center p-4">
           <div class="arabic">
             &copy<span>copyright-2021</span>
             </div>
        </div>
    </div>

  </div>

</template>

<script>

import Spinner from 'vue-simple-spinner'
import axios from 'axios'
import Listayat from '../components/Listayat.vue'
export default {
  components: { Listayat,
     vueSpinner:Spinner,
  },
  data(){
    return{
      data_surah : [],
      surah: [],
      id : this.$route.params.id,
      loadingStatus: false,


    }
  },

methods:{
  async getSurah()
  {
  this.loadingStatus = true
  let response = await axios.get(`https://api.quran.sutanlab.id/surah/${this.id}`)
  console.log(response.data.data)
  this.data_surah=response.data.data
    this.surah=response.data.data.verses
  this.loadingStatus = false

  },

  prev(){
   this.$router.push({
        name: "surah",
        params: { id:this.data_surah.number - 1},
      });
      window.location.reload()


  },
  next(){
     this.$router.push({
        name: "surah",
        params: { id:this.data_surah.number + 1},

      });
       window.location.reload()

  }
},

mounted(){
    this.getSurah()
},

  computed:{
    //  filter() {
    //   return this.surah.filter((surah) => {
    //     return surah.number.inSurah

    //   });
    // },
  }
}
</script>
<style>


.arabic {
   font-family: QuranFont;
}

</style>