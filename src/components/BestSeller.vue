<template>
  <div id="BestSeller">
     <div class="container">
         <div class="row  mt-5">
             <div class="col">
                 <h1><span>Premium</span> Products for <span>Every Need</span></h1>
                   <!-- <h1 style="float:right;">Barang Telaris</h1> -->
             </div>
             <div class="col text-right">
                 <h1>Barang Telaris</h1>
             </div>
        </div>  

        <!-- dekstop -->
           <div class="best-scrollbar d-none d-lg-block" >
                <carousel class="row" :items="5" :nav="false" >
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px; " class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>{{ NamaProduct }}</b></h5>
                                    <p class="card-text"><span>IDR</span> {{ HargaProduct }}</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                     <h5 class="card-title"><b>{{ NamaProduct }}</b></h5>
                                    <p class="card-text"><span>IDR</span> {{ HargaProduct }}</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                </carousel>
            </div>
        <!-- akhir dekstop -->

 
        <!-- mobile -->
           <div class="best-scrollbar d-lg-none d-sm-block">
                   <carousel class="row" :items="2" :nav="false" >
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                         <div class="col">
                            <div class="card" style="width:100%;">
                            <div class="images text-center py-2" style="background:#EBEAE7;">
                                    <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                            </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title"><b>Nike Blazer</b></h5>
                                    <p class="card-text"><span>IDR</span> 180.000</p>
                                    <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                                </div>
                            </div>
                        </div>
                </carousel>
            </div>
        <!-- akhir mobile -->
        
     </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'BestSeller',
  components : {
      carousel
  },
  data () {
    return {
            NamaProduct : 'Nike Mantap',
            HargaProduct : '100.000'
        }
  }
}
</script>

<style>
  #BestSeller .images img {
            margin-left: auto;
            margin-right: auto;
            display: block;
        }
     
</style>