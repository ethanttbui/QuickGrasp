/******************
this mixin acts as an interface between Vue and Firebase
it encapsulates everything related to Firebase and Vuefire

SUMMARY:
1. addConcept
(+) add a new concept to the database: addConcept(name, category, explanation)

2. getConcepts
(+) get top concepts: topConcepts

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

// mixin for adding concepts
export const addConcept = {
  firebase: {
    concepts: db.ref('concepts')
  },

  methods: {
    addConcept (name, category, explanation) {
      this.$firebaseRefs.concepts.push({
        name: name,
        category: category,
        explanation: explanation
      })
    }
  }
}

// mixin for getting concepts
export const getConcepts = {
  firebase: {
    concepts: db.ref('concepts')
  },

  computed: {
    topConcepts () {
      return this.concepts
    }
  }
}
