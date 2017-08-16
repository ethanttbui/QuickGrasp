/******************

this mixin acts as an interface between Vue and Firebase
it encapsulates everything related to Firebase and Vuefire

SUMMARY:
1. Explain
(+) add a new concept to the database: addConcept(name, category, explanation)

2. Browse
(+) get top concepts: topConcepts

3. Search Result
(+) trigger searching for a concept by keyword: searchConcepts(keyword)
(+) access search results: searchResults

*******************/

// configure Firebase
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDL6XQ0eTNIpRHNhFupKGIGNF0Q6GYoN-8',
  authDomain: 'quickgrasp-f79b8.firebaseapp.com',
  databaseURL: 'https://quickgrasp-f79b8.firebaseio.com',
  projectId: 'quickgrasp-f79b8',
  storageBucket: 'quickgrasp-f79b8.appspot.com',
  messagingSenderId: '981275673453'
}

const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()
const concepts = db.ref('concepts')

// mixin for Explain component
export const explain = {

  methods: {
    addConcept (name, category, explanation) {
      concepts.push({
        keyword: name.toLowerCase(),
        name: name,
        category: category,
        explanation: explanation
      })
    }
  }
}

// mixin for Browse component
export const browse = {
  firebase: {
    topConcepts: db.ref('concepts')
  }
}

// mixin for SearchResult component
export const search = {
  methods: {
    searchConcept (keyword) {
      this.$bindAsArray(
        'searchResults',
        concepts.orderByChild('keyword')
          .startAt(keyword)
          .endAt(keyword + 'uf8ff')
      )
      return this.searchResults
    }
  }
}
