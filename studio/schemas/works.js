export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'albumName',
        title: 'Album Nae',
        type: 'string',
      },
      {
        name: 'albumLink',
        title: 'Album Link',
        type: 'string',
      },
      {
        name: 'albumYear',
        title: 'Album Year',
        type: 'string',
      },
      {
        name: 'AlbumCover',
        title: 'Album Cover',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],

  }