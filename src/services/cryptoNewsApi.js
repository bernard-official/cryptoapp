import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const cryptoNewsHeaders= {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '332a54e695mshf5e55c038eee729p1ef734jsnf3bd3c90d90a',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl =   'https://bing-news-search1.p.rapidapi.com'

const createRequest = ( url ) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi= createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});



export const {
    useGetCryptoNewsQuery,
}= cryptoNewsApi;








