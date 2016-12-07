const view = {
  path : '/credits',
  name : 'credits',
  component : 'Credits',
  content : {
    categories : [
      {
        title: 'Production',
        items: [
          {
            name: 'Example Album',
            embed: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/202719143&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
          },
          {
            name: 'Example Album',
            embed: '<iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A7GptbanebPZYkLPvjNfd6m" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>',
          },
          {
            name: 'Example Album',
            embed: '<iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256246110&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
          },
        ],
      },
      {
        title: 'Studio Work',
        items: [
          {
            name: 'Example single',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/vHcru0gPxZ4?autoplay=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>',
          },
          {
            name: 'Example single',
            embed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XOyc3gyL5GA?autoplay=0&controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>',
          }
        ],
      },
      {
        title: 'Performed/Toured With',
        items: [
          {
            name: 'Artist (2015)',
            link: '//google.com',
          },
          {
            name: 'Artist (2013 - present)',
            link: '//google.com',
          },
          {
            name: 'Artist (2012 - 2014)',
            link: '//google.com',
          },
          {
            name: 'Artist (2015 - present)',
            link: '//google.com',
          },
          {
            name: 'Artist (1984)',
            link: '//google.com',
          },
        ],
      },
    ],
  },
}

export default view;
