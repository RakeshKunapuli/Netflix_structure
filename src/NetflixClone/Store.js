// import { eStore } from "@reduxjs/toolkit";
import { createStore } from 'redux';
import {rootReducer} from './Reducer.js'

const store = createStore(rootReducer)

export default store;


// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
// &part=snippet,contentDetails,statistics,status
