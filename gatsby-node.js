const availableLocales = [{locale: 'en', lang: 'en', name: 'English'}, {locale: 'es', lang:'es', name: 'Español'}]

exports.sourceNodes = ({actions: {createNode}, createNodeId, createContentDigest}) => {
  // Add availabe locales to the data layer so we can use them in the File System
  return availableLocales.map(localeInfo => createNode({
    ...localeInfo,
    id: createNodeId(localeInfo.locale),
    internal: {
      type: `AvailableLocale`,
      contentDigest: createContentDigest(localeInfo.locale)
    }
  }))
}
