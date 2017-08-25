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

// http class for Explain component
export class ExplainHttp {
  constructor () {
    this._errorMessage = ''
  }

  getErrorMessage () {
    return this._errorMessage
  }

  addConcept (name, category, explanation) {
    let self = this
    conceptsRef.push({
      name: name,
      category: category,
      explanation: explanation
    }, function (error) {
      self._errorMessage = error !== null ? error.code : ''
    })
  }
}

// http class for Browse component
export class BrowseHttp {
  getTopConcepts () {
    return new Promise(function (resolve, reject) {
      conceptsRef.on('value', function (snapshot) {
        resolve(snapshot.val())
      }, function (error) {
        reject(error)
      })
    })
  }
}

// http class for Search component
export class SearchHttp {
  _elasticLunr (data, searchString) {
    // initialize index object
    let index = Elasticlunr(function () {
      this.addField('name')
      this.addField('explanation')
      this.setRef('key')
    })

    // indexing documents, use firebase auto-generated key as the document ref
    for (let key in data) {
      let doc = {
        'name': data[key].name,
        'explanation': data[key].explanation,
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
      searchResults.push(data[doc.ref])
    }

    return searchResults
  }

  getSearchResults (searchString) {
    let self = this
    return new Promise(function (resolve, reject) {
      conceptsRef.on('value', function (snapshot) {
        let searchResults = self._elasticLunr(snapshot.val(), searchString)
        resolve(searchResults)
      }, function (error) {
        reject(error)
      })
    })
  }
}
