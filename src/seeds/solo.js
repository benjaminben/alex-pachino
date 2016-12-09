const view = {
  path : '/solo',
  name : 'solo',
  component : 'Solo',
  content : {
    embeds : [
      {
        type : 'soundcloud',
        url  : '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268310958&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
      },
      {
        type : 'soundcloud',
        url  : '<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/69906987&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
      },
      {
        type : 'youtube',
        url  : '<iframe width="560" height="315" src="https://www.youtube.com/embed/KI09yBVfHvg" frameborder="0" allowfullscreen></iframe>',
      },
    ],
  },
}

export default view;
