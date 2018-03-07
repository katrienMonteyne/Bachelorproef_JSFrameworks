import Route from '@ember/routing/route';

export default Route.extend({
    personaliaEdit:true,
    show: false,
    actions: {
        togglePersonalia(){
            this.toggleProperty('personaliaEdit');
            this.toggleProperty('show')
             console.log("personaliaEdit:" + this.personaliaEdit);
             console.log("show:" + this.show);
             console.log("****************");
        }
    }
    // model(){
    //     return{
    //         user: {
    //             id: 1,
    //             firstname : "",
    //             lastname : "Monteyne",
    //             age : null,
    //             address : null,
    //             sex : "Vrouw",
    //             email: "",
    //             languages: [
    //                 {
    //                     taal : "Nederlands",
    //                     beheersing : 3
    //                 }
    //             ]
    //         }  
    //     }
    // }
});
