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
                            <div class="active">
                                Barang
                            </div>
                            <div class="active">
                                Suplier
                            </div>
                        </div>
                        <div class=" shadow-lg mb-2 rounded">
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
                        <h4>Barang</h4>
                        <router-link to="/tambahbarang">
                            <button class="btn btn-primary ">
                                Tambah Barang
                            </button>
                        </router-link>
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
                                    <td>
                                        Aksi
                                    </td>
                                </tr>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
                                        <router-link to="#">
                                        <button class="btn btn-danger action">Hapus</button>
                                        </router-link>
                                        <button class="btn btn-warning action">Update</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Yanjing</td>
                                    <td>704</td>
                                    <td>10092</td>
                                    <td>Comodo</td>
                                    <td>King Wiliam Route</td>
                                    <td>0-877-937</td>
                                    <td class="d-lg-flex gap-2">
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
// import axios from "axios"

export default {
    components: {
        Navbar,
    },
    // methods:{
    //     async getData(){
    //         const data = await axios.get('http://159.223.57.121:8090/barang/find-all',{
    //             header:{
    //                 'Autorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYXl1ZXp6aW8yIiwiZXhwIjoxNjY1NDcwMzU2LCJpYXQiOjE2NjU0NTIzNTZ9.X0MNdy2oVcfab91Iaw1ldgIMHaRRB51XyBgkowMl3VHk6JlzyRebt_vLQlmN7ajKXiRAz6ksdPXA46L4UtJScQ',

    //                 'Content-Type':'application/json'
    //             }
    //         }
            
    //         )
    //         console.log('data:',data);
    //     }
    // }

}
</script>