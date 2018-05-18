<template src="../html/profile.html">
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
        .get("http://localhost:4000/users/1")
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
    deleteLanguage: function(taal) {
      console.log(this.user.languages.length);

      if (this.user.languages.length > 0) {
        this.user.languages = this.user.languages.filter(obj => obj !== taal);
        axios
          .patch("http://localhost:4000/users/1", {
            languages: this.user.languages
          })
          .then(response => {
            console.ßlog(response);
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
template {
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

.gegevens {
  background-color: #fff;
  display: flex;
  justify-content: center;
  text-align: left;
}
.gegevens > div:first-child {
  width: auto;
  padding-right: 20px;
  font-weight: bold;
}
</style>