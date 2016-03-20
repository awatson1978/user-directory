Template.imageAssetsGrid.helpers({
  image_assets: function(){
    return Meteor.users.find({
      'profile.name': { $regex: Session.get('imageNameFilter'), $options: 'i'}
    },{limit: 30});
  },
  anatomy_image: function(){
    return this.profile.avatar;
  }
});
