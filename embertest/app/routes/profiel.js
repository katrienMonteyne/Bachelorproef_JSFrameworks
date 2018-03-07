import Route from '@ember/routing/route';

export default Route.extend({
    personaliaEdit: false,
    show: true,

    actions: {
        togglePersonalia() {
            this.toggleProperty('personaliaEdit');
            this.toggleProperty('show')
            console.log("personaliaEdit:" + this.personaliaEdit);
            console.log("show:" + this.show);
            console.log("****************");
        }
    },
    model() {
        /*return {
            user: {
                id: 1,
                firstname: "",
                lastname: "Monteyne",
                age: null,
                address: null,
                sex: "Vrouw",
                email: "",
                languages: [
                    {
                        taal: "Nederlands",
                        beheersing: 3
                    }
                ]
            }

        }*/
        // return this.store.findRecord('user', 1)
        // .then((result) => { //console.log(result) 
        // }) ;//
        return this.get('store').findAll('user').then((users) => {
            console.log(users)
          }, (err) => {
            console.log(err);
          });
    }

});
