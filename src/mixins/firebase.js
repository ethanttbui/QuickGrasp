// this mixin acts as an interface between Vue and Firebase
// it encapsulates everything related to Firebase and Vuefire

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

export const concepts = {
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
