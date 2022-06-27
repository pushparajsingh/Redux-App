import { legacy_createStore } from "redux";
import root from '../reducers/index';

const store = legacy_createStore( root );

export  default store;


