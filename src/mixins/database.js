/******************

this mixin acts as an interface between Vue and Firebase
it encapsulates everything related to Firebase, Vuefire and also Elasticlunr

SUMMARY:
1. Explain
(+) add a new concept to the database: addConcept(name, category, explanation)
(+) retrieve the error message from server: serverErrorMessage

2. Browse
(+) retrieve top concepts: topConcepts

3. SearchResult
(+) first, set the search string when the component is created: setSearchString(searchString)
(+) then retrieve the search results: searchResults

*******************/

// configure Firebase
import Firebase from 'firebase'
import Elasticlunr from 'elasticlunr'

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
const conceptsRef = db.ref('concepts')

// mixin for Explain component
export const explain = {
  data () {
    return {
      serverErrorMessage: ''
    }
  },

  methods: {
    addConcept (name, category, explanation) {
      let self = this
      conceptsRef.push({
        name: name,
        category: category,
        explanation: explanation
      }, function (error) {
        self.serverErrorMessage = error !== null ? error.code : ''
      })
    }
  }
}

// mixin for Browse component
export const browse = {
  firebase: {
    topConcepts: conceptsRef
  }
}

// mixin for SearchResult component
export const search = {
  data () {
    return {
      searchString: '',
      searchResults: []
    }
  },

  firebase: {
    concepts: {
      source: conceptsRef,
      asObject: true,
      readyCallback: function () {
        this.searchConcept(this.searchString)
      }
    }
  },

  methods: {
    setSearchString (searchString) {
      this.searchString = searchString
    },

    searchConcept (searchString) {
      // initialize index object
      let index = Elasticlunr(function () {
        this.addField('name')
        this.addField('explanation')
        this.setRef('key')
      })

      // indexing documents, use firebase auto-generated key as the document ref
      for (let key in this.concepts) {
        let doc = {
          'name': this.concepts[key].name,
          'explanation': this.concepts[key].explanation,
          'key': key
        }
        index.addDoc(doc)
      }

      // search for the documents that match
      // prefer searching by name over searching by explanation
      let matchingDocs = index.search(searchString, {
        fields: {
          name: {boost: 2},
          explanation: {boost: 1}
        }
      })

      // retrieve the final search results using the matching documents' refs
      let searchResults = []
      for (let doc of matchingDocs) {
        searchResults.push(this.concepts[doc.ref])
      }

      this.searchResults = searchResults
    }
  }
}
