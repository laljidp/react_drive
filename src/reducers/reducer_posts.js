import { ADD_POST,DELETE_POST,UPDATE_POST } from '../actions/action_posts';
import InitialState from './InitialState'

export const PostsReducers = (state = InitialState.PostsReducers , action ) => {

    switch (action.type){
        case ADD_POST :
            Object.assign({},state,{Posts :[...state.PostsReducers,{
                id:1,
                title : 'SimplePosts',
                description : 'This is my simple posts'
            }]});
            break;
        case DELETE_POST:

            break;
        case UPDATE_POST:

            break;
        default :
            return state;
    }

}