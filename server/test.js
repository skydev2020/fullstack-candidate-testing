var sites = { 
    links: [
        {href: 'https://www.example.com/v1/contact-us/ca'},
        {href: 'https://www.example.com/v1/contact-us/au'},
        {href: 'https://www.example.com/v1/contact-us/us'},
        {href: 'https://www.example.com/v1/dontcontact-us/us'}
    ]
};

const word = 'contact';

const regex = new RegExp('/' + word + '\\b', 'g');
const correctRegex = new RegExp('/' + word + '\\b');

const matchedSitesFailed = sites.links.filter(({href}) => regex.test(href));
const matchedSitesSuccess = sites.links.filter(({href}) => new RegExp('/contact\\b', 'g').test(href));
const matchedSitesSuccess2 = sites.links.filter(({href}) => correctRegex.test(href));

console.log('failed returns:', matchedSitesFailed.length);
console.log('success returns:', matchedSitesSuccess);
console.log('success returns 2:', matchedSitesSuccess2);