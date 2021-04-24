import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDN0P1UB4W39-XdmmA9wniCAlXA0f3WprU&q=wizeline&maxResults=10',
    (req, res, ctx) => {
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
    }
  ),
];
