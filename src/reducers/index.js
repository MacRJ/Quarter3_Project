import {combineReducers} from 'redux';
import emails from './emails';
import notes from './notes'

const rootReducer = combineReducers({
  emails,
  notes
})

export default rootReducer
