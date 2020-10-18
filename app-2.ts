import * as ContadorAction from './contador/contador.actions'

import {contadorReducer} from './contador/contador.reducer'

console.log(contadorReducer(10,ContadorAction.incrementadorAction))

console.log(contadorReducer(10,ContadorAction.decrementadorAction))

console.log(contadorReducer(10,ContadorAction.multiplicarAction))

console.log(contadorReducer(10,ContadorAction.dividirAction))

console.log(contadorReducer(10,ContadorAction.resetAction))