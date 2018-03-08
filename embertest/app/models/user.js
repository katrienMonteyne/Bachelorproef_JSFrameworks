import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    age: DS.attr('string'),
    address : DS.attr('string'),
    sex: DS.attr('string'),
    email: DS.attr('string')
});
