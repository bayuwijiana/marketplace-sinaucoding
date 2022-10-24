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
              <div class="active">
                <router-link to="/barang"> Barang </router-link>
              </div>
              <div class="active bg-primary text-white rounded">Suplier</div>
            </div>
            <div class="shadow-lg mb-20 rounded">
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
        <h4 class="mx-4">Supplier</h4>
        <div class="d-flex justify-content-evenly p-2">
             <form @submit.prevent="SearchSuplier" class="bd-searc w-search">
             <div class="input-group input-group-lg px-3 ">
              <input type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" v-model="searchSupllier" autofocus required />
              <button class="input-group-text">cari</button>
             </div>
             </form>
          <div class="d-flex justify-content-end p-2 gap-3">
            <router-link to="/tambahsupplier">
              <button class="btn btn-primary add-button">
                Tambah Supplier
              </button>
            </router-link>
          </div>
        </div>
        <!-- <h3 class="bg-info text-primary rounded-top p-2">Dashboard</h3>
        <div class="d-flex justify-content-between p-2">
          <h4>Suplier</h4>
          <router-link to="/tambahsupplier">
            <button class="btn btn-primary">Tambah Supllier</button>
          </router-link>
        </div>
        <form @submit.prevent="SearchSuplier" class="bd-searc">
          <div class="input-group input-group-sm px-3">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              v-model="searchSupllier"
              autofocus
              required
            />
            <button class="input-group-text">cari</button>
          </div>
        </form> -->

        <div class="table-responsive p-2">
          <table class="table table-bordered">
            <tr>
              <td>No</td>
              <td>Nama Suplier</td>
              <td>Alamat</td>
              <td>No Telpn</td>
              <td class="d-lg-flex justify-content-center">Aksi</td>
            </tr>
            <tbody v-if="hasilFilterSupplier?.length > 0" >
              <tr v-for="(data, index) in hasilFilterSupplier" v-bind:key="data.index">
                <td>{{ index + 1 }}</td>
                <td>{{ data.namaSupplier }}</td>
                <td>{{ data.alamat }}</td>
                <td>{{ data.noTelp }}</td>
                <td class="d-lg-flex gap-2 justify-content-center">
                  <button
                    @click="deleteTableRow(data.id)"
                    class="btn btn-danger action"
                  >
                    Hapus
                  </button>
                  <button
                    @click="updateTableRow(data.id)"
                    class="btn btn-warning action"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="(data, index) in dataSupplier" v-bind:key="data.index">
                <td>{{ index + 1 }}</td>
                <td>{{ data.namaSupplier }}</td>
                <td>{{ data.alamat }}</td>
                <td>{{ data.noTelp }}</td>
                <td class="d-lg-flex gap-2 justify-content-center">
                  <button
                    @click="deleteTableRow(data.id)"
                    class="btn btn-danger action"
                  >
                    Hapus
                  </button>
                  <button
                    @click="updateTableRow(data.id)"
                    class="btn btn-warning action"
                  >
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
      searchSupllier:'',
      dataSupplier: [],
      hasilFilterSupplier: [],
      offset: 1,
    };
  },
  created() {
    this.getSupplier();
    console.log('in created')
  },
  components: {
    Navbar,
  },
  methods: {
    next() {
      this.offset++;
      this.getSupplier();
      console.log("offset = ", this.offset);
    },
    prev() {
      if (this.offset > 1) {
        this.offset--;
        this.getSupplier();
      } else {
        this.offset = 0;
      }
      console.log("offset = ", this.offset);
    },
    SearchSuplier() {
      console.log("searc =", this.searchSupllier);
      const filteredData = this.dataSupplier.filter((supplier) => {
        return supplier.namaSupplier.toLowerCase().includes(this.searchSupllier);
      });

      console.log("filter data ==", filteredData);
      this.hasilFilterSupplier = filteredData;
      console.log("hasil filter", this.hasilFilterSupplier);
    },
    async getSupplier() {
      const { data } = await axios.get(
        " http://159.223.57.121:8090/supplier/find-all",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
            "Content-Type": "application/json",
          },
          params: {
            offset:this.offset,
            // offset: 0,
            limit: 15,
          },
        }
      );
      console.log("data:", data.data);
      this.dataSupplier = await data.data;
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
                .delete("http://159.223.57.121:8090/supplier/delete/" + id, {
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
                    this.getSupplier()
                  }
                });
              }else{
                this.getSupplier();
              }
           })
    },
    updateTableRow(id) {
      console.log("id:", id);
      this.$router.push({ name: "updatesupplier", query: { id: id } });
    },
  },
};
</script>

<style>
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

