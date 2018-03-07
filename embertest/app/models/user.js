import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr(),
    age: DS.attr(),
    sex: DS.attr(),
    address : DS.attr(),
    emai: DS.attr(),
    languages: DS.attr()
});
