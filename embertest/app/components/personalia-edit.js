import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    user: computed('params.[]', function(){
        console.log(this.get('params')[0])
        return this.get('params')[0];
    })
    // didReceiveAttrs(){
    //     console.log(this.attrs.user.value)
    //     this.thisuser = this.attrs.user.value;
    // }

}).reopenClass({
    positionalParams: ['user']
});
