<template>
  <header>Hi {{ currentUser ? currentUser.email : "" }}</header>
</template>

<script>

  import firebase from 'firebase'

  export default {
    name: 'the-header',
    // receive the prop
    // Root vue instance => App.vue => TheHeader.vue
    props: ['currentUser']
  }
</script>

<style>
  header {
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>