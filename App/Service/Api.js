import {create} from 'apisauce'


export const brew = create({
    baseURL: 'https://api.openbrewerydb.org/',
})

export const advise = create({
    baseURL: 'https://api.adviceslip.com/',
})

