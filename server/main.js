import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  import '../both/methods/item_methods'
  import '../both/methods/customer_methods'
  import '../both/methods/invoice_methods'
  import '../both/methodsReport/invoiceReport'
});
