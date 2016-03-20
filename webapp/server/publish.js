Meteor.publish('anatomy', function() {
  return Anatomy.find();
});

// Meteor.publish('users', function() {
//   return Meteor.users.find();
// });
