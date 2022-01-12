/* 
* Cookies Config
 */

export const createCookie = (
  name: string,
  value: string,
  mins?: number
): void => {
  if (mins) {
    const date = new Date();
    date.setTime(date.getTime() + mins * 60000);
    const expires = date.toUTCString();

    document.cookie =
      process.env.REACT_APP_HOST === "localhost:3000"
        ? `${name}=${value};expires=${expires}`
        : `${name}=${value};expires=${expires};path=/;sameSite=lax;secure;domain=.${process.env.REACT_APP_HOST}`;
  } else {
    document.cookie =
    process.env.REACT_APP_HOST === "localhost:3000"
      ? `${name}=${value};path=/`
      : `${name}=${value};path=/;sameSite=lax;secure;domain=.${process.env.REACT_APP_HOST}`;
  }
};


export const readCookie = (name: string): null | string => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';')

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)) c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }

    return null
}

export const deleteCookie = (name: string): void => { createCookie(name, '', -1) }