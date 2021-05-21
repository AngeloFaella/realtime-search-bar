import _ from 'lodash';

export const requestQuotes = _.memoize(async title => {
    const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`);
    const quotesArray = await res.json();
    return quotesArray;
});

export const requestQuotesNo = async title => {
    const res = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`);
    const quotesArray = await res.json();
    return quotesArray;
};