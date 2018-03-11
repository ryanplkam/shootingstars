<template>
  <header>Hi {{ this.$root.$data.user ? this.$root.$data.user.email : "" }}</header>
</template>

<script>

  import firebase from 'firebase'

  export default {
    name: 'the-header',
    // es6 implicit return
    data() {
      return {
        currentUser: firebase.auth().currentUser
      }
    }

  }
</script>