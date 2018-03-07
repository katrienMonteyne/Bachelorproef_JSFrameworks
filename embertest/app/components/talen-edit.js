import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    talenEdit: false,
    talenLijst: ["Nederlands", "Engels", "Duits", "Frans", "Italiaans", "Fins", "Spaans", "Portugees"],
    selectedTaal: null,
    selectedBeheersing : null,
    btnDisabled: true,
    user: computed('params.[]', function () {
        console.log(this.get('params')[0])
        return this.get('params')[0];
    }),
    actions: {
        toggleEdit(value) {
            if(value === "save"){
                console.log(this.user.languages)
                let language = {
                    taal: this.selectedTaal,
                    beheersing: this.selectedBeheersing
                }
                this.user.languages.pushObject(language);
                this.set('selectedTaal', null);
                this.set('selectedBeheersing', null);

                //hier nog een post om de taal op te slaan
            }
            this.toggleProperty('talenEdit');
        },
        changeTaal(selected){
            this.set("selectedTaal", selected);
            if(this.selectedBeheersing !== null){
                this.set('btnDisabled' , false);
            }
        },
        changeBeheersing(selected){
            this.set("selectedBeheersing", selected);
            if(this.selectedTaal !== null){
                this.set('btnDisabled' , false);
            }
        }
    }
}).reopenClass({
    positionalParams: ['user']
});
