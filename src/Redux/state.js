import {rerenderEntireThree} from "../render";


const data = {
    comment: [
        {date: new Date(),  text: 'I hope you enjoy learning React!', name: 'Hello Kitty', avatarUrl: 'https://placekitten.com/g/64/64'},
        {date: new Date(),  text: 'I hope you enjoy learning React!', name: 'Hello Kitty', avatarUrl: 'https://placekitten.com/g/64/64'},
        {date: new Date(),  text: 'I hope you enjoy learning React!', name: 'Hello Kitty', avatarUrl: 'https://placekitten.com/g/64/64'},
        {date: new Date(),  text: 'I hope you enjoy learning React!', name: 'Hello Kitty', avatarUrl: 'https://placekitten.com/g/64/64'},
        {date: new Date(),  text: 'I hope you enjoy learning React!', name: 'Hello Kitty', avatarUrl: 'https://placekitten.com/g/64/64'},
    ],
    newPostText: '',
    forumsTeam: [
        {name: 'C85 Cooler', id: 1},
        {name: 'C85 Microwave oven', id: 2},
        {name: 'C85 Fridge', id: 3},
        {name: 'C85 Washing machine', id: 4},
        {name: 'C85 Systemnick', id: 5},
    ],
    newForumUser: '',
    dataFromBook: [
        {
            title: 'React learning',
            url: 'https://ru.reactjs.org/docs/state-and-lifecycle.html',
            author: 'Jordan Walke',
            comments: 5,
            id: 1
        },
    ],
    rules: [
        {rule: 'Be kind to everyone', id: 3},
        {rule: 'Be helpful', id: 4},
        {rule: 'Do not say about moms plz', id: 5},

    ]


}

export const addNewPost = () => {
    const newPost = {
        date: new Date(),
        text: data.newPostText,
        name: 'Hello Kitty2',
        avatarUrl: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif'
    }
    data.comment.push(newPost)
    data.newPostText = ''
    rerenderEntireThree(data)
}
export const onNewPostChange = (newText) => {
    data.newPostText = newText
    rerenderEntireThree(data)
}

export const addNewUser = () => {
    const newUser = {
        name: data.newForumUser,
        id: 88
    }
    data.forumsTeam.push(newUser)
    data.newForumUser = ''
    rerenderEntireThree(data)
}
export const onNewUserAdd = (newUser) => {
    data.newForumUser = newUser
    rerenderEntireThree(data)
}

window.data = data
export default data