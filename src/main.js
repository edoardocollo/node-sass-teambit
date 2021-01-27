let app = new Vue({
  el:'#app',
  data:{
    googleLogo: 'dist/img/google-logo.svg',
    slackLogo:'dist/img/slack-logo.svg',
    // HEADER DATA
    /////////////////
    header:{
      logo:'dist/img/logo.svg',
      links:[
        'solutions',
        'pricing',
        'blog',
        'signe in',
      ],
      googleLink: 'Sign up',
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
      img:'dist/img/illustration-main.jpg',
    },
    // FIRST SECTION DATA
    /////////////////
    orangeSection:[

      {
        title:'Traditional people processes lead to diseingagement and turnover.',
        cards:[
          {
            img:'dist/img/hardcore.png',
            text:'They are hardcore, formal and disconnected'
          },
          {
            img:'dist/img/nofeedback.png',
            text:'They don\'t encourage regular feedbacks'
          },
          {
            img:'dist/img/notsafe.png',
            text:'They dont\'t make it safe speak up',
          },
        ],
        img:'dist/img/before.png',
      },
      {
        title:'It doesn\'t to be like that. Teambit is a modern solution that teammates love.',
        cards:[
          {
            img:'dist/img/lightweight.png',
            text:'it is lightweight fun and interconnected'
          },
          {
            img:'dist/img/feedbacksuggestions.png',
            text:'It encourage regular feedbacks with contextual requests'
          },
          {
            img:'dist/img/safe.png',
            text:'It care safe envirnoment for dialog',
          }
        ],
        img:'dist/img/after.png',
        text:'Here is how it works',
      },
    ],
    whiteSection:[
      {
        title:'Feedback to help teammates improve',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
        linkText:'Learn more',
        img:['dist/img/communication.jpg','dist/img/employee-feedback.jpg'],
      },
      {
        title:'Surveys to help the team be better',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
        linkText:'Learn more',
        img:['dist/img/insights.jpg','dist/img/employee-survey.jpg'],
      },
      {
        title:'Reviews to help teammates get a fair envaluation',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
        linkText:'Learn more',
        img:['dist/img/review.jpg','dist/img/performance-review.jpg'],
      },
      {
        title:'Prise to help teammates feel valued',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam praesentium temporibus hic corporis totam nesciunt a, veniam quas, distinctio saepe nobis odit quis laboriosam provident voluptate reprehenderit illum consectetur?',
        linkText:'Learn more',
        img:['dist/img/recognition.jpg','dist/img/employee-recognition.jpg'],
      },

    ],
    feedbackSection:{
      title:'See Teambit for yourself. Get started in seconds',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img:'',
      links:[
        'sign up with google',
        'sign up with slack',
        'or use your email address',
      ],
    },
    footer:{
      left:{
        logo:'',
        linkText:'Teambit',
        text:'helps team create high performing cultures by making feedback a daily habit.',
      },
      right:[
        {
          title:'product',
          links:['lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem',],
        },
        {
          title:'about',
          links:['lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem',],
        },
        {
          title:'connect',
          links:['lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem',],
        },
        {
          title:'lobs',
          links:['lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem',],
        },
        {
          title:'from the blog',
          links:['lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem','lorem',],
        },
      ],
    },
  },
});
