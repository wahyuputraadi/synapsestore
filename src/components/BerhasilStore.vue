<template>
    <div id="berhasil-store">
       <div class="berhasil text-center" style="margin-top:10%;">
           <img src="../assets/pesan-terkirim.png" alt="">
           <div class="desc mt-3">
           <h1>Yeay ! <br> <b>Pesanan Berhasil</b></h1>
           <router-link to="/"><button class="btn btn-warning text-white py-3">Back To Home</button></router-link>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'BerhasilStore'
}
</script>

<style>

</style>