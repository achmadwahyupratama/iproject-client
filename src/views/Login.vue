<template>
    <div class="container-fluid mw-100 mh-100 p-3 page">
        <div class="row main-content bg-success text-center">
            <!-- <div class="col-md-4 text-center company__info">
                <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
                <h4 class="company_title">Kick Off</h4>
            </div> -->
            <div class="col-md-12 col-xs-12 col-sm-12 login_form ">
                <div class="container-fluid">
                    <div class="row">
                        <h2>Log In</h2>
                    </div>
                    <div class="row">
                        <form @submit.prevent="login" class="form-group">
                            <div class="row">
                                <input v-model="email" type="email" name="email" id="email" class="form__input" placeholder="Email">
                            </div>
                            <div class="row">
                                <input v-model="password" type="password" name="password" id="password" class="form__input" placeholder="Password">
                            </div>
                            <div class="row">
                                <input type="submit" value="Login" class="btn">
                            </div>
                        </form>
                    </div>
                    <div class="row">
                        <p>Don't have an account? <router-link to="/register" >Register Here</router-link></p>
                        <!-- <p>or</p> -->
                    </div>
                    <!-- <div class="row d-flex justify-content-center">
                        <div class="col-4">
                            <g-signin-button
                                :params="googleSignInParams"
                                @success="onSignInSuccess"
                                @error="onSignInError">
                                Sign in with Google
                            </g-signin-button>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      googleSignInParams: {
        client_id: '630825510819-vttgglhqu2cv18efpg5eb0h772d0hcp6.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          this.$store.dispatch('fetchCountries')
          this.$store.dispatch('fetchFavourites')
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      const token = googleUser.getAuthResponse().id_token
      console.log(profile, token)
      this.$store.dispatch('loginWithGoogle', token)
        .then(({ data }) => {
          console.log('sucsess login google')
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          this.$store.dispatch('fetchCountries')
          this.$store.dispatch('fetchFavourites')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style scoped>
.main-content{
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0,0,0,.4);
  margin: 5em auto;
  display: flex;
}
.fa-android{
  font-size:3em;
}
@media screen and (max-width: 640px) {
  .main-content{width: 90%;}
  .company__info{
    display: none;
  }
  .login_form{
  border-top-left-radius:20px;
  border-bottom-left-radius:20px;
  }
}
@media screen and (min-width: 642px) and (max-width:800px){
  .main-content{width: 70%;}
}
.row > h2{
  color:#161D6F;
}
.login_form{
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
  border-top:1px solid #ccc;
  border-right:1px solid #ccc;
}
form{
  padding: 0 2em;
}
.form__input{
  width: 100%;
  border:0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em .5em .5em;
  padding-left: 2em;
  outline:none;
  margin:1.5em auto;
  transition: all .5s ease;
}
.form__input:focus{
  border-bottom-color: #161D6F;
  box-shadow: 0 0 5px rgba(0,80,80,.4);
  border-radius: 4px;
}
.btn{
  transition: all .5s ease;
  width: 70%;
  border-radius: 30px;
  color:#161D6F;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #161D6F;
  margin-top: 1.5em;
  margin-bottom: 1em;
}
.btn:hover, .btn:focus{
  background-color: #161D6F;
  color:#fff;
}
.g-signin-button {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #3c82f7;
    color: #fff;
    box-shadow: 0 3px 0 #0f69ff;
    cursor: pointer;
  }
  .page {
    background-image: url('https://i.pinimg.com/originals/14/05/9c/14059cabed5424a2eba4fd3d099ae543.jpg');
    width: 100%;
    height: auto;
    background-size: cover;
  }
</style>
