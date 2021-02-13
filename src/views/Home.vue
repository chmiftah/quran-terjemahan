<template>
  <div class="home">
  <div class="px-12 p-6">
      <input
        type="search"
        class="w-full py-2 px-4 focus:outline-none focus:bg-white border border-indigo-200 focus:border-indigo-400 bg-gray-50 dark:bg-gray-700 rounded transition duration-200 dark:text-white dark:border-indigo-400"
        placeholder="Cari Surah.. cth: ar-rahman"
        v-model="keyword"
      />
  </div>

    <div v-if="loadingStatus" class="loading-div">
      <vue-spinner class="mt-24" />
    </div>
    <div v-else class="content-div grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-6">
    <Listsurah
        v-for="surah in filter"
        :key="surah.number"
        :number="surah.number"
        :name="surah.name.transliteration.id"
        :arabic_name="surah.name.short"
        :translated_name="surah.name.translation.id"
        :ayat="surah.numberOfVerses"
        :revelation="surah.revelation.id"
    />
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
// @ is an alias to /src
 import axios from 'axios'
import Listsurah from '@/components/Listsurah.vue'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'Home',
  components: {
  vueSpinner:Spinner,
  Listsurah
  },
  data(){
    return{
      SurahList:[],
      loadingStatus: false,
      keyword:''
    }
  },
  methods:{
    async fetch()
    {
    this.loadingStatus = true
      let response = await axios.get(`https://api.quran.sutanlab.id/surah`)
      this.SurahList = response.data.data
       this.loadingStatus =false
      console.log(this.SurahList)
    }
  },
  mounted(){

  this.fetch()

   //this.$store.dispatch('getSurahList')
  },
  computed:{
     filter() {
      return this.SurahList.filter((surah) => {
        return surah.name.transliteration.id
          .toLowerCase()
          .includes(this.keyword.toLowerCase());
      });
    },
    // loadingStatus()
    // {
    //   return this.$store.getters.loadingStatus
    // },
  // SurahList()
  // {
  //   return this.$store.getters.SurahList
  // }
  }
}
</script>
