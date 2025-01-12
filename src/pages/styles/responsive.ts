export const size = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px'
  }
  
  export const device = {
    mobile: `@media screen and (max-width: ${size.mobile})`,
    tablet: `@media screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `@media screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    desktop: `@media screen and (min-width: ${size.laptop})`
  }