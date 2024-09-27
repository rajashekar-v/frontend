<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <h1>{{ welcomeMessage }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
      welcomeMessage: '',
    };
  },
  created() {
    axios.get('http://localhost:5000/api/hello')
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error(error);
      });
      axios.get('http://localhost:5000/api/welcome')
      .then(response => {
        this.welcomeMessage = response.data.message;
      })
      .catch(error => {
        console.error(error);
      });  
  }
};
</script>

<style>
/* Add your styles here */
</style>
