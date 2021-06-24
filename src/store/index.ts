import { provideStoreon, useStoreon } from '@storeon/svelte'
import { createStoreon, StoreonModule } from 'storeon'

import { appStore, AppEvents, AppState } from './app.store'
import { userStore, UserState, UserEvents } from './user.store'

export type Store<S, E> = {
    key: keyof S,
    module: StoreonModule<S, E>
}

type Events = AppEvents & UserEvents
type State = AppState & UserState

const stores = [
    userStore, appStore
]

const store = createStoreon<State, Events>(stores.map(s => s.module))

provideStoreon(store)

export function useStore<S, E>(store: Store<S, E>) {
    return useStoreon<S, E>(store.key)
}
