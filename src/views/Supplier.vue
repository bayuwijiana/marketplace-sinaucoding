<template>
<Navbar/>
    <section class="container-fluid">
            <div class="row justify-content-lg-evenly content-dash">
               <div class="col-2 lf" >
                <div class="dash-prof ">
                    <div class="col-lg-2 text-primary text-center left-prof ">
                        <div class=" profil shadow-lg rounded pt-3">
                            <img src="../assets/profil-log.png" class="log-profil mb-4 ">
                            <p class="dash-title-prof rounded-bottom bg-info text-primary">Bayu</p>
                        </div>
                        <div class=" shadow-lg mb-2 rounded ">
                            <p class="dash-title bg-info text-primary rounded-top">
                                Menu
                            </p>
                            <div class="active ">
                                <router-link to="/barang">
                                    Barang
                                </router-link>
                            </div>
                            <div class="active bg-primary text-white rounded">
                                Suplier
                            </div>
                        </div>
                        <div class=" shadow-lg mb-20 rounded">
                            <p class="dash-title-online bg-info text-primary rounded-top">Online</p>
                            <div class="d-flex justify-content-evenly ">
                                <div>hari online </div>
                                <div>: tgl - -</div>
                            </div>
                            <div class="d-flex justify-content-evenly ">
                                <div>waktu online </div>
                                <div>: tgl - -</div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
                <div class=" col-md-9 shadow-lg rounded-3 data-cont ">
                    <h3 class="bg-info text-primary rounded-top p-2">Dashboard</h3>
                    <div class="d-flex justify-content-between p-2">
                    <h4>Suplier</h4>
                    <router-link to="/tambahsupplier">
                        <button class="btn btn-primary ">
                            Tambah Supllier
                        </button>
                    </router-link>
                    </div>
                    <div class="table-responsive p-2">
                        <table class="table table-bordered">
                            <tr>
                                <td>No</td>
                                <td>Nama Suplier</td>
                                <td>Alamat</td>
                                <td>No Telpn</td>
                                <td class="d-lg-flex justify-content-center">
                                    Aksi
                                </td>
                            </tr>
                            <tbody>
                                <tr v-for="(data,index) in dataSupplier" v-bind:key="data.index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ data.namaSupplier }}</td>
                                    <td>{{ data.alamat  }}</td>
                                    <td>{{data.noTelp}}</td>
                                    <td class="d-lg-flex gap-2 justify-content-center">
                                        <button class="btn btn-danger action">Hapus</button>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                
                </div>
            </div>
    </section>
</template> 


<style>

.dash-title-prof{
    font-size: 25px;
    padding: 5px;
    height: 70px;

}
.dash-title{
    font-size: 25px;
    padding: 5px;
    height: 60px;

}.dash-title-online{
    font-size: 25px;
    padding: 5px;
    height: 40px;
}


.action{
    width: 80px;
    margin-top: 1px;
}
</style>

<script>
import Navbar from '../components/Navbar.vue'
import axios from "axios"

export default {
    created() {
        this.getSupplier();
    },
    components: {
        Navbar,
    },
    methods: {
        async getSupplier() {
            const { data } = await axios.get(" http://159.223.57.121:8090/supplier/find-all",
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
        }
    },
    data: function () {
        return {
            dataSupplier: []
        }
    }

}
</script>