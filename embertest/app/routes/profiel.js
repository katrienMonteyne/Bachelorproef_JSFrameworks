import Route from '@ember/routing/route';

export default Route.extend({
    personaliaEdit:false,
    model(){
        return{
            user: {
                id: 1,
                firstname : "",
                lastname : "Monteyne",
                age : null,
                address : null,
                sex : "Vrouw",
                email: "",
                languages: [
                    {
                        taal : "Nederlands",
                        beheersing : 3
                    }
                ]
            }
            
        }
    },
    actions: {
        togglePersonalia(){
            this.toggleProperty('personaliaEdit');
             //console.log(this.personaliaEdit);
        }
    }

});
