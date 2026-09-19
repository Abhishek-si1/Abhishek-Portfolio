/** True for a real link. Treats "", null and the "#" placeholder as "no link". */
export const hasUrl = (url) => Boolean(url) && url !== "#";
