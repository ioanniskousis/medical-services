export default function getCookieValue(requestedCookieName) {
  const cookieName = `${requestedCookieName}=`;
  const allCookies = decodeURIComponent(document.cookie);
  const cookiesArray = allCookies.split(';');
  for (let i = 0; i < cookiesArray.length; i += 1) {
    let cookie = cookiesArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}
