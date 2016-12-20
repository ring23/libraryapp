import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),

  isValid: Ember.computed.notEmpty('name') //Checking that name of library isn't blank.
});
