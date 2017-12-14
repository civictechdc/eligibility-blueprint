import { combineReducers } from 'redux';

import ui from './uiReducer';
import data from './dataReducer'

export default combineReducers({
    ui,
    data
});

