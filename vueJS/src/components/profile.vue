<template>
  <div>
  
    <h1>Mijn profiel</h1>
    <div>
      <h2>Personalia</h2>
      <div v-show="personaliaComp">
  
        <hr><p> {{user.firstname}} {{user.lastname}}</p>
        <p v-if="user.firstname == null && user.lastname ==null" class="red">
          U hebt uw naam nog niet ingevuld.
        </p>
        <p> {{user.age}}</p> 
        <p v-if="user.age == null" class="red">
          U hebt uw leeftijd nog niet ingegeven.
        </p>
        <p>        {{user.address}}</p>

        <p v-if="user.address == null" class="red">
          U hebt uw adres nog niet ingegeven.
        </p>
        <p>{{user.sex}}</p> 
        <p v-if="user.address == null" class="red">
          U hebt uw geslacht nog niet ingegeven.
        </p>
        <p> {{user.email}}</p>
        <p v-if="user.email == null" class="red">
          U hebt uw email nog niet ingegeven.
        </p>
        <p @click="swapComponent"> WIJZIG UW GEGEVENS HIER</p>
      </div>
      <div :is="currentcomp">
      </div>
    </div>
    <br>
    <br>
    <div>
      <h2>Opleidingen</h2>
      <hr>
    </div>
    <br>
    <br>
    <div>
      <h2>Vaardigheden</h2>
      <hr>
    </div>
  
  </div>
</template>

<script>
  import axios from 'axios';
  import Personalia from '@/components/personalia';
  
  // door de export zal de data doorgestuurd worden
  // bij andere componenten kan het opgeroepen worden door import van component te doen.
  export default {
    data() {
      return {
        personaliaComp: true,
        perscurrentcomp: null,
        user: {
          firstname: null,
          lastname: null,
          age: null,
          address: null,
          sex: null,
          email: null
        }
      }
    },
    methods: {
      getUser: function() {
        // gewoon de eerste user ophalen, uit gemak
        axios
          .get('http://localhost:3000/users/1')
          .then(response => {
  
            this.user = response.data;
            console.log(this.user);
          })
          .catch(e => {
            console.log(e);
          })
      },
      swapComponent: function() {
  
        this.personaliaComp ? this.personaliaComp = false : this.personaliaComp = true;
        this.perscurrentcomp = Personalia
  
  
      }
    },
    beforeMount() {
  
      this.getUser()
  
    },
    components: {
      Personalia: {
        props: {
          usero: this.user
        }
      }
    }
  }
</script>

<style>
  p.red {
    color: red;
  }
  .klikable {
    color:#1269D3;
  }
  .klikable:hover {
    cursor: pointer;
  }
</style>
