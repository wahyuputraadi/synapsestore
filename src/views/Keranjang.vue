<template>
  <div id="keranjang">
      <header-store></header-store>
      <keranjang-store></keranjang-store>
      <div class="my-5">
        <promo-store></promo-store>
      </div>
      <footer-store></footer-store>
  </div>
</template>

<script>
import HeaderStore from '@/components/HeaderStore.vue'
import KeranjangStore from '@/components/KeranjangStore.vue'
import PromoStore from '@/components/PromoStore.vue'
import FooterStore from '@/components/FooterStore.vue'


export default {
    name: 'Keranjang',
    components : { 
        HeaderStore,
        KeranjangStore,
        PromoStore,
        FooterStore
        }
   
}
</script>

<style>

</style>