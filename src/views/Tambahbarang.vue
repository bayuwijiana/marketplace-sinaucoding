<template>
  <Navbar />
  <section id="login">
    <div class="container">
      <div class="row justify-content-center mf">
        <div class="col-lg-6 shadow-lg rounded-3 right-side ">
          <form   @submit.prevent="tambahBarang" >
            <p class="bg-info text-primary title-form px-3 py-2 rounded-top">
              Tambah Barang
            </p>
            <div class=" row pf ">
              <div class="col-3">
                <label for="NamaBarang" class="form-label">Nama Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="NamaBarang"
                  name="namaBarang"
                  v-model="namaBarang"
                  placeholder="Enter Nama Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="hargaBarang" class="form-label">Harga Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="hargaBarang"
                  name="harga"
                  v-model="harga"
                  placeholder="Enter Harga Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="StokBarang" class="form-label">Stok Barang</label>
              </div>
              <div class="col-8  ">
                <input
                  type="text"
                  class="form-control"
                  id="StokBarang"
                  name="stok"
                  v-model="stok" 
                  placeholder="Enter Stok Barang"
                  autofocus
                />
              </div>
            </div>
            <div class=" row pf">
              <div class="col-3">
                <label for="SupplierBarang" class="form-label"
                  >Supplier Barang</label
                >
              </div>
              <div class="col-8  ">
                <select name="" id=""  v-model="supplier">
                  <option  v-for="(data,index) in dataSupplier" v-bind:key="data.index" :value="data">{{ data.namaSupplier }}</option>
                </select>
              </div>
            </div>
            <div class="d-flex justify-content-between pb">
                <router-link to="/barang">
                <button class="btn btn-dark action">Kembali</button>
                </router-link>   
              <button class="btn btn-primary action">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios"

export default {
  data: function () {
    return {
      namaBarang:'',
      harga :'',
      stok:'',
      supplier:[],
      dataSupplier: []
    }
  },
  methods: {
    async getSupplier() {
      const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all",
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('Token')}`,
            'Content-Type': 'application/json'
          },
          params: {
            offset: 0,
            limit: 15
          }
        });
      console.log('data:', data.data);
      this.dataSupplier = await data.data;
    },

    tambahBarang: async function () {
      let dataBarang = {
        namaBarang: this.namaBarang,
        harga: this.alamahargat,
        stok: this.noTstokelp,
        supplier: this.supplier
      }
      await axios.post("http://159.223.57.121:8090/barang/create", dataBarang, {

        headers: {
          'Authorization': `Bearer ${localStorage.getItem('Token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(async (response) => {
          const data = await response.data;

          if (data.status === 'OK') {
            alert('sukses tambah Barang');
          }

          this.$router.push('/barang');

          this.namaBarang = "";
          this.harga = "";
          this.stok = "";
          this.supplier = "";

        });
    },

  },
  components: {
    Navbar,
  },
  created() {
    this.getSupplier(); 
  },
};
</script>
