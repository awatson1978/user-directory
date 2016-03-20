


Template.myLibraryPage.events({
  'click .anatomy-item': function (evt, tmpl) {
    console.log('this', this);
    Session.set("anchorImage", this.name);
    Session.set("modalImage", this.image);
    Session.set("selectedImageId", this._id);
    Session.set("selectedImage", this.profile.avatar);
  }
});
