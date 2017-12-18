import { combineReducers } from 'redux';
import {friendsListReducer} from './reducer_friends';
import { PostsReducers } from '../reducers/reducer_posts';

const friends = combineReducers({
    friendsListReducer,
    PostsReducers

});

export default  friends;
