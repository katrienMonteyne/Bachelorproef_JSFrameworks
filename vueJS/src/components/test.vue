<template>
<div>

  <div :is="currentComponent"></div>

  
      <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>

  <div @click="swapComponent"> KLIK HIER </div>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" v-bind:key="error.id">
      {{error.message}}
    </li>
  </ul>
</div>

</template>

<script>
import axios from "axios";
import HelloWorld from '@/components/HelloWorld'

export default {
  data() {
    return {
      posts: [],
      errors: [],
      currentComponent: null
    };
  },

  methods: {
    created: function() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
    },
    swapComponent: function() {
      this.currentComponent = HelloWorld;
    }

  }

};
</script>