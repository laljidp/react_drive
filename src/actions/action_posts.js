
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export function add_post(posts) {
    return {
        type : ADD_POST,
        payload : posts
    }
}

export function delete_posts(_id) {
    return {
        type : DELETE_POST,
        payload:_id
    }
}

export function update_posts(_id,post) {
    return {
        type : UPDATE_POST,
        payload : {id:_id,post :post}
    }
}

