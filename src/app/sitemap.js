export default function sitemap() {
  return [
    { url: 'https://stellausoh.xyz', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://stellausoh.xyz/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://stellausoh.xyz/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://stellausoh.xyz/notes', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
