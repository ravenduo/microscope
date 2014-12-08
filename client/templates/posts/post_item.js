Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.usreId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
