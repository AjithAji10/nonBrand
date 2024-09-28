export const API_URL = "https://api.kraftshala.com";
export const REFERER_BRAND_ID = 65117;
export const REFERER_API_KEY = "67559B690362FA558A2269747C263ED6";
export const REFERER_CAMPAIGN_ID = 32391;

/**
 * This was a horrible way to initialize a config. Commenting it out.
 */
let convexApiUrl = null;
//   typeof window !== "undefined"
//     ? window.location.hostname == "www.kraftshala.com"
//       ? "https://service.kraftshala.com"
//       : "https://testservice.kraftshala.com"
//     : "";

/**
 * This is still not a good way to initialize a config. I'm just a
 * poor boy setting up the staging server. So I'll come back to this later.
 */
if(typeof window!== "undefined") {
  if(window.location.hostname == "www.kraftshala.com") {
    convexApiUrl = "https://service.kraftshala.com";
  } else if (window.location.hostname.includes("testprogram.kraftshala.com")) {
    convexApiUrl = "https://testservice.kraftshala.com";
  } else if (window.location.hostname.includes("stagingprogram.kraftshala.com")) {
    convexApiUrl = "https://stagingservice.kraftshala.com";
  } else if (window.location.hostname.includes("courses.kraftshala.com")) {
    convexApiUrl = "https://service.kraftshala.com";
  } else {
     convexApiUrl = "https://testservice.kraftshala.com";
    // convexApiUrl = "http://localhost:3100";
  }
}

export const CONVEX_API_URL = convexApiUrl;

export const EMAIL_REGEX = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
