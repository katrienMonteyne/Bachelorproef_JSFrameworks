<template>
    <div class="gegevens">
        <div>
            <label for="firstname">Voornaam: </label>
            <label for="lastname">Achternaam: </label>
            <label for="age">Leeftijd: </label>
            <label for="address">Adres: </label>
            <label for="sex">Geslacht: </label>
            <label for="mail">Emailadres: </label>
        </div>
        <form @change="checkForm">
            <p v-if="errors.length">
                <ul>
                    <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
                </ul>
            </p>
            <p>    
                <input type="text" name="firstname" id="firstname" v-model="user.firstname">
            </p>
            <p>
                <input type="text" name="lastname" id="lastname" v-model="user.lastname">
            </p>
            <p>  
                <input type="number" name="age" id="age" v-model="user.age">
            </p>
            <p>
                <input type="text" name="address" id="address" v-model="user.address">
            </p>
            <p>      
                <label for="m">Man: </label>
                <input type="radio" value="Man" id="m" name="sex" v-model="user.sex">
                <label for="v">Vrouw: </label>
                <input type="radio" value="Vrouw" id="v" name="sex" v-model="user.sex">
            </p>
            <p>  
                <input type="text" name="mail" id="mail" v-model="user.email">
            </p>
            <input type="button" value="SUBMIT" v-on:click="submit">
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import Profile from '@/components/profile'
    
    
    export default {
        props: {
            usero: {
                type: Object,
                required: false
            }
        },
        data() {
            return {
                errors: [],
                user: this.$parent.user
            }
        },
        methods: {
    
            submit: function() {
    
                axios
                    .patch('http://localhost:4000/users/1', {
                        firstname: this.user.firstname,
                        lastname: this.user.lastname,
                        age: this.user.age,
                        address: this.user.address,
                        sex: this.user.sex,
                        email: this.user.email
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(e => {
    
                        console.log(errors);
                    })

                this.$parent.personaliaComp = true;
                this.$parent.perscurrentcomp = null;

    
    
            },
            checkForm: function() {
                // telkens er iets veranderd van input in de form, kom je in deze functie terecht
                if(this.user.email != null && this.user.email != ""){
                    console.log("email is ingevuld");

                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!re.test(this.user.email)){
                        this.errors.push(" Vul een geldig emailadres in");
                    }
                }
                else{
                    this.errors =[];
                }
            }
    
        },
        beforeMount() {
            console.log(this.$parent.user);
            
        }
    
    }
</script>
<style src="../css/personalia.css">
</style>


