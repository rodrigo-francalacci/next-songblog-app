export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'newAlbumLink',
        title: 'New Album Link',
        type: 'string',
      },
      {
        name: 'newAlbumCover',
        title: 'New Album Cover',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'newAlbumDescription',
        title: 'New Album Description',
        type: 'blockContent',
      },
      {
        name: 'blogDescription',
        title: 'Blog Description',
        type: 'string',
      },
    ],

  }