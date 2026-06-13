export type Theme = "light" | "dark";

export const THEME_COOKIE_NAME = "theme";

export const THEME_INIT_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )theme=(dark|light)/);if(m){document.documentElement.setAttribute('data-theme',m[1]);}}catch(e){}})();`;
