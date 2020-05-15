import {combineReducers} from 'redux';
import getApiData from './getApiData';
import opacityResult from './opacityResult';

const reducer = combineReducers({
    data : getApiData,
    showResult : opacityResult
})

export default reducer;