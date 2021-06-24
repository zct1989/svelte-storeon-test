import { useStoreon } from '@storeon/svelte'
import type { StoreonModule } from 'storeon'
// import { useStoreon } from '@storeon/svelte';

// State structure
export interface UserState {
    user: number
}

export interface UserEvents {
    'inc': undefined
    'set': number
}

const userModule: StoreonModule<UserState, UserEvents> = store => {
    store.on('@init', () => ({ user: 0 }))
    store.on('inc', state => ({ user: state.user + 1 }))
    store.on('set', (state, value) => ({ user: value }))
}

export const userStore = {
    key: 'user',
    module: userModule,
}
