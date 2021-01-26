let app = new Vue({
  el:'#app',
  data:{
    // HEADER DATA
    /////////////////
    header:{
      logo:'dist/img/logo.svg',
      links:[
        'solutions',
        'pricing',
        'blog',
        'signe in',
        'signe up',
      ],
    },
    // JUMBOTRON DATA
    /////////////////

    jumbotron:{
      title:'Understand, recognize and develop your people',
      text:'Teambit helps teams create a high performing culture with regular feedback.',
      links:[
        'sign up with google',
        'sign up with slack',
        'or use your email address',
      ],
    },
    // FIRST SECTION DATA
    /////////////////

    firstSection:{
      title:'Traditional people processes lead to diseingagement and turnover.',
      card:[
        {
          img:'',
          text:'They are hardcore, formal and disconnected'
        },
        {
          img:'',
          text:'They don\'t encourage regular feedbacks'
        },
        {
          img:'',
          text:'They dont\'t make it safe speak up',
        },
      ],
      img:'',
    },
    // SECOND SECTION DATA
    /////////////////

    secondSection:{
      title:'It doesn\'t to be like that. Teambit is a modern solution that teammates love.',
      card:[
        {
          img:'',
          text:'it is lightweight fun and interconnected'
        },
        {
          img:'',
          text:'It encourage regular feedbacks with contextual requests'
        },
        {
          img:'',
          text:'It care safe envirnoment for dialog',
        },
      ],
      img:'',
      text:'Here is how it works',
    },
  },
});
