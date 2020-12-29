import {rerenderEntireThree} from "../render";


const data = {
    comment: [
        {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        },
        {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        },
        {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        },
        {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        },
        {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64'
        },
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
    ],
    news: {
        someNews: [
            {new: 'Putin go hard', id: '13'},
            {new: 'Trump go hard', id: '14'},
            {new: 'Lukawenko go hard', id: '15'},
            {new: 'Ramzan go hard', id: '16'},
            {new: 'Macron go hard', id: '17'},
        ],
        goodNews: [
            {gnew: 'We are ont the way to create creative society', id: 44},
            {gnew: 'The new year is near!', id: 45},
            {gnew: 'I lear Reac very well', id: 46},
        ],
        gotNewNews: ''
    }


}
///////////////////////////////// Flux
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
//////////////////////////////////////

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

export const onAddNews = () => {
    const addNew = {
        gnew: data.news.gotNewNews,
        id: 47
    }
    data.news.goodNews.push(addNew)
    data.news.gotNewNews = ''
    rerenderEntireThree(data)

}
export const onNewsChange = (goToNew) => {
    data.news.gotNewNews = goToNew
    rerenderEntireThree(data)
}


export default data