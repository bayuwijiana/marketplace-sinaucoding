<template>
  <Navbar />
  <section class="container-fluid">
    <div class="row justify-content-lg-evenly content-dash">
      <div class="col-2 lf">
        <div class="dash-prof">
          <div class="col-lg-2 text-primary text-center left-prof">
            <div class="profil shadow-lg rounded pt-3">
              <img src="../assets/profil-log.png" class="log-profil mb-4" />
              <p class="dash-title-prof rounded-bottom bg-info text-primary">
                Bayu
              </p>
            </div>
            <div class="shadow-lg mb-2 rounded">
              <p class="dash-title bg-info text-primary rounded-top">Menu</p>
              <div class="active bg-primary rounded text-white">Barang</div>
              <div class="active">
                <router-link to="/supplier"> Suplier </router-link>
              </div>
            </div>
            <div class="shadow-lg mb-2 rounded">
              <p class="dash-title-online bg-info text-primary rounded-top">
                Online
              </p>
              <div class="d-flex justify-content-evenly">
                <div>hari online</div>
                <div>: tgl - -</div>
              </div>
              <div class="d-flex justify-content-evenly">
                <div>waktu online</div>
                <div>: tgl - -</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      <div class="col-md-9 shadow-lg rounded-3 data-cont">

        <h3 class="bg-info text-primary rounded-top p-2">Dashboard</h3> 
        <h4 class="mx-4">Barang</h4>
        <div class="d-flex justify-content-evenly p-2">
             <form @submit.prevent="Search" class="bd-searc w-search">
             <div class="input-group input-group-lg px-3 ">
              <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" v-model="searchName" autofocus required />
              <button class="input-group-text">cari</button>
             </div>
             </form>
          <div class="d-flex justify-content-end p-2 gap-3">
            <router-link to="/tambahbarang">
              <button class="btn btn-primary add-button">
                Tambah Barang
              </button>
            </router-link>
          </div>
        </div>
     
        <div class="table-responsive p-2">
          <table class="table table-bordered">
            <tr>
              <td>No</td>
              <td>Nama Barang</td>
              <td>Stock</td>
              <td>Harga</td>
              <td>Nama Suplier</td>
              <td>Alamat Suplier</td>
              <td>No Telp Supplier</td>
              <td>Aksi</td>
            </tr>
            <tbody v-if="hasilfilter?.length > 0">
              <tr v-for="(data, index) in hasilfilter" v-bind:key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ data.namaBarang }}</td>
                <td>{{ data.harga }}</td>
                <td>{{ data.stok }}</td>
                <td>{{ data?.supplier?.namaSupplier }}</td>
                <td>{{ data?.supplier?.alamat }}</td>
                <td>{{ data?.supplier?.noTelp }}</td>
                <td class="d-lg-flex gap-2">
                  <router-link to="#">
                    <button @click="deleteTableRow(data.id)" class="btn btn-danger action">
                      Hapus
                    </button>
                  </router-link>
                  <button @click="updateTableRow(data.id)" class="btn btn-warning action">
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="(data, index) in dataBarang" v-bind:key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ data.namaBarang }}</td>
                <td>{{ data.harga }}</td>
                <td>{{ data.stok }}</td>
                <td>{{ data?.supplier?.namaSupplier }}</td>
                <td>{{ data?.supplier?.alamat }}</td>
                <td>{{ data?.supplier?.noTelp }}</td>
                <td class="d-lg-flex gap-2">
                  <router-link to="#">
                    <button @click="deleteTableRow(data.id)" class="btn btn-danger action">
                      Hapus
                    </button>
                  </router-link>
                  <button @click="updateTableRow(data.id)" class="btn btn-warning action">
                    Update
                  </button>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
        <div class="d-flex justify-content-end p-2 gap-3">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <button @click="prev()" class="btn btn-info text-white">Prev</button>
              </li>
              <li class="page-item"><a class="page-link" href="#">{{offset}}</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">{{offset+1}}</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">{{offset+2}}</a></li>
              <li class="page-item">
                <button @click="next()" class="btn btn-primary">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  data: function () {
    return {
      offset: 1,
      searchName: "",
      dataBarang: [],
      hasilfilter: [],
    };
  },
  created() {
    this.getData();
    console.log('masuk created')
  },
  components: {
    Navbar,
  },
  methods: {
    Search() {
      console.log("searc =", this.searchName);
      const filteredData = this.dataBarang.filter((barang) => {
        return barang.namaBarang.toLowerCase().includes(this.searchName);
      });

      console.log("filter data ==", filteredData);
      this.hasilfilter = filteredData;
      console.log("hasil filter", this.hasilfilter);
    },
    next() {
      this.offset++;
      this.getData();
      console.log("offset = ", this.offset);
    },
    prev() {
      if (this.offset > 1) {
        this.offset--;
        this.getData();
      } else {
        this.offset = 0;
      }
      console.log("offset = ", this.offset);
    },
    async getData() {
      const { data } = await axios.get(
        "http://159.223.57.121:8090/barang/find-all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
            "Content-Type": "application/json",
          },
          params: {
            offset: this.offset,
            // offset: 1,
            limit: 10,
          },
        }
      );
      console.log("ofsets ==", this.offset);
      console.log("data:", data.data);
      this.dataBarang = await data.data;
    },
    async deleteTableRow(id) {
      console.log("id:", id);
        this.$swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
             axios
                .delete("http://159.223.57.121:8090/barang/delete/" + id, {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json",
                  },
                })
                .then(async (response) => {
                  const data = await response.data;

                  if (data.status === "OK") {
                    this.$swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                    this.getData();
                  }
                });
              }else{
                this.getData();
              }
           })
    },
    updateTableRow(id) {
      console.log("id:", id);
      this.$router.push({ name: "updatebarang", query: { id: id } });
    },
  },
};
</script>

<style>
.w-search{
  width:90%;
  margin-top:10px;
}
.add-button {
  height: 50px;
  width:150px

}
.dash-title-prof {
  font-size: 25px;
  padding: 5px;
  height: 70px;
}

.dash-title {
  font-size: 25px;
  padding: 5px;
  height: 60px;
}

.dash-title-online {
  font-size: 25px;
  padding: 5px;
  height: 40px;
}

.action {
  width: 80px;
  margin-top: 1px;
}
</style>
