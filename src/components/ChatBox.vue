<template>
<div class="wrapper-chatbox">
    <div class="main">
        <div class="px-2 scroll">
            <div v-for="(message, i) in messages" :key="i" class="d-flex align-items-center">
                <div class="text-left pe-1"><img :src="message.icon" width="30" class="img1" /></div>
                <div class="pe-2 ps-1"> <span class="name">{{message.name}}</span>
                    <p class="msg">{{message.message}}</p>
                </div>
            </div>
        </div>
        <nav class="navbar bg-white navbar-expand-sm d-flex justify-content-between"> <input v-model="message" type="text number" name="text" class="form-control" placeholder="Type a message...">
            <div class="icondiv d-flex justify-content-end align-content-center text-center ms-2"><i @click.prevent="sendMessage" class="fa fa-arrow-circle-right icon2 pe-3"></i> </div>
        </nav>
    </div>
</div>
</template>

<script>
export default {
  name: 'ChatBox',
  data () {
    return {
      message: ''
    }
  },
  props: ['teamBadge'],
  computed: {
    username: function () {
      return localStorage.getItem('username')
    },
    messages: function () {
      return this.$store.state.messages
    }
  },
  methods: {
    sendMessage () {
      const payload = {
        name: this.username,
        message: this.message,
        icon: this.teamBadge
      }
      this.$store.commit('SEND_message', payload)
      console.log(this.message)
      console.log(payload)
      this.message = ''
    }
  }
}
</script>

<style>
body {
    background-color: #fff
}

::-webkit-scrollbar {
    width: 10px
}

::-webkit-scrollbar-track {
    background: #eee
}

::-webkit-scrollbar-thumb {
    background: #888
}

::-webkit-scrollbar-thumb:hover {
    background: #555
}

.wrapper-chatbox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    background-color: #eee;
    width: 320px;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 6px 0px 0px 0px
}

.scroll {
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 325px
}

.img1 {
    border-radius: 50%;
    background-color: #66BB6A
}

.name {
    font-size: 8px
}

.msg {
    background-color: #fff;
    font-size: 11px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 500;
    color: #3e3c3c
}

.between {
    font-size: 8px;
    font-weight: 500;
    color: #a09e9e
}

.wrapper-chatbox .navbar {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.form-control {
    font-size: 12px;
    font-weight: 400;
    width: 230px;
    height: 30px;
    border: none
}

form-control:focus {
    box-shadow: none;
    overflow: hidden;
    border: none
}

.form-control:focus {
    box-shadow: none !important
}

.icon1 {
    color: #7C4DFF !important;
    font-size: 18px !important;
    cursor: pointer
}

.icon2 {
    color: #512DA8 !important;
    font-size: 18px !important;
    position: relative;
    left: 8px;
    padding: 0px;
    cursor: pointer
}

.icondiv {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    padding: 2px;
    position: relative;
    bottom: 1px
}
</style>
