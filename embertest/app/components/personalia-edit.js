import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    user: computed('params.[]', function(){
        console.log(this.get('params')[0])
        return this.get('params')[0];
    }),
    personaliaEdit:false,
    actions: {
        doSomething(){
            //stuurt de actie in de route aan
            //this.sendAction('doSomething');
            this.toggleProperty('personaliaEdit');

            //send post to change the user
        }
    }

}).reopenClass({
    positionalParams: ['user']
});
