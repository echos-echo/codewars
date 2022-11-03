// given a url, extracts the domain name in the url
// https://www.cnet.com -> cnet
// http://github.com -> github
function domainName(url){
    if (url.includes('http')) {
      // removes protocol indicator if there is any
      url = url.slice(url.indexOf('//') + 2);
    }
    if (url.includes('www')) {
      // removes www if there is any
      url = url.slice(url.indexOf('.') + 1);
    }
    // returns the start to the first seen '.' => this will be the domain name
    return url.slice(0, url.indexOf('.'));
}