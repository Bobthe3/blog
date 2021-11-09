module.exports = {
  // Basic site information (required)
  name: 'Devan Velji\'s Blog',
  domain: 'devanvelji.com',
  url: 'https://devanvelji.com',
  description: 'Devan Velji\'s personal blog about life, music, code and more.',
  fathomCode: '',//this nees to be blank or it doesnt work

  // SEO specific (optional)
  defaultSocialImage:
    'https://res.cloudinary.com/twankruiswijk/image/upload/v1624446915/twan-dev-social_zzbzzv.jpghttps://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'Facebook',
      url: '',
      icon: 'SiFacebook',
    },
    {
      name: 'Twitter',
      url: '',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: '',
      icon: 'SiInstagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/devan-velji-5b42801a4/',
      icon: 'SiLinkedin',
    },
    {
      name: 'Xbox Gamer Tag',
      url: 'https://account.xbox.com/en-us/Profile?Gamertag=dmoneysss',
      icon: 'SiXbox',
    },
    {
      name: 'Youtube',
      url: '',
      icon: 'SiYoutube',
    },
    {
      name: 'TikTok',
      url: '',
      icon: 'SiTiktok',
    },
    {
      name: 'Medium',
      url: '',
      icon: 'SiMedium',
    },
    {
      name: 'Twitch',
      url: '',
      icon: 'SiTwitch',
    },
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
  ],
};
