import Ember from 'ember';

export default Ember.Controller.extend({

  message:'',
  email: '',
  responseMessage:'',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/), // Checks that a valid email address is entered
  isMessageEnoughLong: Ember.computed.gte('message.length', 5), // Checks that the message in input box is long enough

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'), // Makes the button valid if emailaddress is valid and input > 5

  actions: {

      sendMessage() {

        var email   = this.get('emailAddress');
        var message = this.get('message');

        const newContact = this.store.createRecord('contact', { // Creates a new contact record, storing email and the message
          email: email,
          message: message,
        });
        newContact.save().then((response) => { // saves new contact to database and then sends a response message.
          var responseMessage = 'To :' + email + ' , Message: ' + message;
          this.set('responseMessage', responseMessage);
          this.set('emailAddress', '');
          this.set('message', '');
        });

      }
    }

});
