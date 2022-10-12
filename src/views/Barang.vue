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
                            <div class="active bg-primary rounded text-white">
                                Barang
                            </div>
                            <div class="active">
                                <router-link to="/supplier">
                                Suplier
                                </router-link>
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
                            <tr v-for="(data,index) in dataBarang" v-bind:key="data.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ data.namaBarang }}</td>
                                    <td>{{ data.harga }}</td>
                                    <td>{{ data.stok }}</td>
                                    <td>{{ data?.supplier?.namaSupplier}}</td>
                                    <td>{{ data?.supplier?.alamat}}</td>
                                    <td>{{ data?.supplier?.noTelp}}</td>
                                    <td class="d-lg-flex gap-2">
                                        <router-link to="#">
                                        <button @click='deleteTableRow(data.id)' class="btn btn-danger action">Hapus</button>
                                        </router-link>
                                        <button   @click='updateTableRow(data.id)' class="btn btn-warning action">Update</button>
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
    created(){
        this.getData();
    },
    components: {
        Navbar,
    },
    methods:{
        async getData(){
            const  {data}  = await axios.get("http://159.223.57.121:8090/barang/find-all",
            {
                headers:{
                    'Authorization'  :`Bearer ${localStorage.getItem('Token')}`, 
                    'Content-Type':'application/json'
                },
                params:{
                    offset: 0 ,
                    limit : 15
                }
            });
            console.log('data:', data.data);
            this.dataBarang= await data.data;
        },
        async deleteTableRow(id) {
            console.log('id:', id);
            await axios.delete("http://159.223.57.121:8090/barang/delete/" + id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                const data = await response.data;

                if (data.status === 'OK') {
                    alert('Hapus Barang sukses');
                    this.getData();
                }
            });
        },
        updateTableRow(id) {
            console.log('id:', id);
            this.$router.push({ name: 'updatebarang', query: { id: id } });
        }
    },
    data:function(){
        return {
            dataBarang:[]
        }
    }
}
</script>