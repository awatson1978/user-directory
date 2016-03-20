Router.configure({
  // we use the  appLayout template to define the layout for the entire app
  layoutTemplate: 'appLayout',

  // the pageNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'pageNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'appLoading',

  yieldTemplates: {

    // 'defaultNavbarFooter': {
    //   to: 'footer'
    // },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    },
    'userSearchInput': {
      to: 'globalInput'
    },
    'navbarHeader': {
      to: 'header'
    },
    // 'navbarFooter': {
    //   to: 'footer'
    // }
  }
});



Router.map(function() {



  this.route('/', {
    path: '/',
    name: 'home',
    action: function() {
      if (Lists.find({userId: Meteor.userId()}).count() > 0) {
        Router.go('checklistPage', Lists.findOne({userId: Meteor.userId()}));
      } else {
        Router.go('checklistPage', Lists.findOne({_id: Lists.createNew()}));
      }
    },
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      // 'navbarFooter': {
      //   to: 'footer'
      // },
      'sidebar': {
        to: 'westPanel'
      },
      'userSearchInput': {
        to: 'globalInput'
      },
      'reactiveOverlaysTemplate': {
        to: 'overlays'
      },
      'keybindingsModal': {
        to: 'keybindingsModal'
      }
    }
  });
});

if (Meteor.isClient) {
  Router.onBeforeAction('loading', {except: ['entrySignUp', 'entrySignIn']});
  Router.onBeforeAction('dataNotFound', {except: ['entrySignUp', 'entrySignIn']});
}
