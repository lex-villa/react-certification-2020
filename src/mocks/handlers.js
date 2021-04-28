import { rest } from 'msw';

export const handlers = [
  rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
    // const query = req.url.searchParams;
    // const part = query.get('part');
    // const key = query.get('key');
    // const q = query.get('q');
    // const maxResults = query.get('maxResults');

    return res(
      ctx.status(200),
      ctx.json({
        kind: 'youtube#searchListResponse',
        etag: 'LRviZfd_p3HDDD2uBk5Qv7zaEQU',
        nextPageToken: 'CBkQAA',
        regionCode: 'MX',
        pageInfo: {
          totalResults: 2323,
          resultsPerPage: 25,
        },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
            id: {
              kind: 'youtube#video',
              videoId: 'nmXMgqjQzls',
            },
            snippet: {
              publishedAt: '2019-09-30T23:54:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Video Tour | Welcome to Wizeline Guadalajara',
              description:
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-30T23:54:32Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
            id: {
              kind: 'youtube#video',
              videoId: 'HYyRZiwBWc8',
            },
            snippet: {
              publishedAt: '2019-04-18T18:48:04Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
              description:
                'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-04-18T18:48:04Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
            id: {
              kind: 'youtube#video',
              videoId: 'Po3VwR_NNGk',
            },
            snippet: {
              publishedAt: '2019-03-05T03:52:55Z',
              channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
              title: 'Wizeline hace sentir a empleados como en casa',
              description:
                'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'El Economista TV',
              liveBroadcastContent: 'none',
              publishTime: '2019-03-05T03:52:55Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '9-Ag8hUNYBLTjuli6eECa5GXV1Y',
            id: {
              kind: 'youtube#video',
              videoId: '7PtYNO6g7eI',
            },
            snippet: {
              publishedAt: '2019-04-12T20:00:45Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'We Are Wizeline',
              description:
                'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-04-12T20:00:45Z',
            },
          },
        ],
      })
    );
  }),

  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: 'youtube#videoListResponse',
        etag: 'VITRmOmEbhY3xhTn5k8DoH2tVPc',
        items: [
          {
            kind: 'youtube#video',
            etag: 'uqGgNLYOaoUNwCEe0r6kTu8K68Q',
            id: '3-BRfzrUk1E',
            snippet: {
              publishedAt: '2021-04-24T18:32:27Z',
              channelId: 'UCSM3FVwdCIJfU0OdjKZb94A',
              title: 'Reaccionando a mis Memes #2 (Edición Fedeverso)',
              description:
                'Reaccionando a mis memes #1 https://www.youtube.com/watch?v=W9WKNpWm51c&t \n\n\n\nDirectos de Lunes a Viernes 8:00 pm (MX) en mi pagina de Facebook: https://www.facebook.com/soyfedelobo\r\n\r\nCanal de series y películas: https://www.youtube.com/elfedewolf \r\n\r\nSegundo canal de videojuegos: https://www.youtube.com/c/Pixelteca \r\n\r\nCanal con Nadia: https://www.youtube.com/c/amorsindistancia \r\n\r\nContacto/Negocios/Conferencias: contacto@fedelobo.com.mx\r\n\r\nSígueme también en las redes sociales:\r\n\r\nTwitter: https://twitter.com/SoyFedelobo\r\nInstagram: https://www.instagram.com/soyfedelobo',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/3-BRfzrUk1E/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/3-BRfzrUk1E/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/3-BRfzrUk1E/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/3-BRfzrUk1E/sddefault.jpg',
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: 'https://i.ytimg.com/vi/3-BRfzrUk1E/maxresdefault.jpg',
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: 'El Fedelobo',
              tags: [
                'federico',
                'w2m',
                'gameplays',
                'juegos',
                'comedia',
                'fedelobo',
                'gameplay',
                'games',
                'videogames',
                'fedewolf',
                'la historia en 1 video',
                'historias fedelobo',
                'historias fedewolf',
                'la saga en 1 video',
                'tops',
                'top videojuegos',
              ],
              categoryId: '20',
              liveBroadcastContent: 'none',
              localized: {
                title: 'Reaccionando a mis Memes #2 (Edición Fedeverso)',
                description:
                  'Reaccionando a mis memes #1 https://www.youtube.com/watch?v=W9WKNpWm51c&t \n\n\n\nDirectos de Lunes a Viernes 8:00 pm (MX) en mi pagina de Facebook: https://www.facebook.com/soyfedelobo\r\n\r\nCanal de series y películas: https://www.youtube.com/elfedewolf \r\n\r\nSegundo canal de videojuegos: https://www.youtube.com/c/Pixelteca \r\n\r\nCanal con Nadia: https://www.youtube.com/c/amorsindistancia \r\n\r\nContacto/Negocios/Conferencias: contacto@fedelobo.com.mx\r\n\r\nSígueme también en las redes sociales:\r\n\r\nTwitter: https://twitter.com/SoyFedelobo\r\nInstagram: https://www.instagram.com/soyfedelobo',
              },
            },
          },
        ],
        pageInfo: {
          totalResults: 1,
          resultsPerPage: 1,
        },
      })
    );
  }),
];
