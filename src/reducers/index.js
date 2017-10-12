import {combineReducers} from 'redux';
import emails from './emails';
import notes from './notes';
import replys from './replys'

const rootReducer = combineReducers({
  emails,
  notes,
  replys
})

export default rootReducer
