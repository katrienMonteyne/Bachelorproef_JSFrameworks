<template>
  <div>

    <h1>Mijn profiel</h1>
    <div>
      <h2>Personalia</h2>
      <div v-show="personaliaComp">
        <hr>
        <div class="gegevens">
          <div>
            <p>Naam: </p>
            <p>Leeftijd: </p>
            <p>Adres: </p>
            <p>Geslacht: </p>
            <p>Email: </p>
          </div>
                  <div>
              <p> {{user.firstname}} {{user.lastname}}</p>
              <p v-if="user.firstname == null && user.lastname ==null" class="red">
                U hebt uw naam nog niet ingevuld.
              </p>
              <p> {{user.age}}</p>
              <p v-if="user.age == null" class="red">
                U hebt uw leeftijd nog niet ingegeven.
              </p>
              <p> {{user.address}}</p>
              <p v-if="user.address == null" class="red">
                U hebt uw adres nog niet ingegeven.
              </p>
              <p>{{user.sex}}</p>
              <p v-if="user.sex == null" class="red">
                U hebt uw geslacht nog niet ingegeven.
              </p>
              <p> {{user.email}}</p>
              <p v-if="user.email == null || user.email ==''" class="red">
                U hebt uw email nog niet ingegeven.
              </p>
            </div>
        </div>



        <p class="klikable" @click="swapPersonalia"> WIJZIG UW GEGEVENS HIER</p>
      </div>
      <div :is="perscurrentcomp">
      </div>
    </div>
    <br>
    <br>
    <div>
      <h2>Talen</h2>
      <hr>
        <div v-if="user.languages.length > 0">
          <p v-for="lang in user.languages" v-bind:key="lang.id">
            {{lang.taal}} <span @click="deleteLanguage(lang)" class="klikable">Verwijderen</span>
          </p>
        </div>
        <p v-show="languageComp" class="klikable" @click="swapLanguages"> WIJZIG HIER UW TALEN</p>
         <div :is="langcurrentComp"></div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Personalia from "@/components/personalia";
import languages from "@/components/language";

// door de export zal de data doorgestuurd worden
// bij andere componenten kan het opgeroepen worden door import van component te doen.
export default {
  data() {
    return {
      personaliaComp: true,
      perscurrentcomp: null,
      languageComp: true,
      langcurrentComp: null,
      user: {
        firstname: null,
        lastname: null,
        age: null,
        address: null,
        sex: null,
        email: null,
        languages: []
      }
    };
  },
  methods: {
    getUser: function() {
      // gewoon de eerste user ophalen, uit gemak
      axios
        .get("http://localhost:3000/users/1")
        .then(response => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch(e => {
          console.log(e);
        });
    },
    swapPersonalia: function() {
      this.personaliaComp
        ? (this.personaliaComp = false)
        : (this.personaliaComp = true);
      this.perscurrentcomp = Personalia;
    },
    swapLanguages: function() {
      this.languageComp
        ? (this.languageComp = false)
        : (this.languageComp = true);
      this.langcurrentComp = languages;
    },
    deleteLanguage: function (taal){
      console.log(this.user.languages.length);

      if (this.user.languages.length > 0) {

      this.user.languages = this.user.languages.filter(obj => obj !== taal);
                  axios
                      .patch('http://localhost:3000/users/1',{
                          languages: this.user.languages
                      })
                      .then(response => {
                          console.log(response);
                      })
                      .catch(e => {
                          console.log(e);
                      });

    }

    }
  },
  beforeMount() {
    this.getUser();
  },
  components: {
    Personalia: {
      props: {
        usero: this.user
      }
    }
  }
};
</script>

<style>
template{
  padding-bottom: 200px;
  height: auto;
}
p.red {
  color: red;
}

.klikable {
  color: #1269d3;
}

.klikable:hover {
  cursor: pointer;
}

.gegevens{
  background-color: #fff;
  display: flex;
  justify-content: center;
  text-align: left;
}
.gegevens >div:first-child {
  width: auto;
  padding-right: 20px;
  font-weight: bold;
}
</style>