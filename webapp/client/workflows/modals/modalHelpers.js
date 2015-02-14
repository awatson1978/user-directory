Template.registerHelper("getPreviewImage", function(argument){
  if(Session.get("selectedImage")){
    return Session.get("selectedImage");
  }else{
    return "images/placeholder-640x480.png";
  }
});
