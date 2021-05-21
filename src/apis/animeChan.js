import _ from 'lodash';

export const requestQuotes = _.memoize(async title => {
    const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`)
    if(res.status !== 200) return [];

    const quotesArray = await res.json();
    return quotesArray;
});
