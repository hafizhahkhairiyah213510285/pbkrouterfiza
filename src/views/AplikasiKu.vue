<template>
  <div class="">
    <h1 class="text-4xl pb-6 font-semibold text-center text-cyan-600 ">List Kegiatan</h1>
    <div class="py-5 mb-10 bg-cyan-100 border rounded-lg mx-4 lg:mx-20 border-none text-center shadow-md">
      <h1 class="py-2 text-cyan-600 font-medium text-lg">Inputkan Kegiatan</h1>
      <form class="" @submit.prevent="tambahKegiatan">
        <div class="mb-6">
          <label class="px-2 text-base text-cyan-600 font-medium" for="date">Tanggal :</label>
          <input class="block mx-auto mt-2 bg-cyan-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-1/2 md:w-1/3" type="date" id="tanggal" v-model="kegiatan.tanggal">
        </div>
        <div class="mb-6 px-10">
          <label class="px-2 text-base text-cyan-600 font-medium" for="nama">Nama Kegiatan : </label>
          <input class="block mx-auto mt-2 bg-cyan-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full md:w-1/3" type="text" id="nama" v-model="kegiatan.nama" />
        </div>
        <div class="mb-6 px-10">
          <label class="px-2 text-base block mb-3 text-cyan-600 font-medium" for="deskripsi">Deskripsi Kegiatan : </label>
          <textarea id="deskripsi" rows="4" class="block mx-auto p-2.5 w-full md:w-1/3 text-sm text-gray-900 bg-cyan-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" v-model="kegiatan.deskripsi"></textarea>
        </div>
        <button class="mx-5 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Tambahkan</button>
        <button class="mx-5 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" @click="resetInput">Reset</button>
        <button class="mx-5 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" @click="batalTambah" v-if="kegiatan.nama || kegiatan.deskripsi">Batal</button>
      </form>
      <div class="py-5">
        <label class="px-2 text-base mb-3 text-cyan-600 font-medium" for="filter">Tampilkan Kegiatan Belum Selesai</label>
        <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2" id="filter" v-model="filterDone" @change="filterKegiatan">
      </div>
      <ul class="list-none flex-row px-2">
        <li class="text-cyan-600 font-medium py-5 bg-cyan-50 rounded-lg border w-full md:w-1/3 border-none shadow-lg mb-10 mx-auto" v-for="(kegiatan, index) in kegiatanList" :key="index" :class="{ done: kegiatan.done, hidden: filterDone && kegiatan.done }">
          <h3 class="pt-2">Kegiatan : {{ kegiatan.nama }}</h3>
          <p class="pt-2">Deskripsi : {{ kegiatan.deskripsi }}</p>
          <p class="pt-2">Tanggal : {{ kegiatan.tanggal }}</p>
          <button class="mx-2 mt-3 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="hapusKegiatan(index)">Delete</button>
          <button class="mx-2 mt-3 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="toggleDone(index)">
            {{ kegiatan.done ? 'Belum Selesai' : 'Sudah Selesai' }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kegiatan: {
        nama: '',
        deskripsi: '',
        done: false,
        tanggal: ''
      },
      kegiatanList: [],
      filterDone: false
    }
  },
  methods: {
    tambahKegiatan() {
      this.kegiatanList.push(this.kegiatan)
      this.kegiatan = {
        nama: '',
        deskripsi: '',
        done: false,
        tanggal: ''
      }
    },
    resetInput() {
      this.kegiatan = {
        nama: '',
        deskripsi: '',
        done: false,
        tanggal: ''
      }
    },
    batalTambah() {
      this.kegiatan = {
        nama: '',
        deskripsi: '',
        done: false,
        tanggal: ''
      }
    },
    hapusKegiatan(index) {
      this.kegiatanList.splice(index, 1)
    },
    toggleDone(index) {
      this.kegiatanList[index].done = !this.kegiatanList[index].done
    },
    computed: {
    filterKegiatan() {
      return this.filterDone
        ? this.kegiatanList.filter((kegiatan) => !kegiatan.done)
        : this.kegiatanList
    }
  },
  },
  created() {
    this.kegiatanList = JSON.parse(localStorage.getItem('kegiatanList')) || []
  },
  watch: {
    kegiatanList: {
      handler: function (newVal) {
        localStorage.setItem('kegiatanList', JSON.stringify(newVal))
      },
      deep: true
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
  opacity: 0.5;
}

.hidden {
  display: none;
}

</style>