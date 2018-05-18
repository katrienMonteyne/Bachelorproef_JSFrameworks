// Het is mogelijk om een externe html file te importeren. In die file kan er gebruik gemaakt worden van de Vue richtlijnen
<template src="../html/profile.html">
</template>

<script>
import axios from "axios";
import Personalia from "@/components/personalia";
import languages from "@/components/language";

// Door de export zal de data doorgestuurd worden
// Bij andere componenten kan het opgeroepen worden door een import
export default {
  components: {
    Personalia: {
      props: {
        usero: this.user
      }
    }
  },
  data: function() {
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
  beforeMount: function() {
    this.getUser();
  },
  methods: {
    getUser: function() {
      // De user ophalen a.d.h.v. ID
      // In dit geval de eerste
      axios
        .get("http://localhost:4000/users/1")
        .then(response => {
          this.user = response.data;
        })
        .catch(err => {
          console.log(err);
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
      if (this.user.languages.length > 0) {
        this.user.languages = this.user.languages.filter(obj => obj !== taal);
        axios
          .patch("http://localhost:4000/users/1", {
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
