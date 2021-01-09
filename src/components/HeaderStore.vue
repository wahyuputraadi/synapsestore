<template>
  <div id="HeaderStore">
     <!-- navbar -->
     <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
                <router-link class="navbar-brand" to="/"><img src="../assets/logo.png"></router-link> 
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-lg-6  search-bar">     
                  <input class="form-control" type="search" placeholder="Belanjo Apo Hai ini looorr ..... " aria-label="Search"> 
                </div>
                <div class="col-lg-1">
                  <img width="28px" height="auto" src="../assets/favorit.png" alt="">
                </div>
                <div class="col-lg-1">
                  <img width="28px" height="auto" src="../assets/keranjang.png" alt="">
                </div>
                <div class="col-lg-2">
                  <router-link to="" class="btn btn-outline-success form-control" data-toggle="modal" data-target="#register"  data-backdrop="static" >Register</router-link>
                </div>
                <div class="col-lg-2 text-left">
                  <router-link to="" class="btn btn-success form-control" data-toggle="modal" data-target="#exampleModalCenter">Login</router-link>
                </div>

               <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        <a href="#register">belum punya akun ?  Daftar Sekarang </a> 
                        </div>
                      </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
                      </div>
                    </div>
                  </div>
                </div>

                 <!-- Modal -->
                <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        <h6>belum punya akun ? <router-link to="#register">Daftar Sekarang</router-link> </h6>
                        </div>
                      </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </nav>
      </div>
     <!-- akhir navbar -->
  </div>
</template>

<script>
export default {
  name: 'HeaderStore',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
