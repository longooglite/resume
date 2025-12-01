/**
 * technologySynonyms
 * - Returns a list of synonyms for a given technology
 * @param technology - The technology to get synonyms for
 * @returns A list of synonyms
 */
export const technologySynonyms = (technology: string) => {
  switch (technology.toLowerCase()) {
    case 'javascript':
      return ['JS', 'JavaScript', 'ECMAScript']
    case 'typescript':
      return ['TS', 'TypeScript', 'JavaScript', 'html', 'css']
    case 'react':
      return ['React', 'React.js', 'ReactJS']
    case 'vue':
      return ['Vue', 'Vue.js', 'VueJS', 'Pinia', 'Vuex']
    case 'angular':
      return ['Angular', 'Angular.js', 'AngularJS']
    case 'jquery':
      return ['jQuery', 'jQuery.js', 'jQueryJS']
    case 'd3':
      return ['D3', 'D3.js', 'D3JS']
    case 'html':
      return ['HTML', 'HTML5']
    case 'css':
      return ['CSS', 'CSS3', 'Sass', 'LESS']
    case 'sass':
      return ['Sass', 'SassCSS', 'SassCSS3']
    case 'less':
      return ['LESS', 'LESSCSS', 'LESSCSS3']
    case 'next.js':
      return ['Next.js', 'NextJS']
  }
}
