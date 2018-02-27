<template>
<div>
    
    <h1>Mijn profiel</h1>

    


</div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postBody: '',
      errors: []
    }
  },
  methods: {
  // Pushes posts to the server when called.
  postPost: function() {
     
    axios.post(`http://localhost:3000/posts`, {
      body: this.postBody 
    })
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      this.errors.push(e)
      console.log(errors); 
    })

    // async / await version (postPost() becomes async postPost())
    //
    // try {
    //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //     body: this.postBody
    //   })
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }}
}
</script>