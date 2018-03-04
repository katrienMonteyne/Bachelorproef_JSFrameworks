<template>
    <div>
        <form @change="checkForm">
            <p>Selecteer een taal dat u beheerst</p>  
            <select v-model="selectedTaal.taal">
                <option v-for="taal in talen" v-bind:key="taal" v-bind:value="taal">
                    {{taal}}
                </option>
            </select>
            <p>Selecteer hoe goed u deze beheerst</p>
            <select v-model="selectedTaal.beheersing">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br>
            <input type="button" value="Toevoegen" v-on:click="add" v-bind:disabled="disabled">
            <br> <br>
            <input type="button" value="Opslaan" @click="save">
        </form>

    </div>
</template>
<script>
    import axios from 'axios';
    import Profile from '@/components/profile'

    export default {
        
        data(){
            return {
                user: this.$parent.user,
                talen: ["Nederlands", "Engels", "Duits", "Frans", "Fins", "Spaans", "Italiaans", "Portugees"],
                selectedTaal: [],
                disabled: true,
                lijst : new Array()
            }
        },
        methods: {
            checkForm: function() {

                if(this.selectedTaal.taal != null && this.selectedTaal.beheersing != null){
                    this.disabled = false;
                }

            },
            add: function (){
      
                this.user.languages.push(this.selectedTaal);
            
                this.user.languages.forEach(lan => {

                    this.lijst.push(
                        {
                            "taal": lan.taal,
                            "beheersing" : lan.beheersing
                        }
                    );
                    
                });

            },
            save: function (){

                console.log(this.lijst)

                 axios
                    .patch('http://localhost:3000/users/1',{
                        languages: lijst
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(e => {
                        console.log(e);
                    });

                this.$parent.languageComp = true;
                this.$parent.langcurrentComp = null;
            }
        }
    }
</script>
