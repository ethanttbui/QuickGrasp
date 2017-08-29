export default class Validator {
  constructor (fields) {
    this._fields = fields
    this._errorMessages = {}
    for (let field of fields) {
      this._errorMessages[field] = ''
    }
  }

  hasError () {
    let hasError = false
    for (let field of this._fields) {
      if (this._errorMessages[field] !== '') {
        hasError = true
      }
    }
    return hasError
  }

  getError (field) {
    return this._errorMessages[field]
  }

  clearError (field) {
    this._errorMessages[field] = ''
  }

  validate (rules, field, value) {
    for (let rule of rules) {
      switch (rule) {
        case 'required':
          if (!this._checkEmpty(value)) {
            this._errorMessages[field] = 'The ' + field + ' field is required.'
          }
          break

        default:
          console.log('No handler for this rule.')
      }
    }
  }

  // return true if the value is non-empty, false otherwise
  _checkEmpty (value) {
    if (value === undefined || value === null) {
      return false
    }

    if (Array.isArray(value)) {
      return value.length
    }

    return String(value).trim().length
  }
}
