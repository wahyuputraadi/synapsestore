<template>
  <div id="promo-store">
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1><span>Get</span> your <span>products</span> at the <span>best price</span></h1>
            </div>
            <div class="col text-right m-auto">
                <h1>Promo hari ini</h1>
            </div>
        </div>

        <!-- dekstop -->
        .<div class="row d-none d-md-block" >
            <div class="scrollbar">
                <carousel class="row" :items="3" :nav="false" >
                    <div class="col">
                        <div class="card" style="width:100%;">
                        <div class="images text-cente" style="background:#EBEAE7;">
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
                        <div class="images text-center p-2" style="background:#EBEAE7;">
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
                        <div class="images text-center p-2" style="background:#EBEAE7;">
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
                        <div class="images text-center p-2" style="background:#EBEAE7;">
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
        </div>
        <!-- akhir dekstop -->

        <!-- mobile -->
        <div class="row d-lg-none d-sm-block">    
            <div class="scrollbar">
                <carousel class="row" :items="3" :nav="false" >
                     <div class="col-lg-3">
                        <div class="card" style="width:100%;">
                        <div class="images text-center p-2" style="background:#EBEAE7;">
                                <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                        </div>
                            <div class="card-body text-center">
                                <h5 class="card-title"><b>Nike Blazer</b></h5>
                                <p class="card-text"><span>IDR</span> 180.000</p>
                                <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" style="width:100%;">
                        <div class="images text-center p-2" style="background:#EBEAE7;">
                                <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                        </div>
                            <div class="card-body text-center">
                                <h5 class="card-title"><b>Nike Blazer</b></h5>
                                <p class="card-text"><span>IDR</span> 180.000</p>
                                <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" style="width:100%;">
                        <div class="images text-center p-2" style="background:#EBEAE7;">
                                <img style="width:100px;" class="card-img-top" src="../assets/lens.png" alt="Card image cap">
                        </div>
                            <div class="card-body text-center">
                                <h5 class="card-title"><b>Nike Blazer</b></h5>
                                <p class="card-text"><span>IDR</span> 180.000</p>
                                <a href="#" class="btn btn-success btn-sm">Lihat Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" style="width:100%;">
                        <div class="images text-center p-2" style="background:#EBEAE7;">
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
        </div>
        <!-- akhir mobile -->
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name :'PromoStore',
    components : {
        carousel
    } 
}
</script>

<style>
#promo-store .images img {
            margin-left: auto;
            margin-right: auto;
            display: block;
        }
</style>