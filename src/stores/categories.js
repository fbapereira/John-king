import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import gql from 'graphql-tag'

const httpLink = createHttpLink({
  uri: 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clyzk022b035908v2hwebvvnm/master'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const query = gql`
  query Categories {
    categories {
      slug
      name
      artItem {
        title
        slug
        description
        fullPage {
          html
        }
        image {
          url
        }
      }
    }
  }
`

export const useCategoryStore = defineStore('category', () => {
  const categoriesData = ref([])
  const categories = computed(() => categoriesData)

  const itemsByCategory = computed(() => {
    return (category) => {
      return categoriesData.value.find((c) => c.slug === category)?.artItem || []
    }
  })

  apolloClient
    .query({
      query
    })
    .then(({ data }) => {
      categoriesData.value = data.categories
    })

  return { categories, itemsByCategory }
})
