const InitialState = {
    friendsListReducer:{
        friends_list :[{
            firstname: 'yuval',
            lastname : 'prajapati',
            email : 'yuval@gmail.com',
            city : 'London',
            address : 'sarthee avanue',
            hobby : ['movies' , 'reading' , 'nothing  else'],
            gender : 'male',
            mobileno: '8460300207'
        }],
        edit_friend : '',
        unfriend_list :[]
    },
    PostsReducers :{
        Posts : [],
        VISIBILITY : 'show'
    }
}
export default InitialState;