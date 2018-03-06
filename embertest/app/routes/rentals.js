import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('rental'); // dit is een verwijzing naar het model
      }
});
