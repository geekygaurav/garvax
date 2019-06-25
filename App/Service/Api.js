import {create} from 'apisauce'


export const brew = create({
    baseURL: 'https://api.punkapi.com/v2/',
})

export const advise = create({
    baseURL: 'https://api.adviceslip.com/',
})

export const githubuser = create({
    baseURL: 'https://api.github.com/',
})

