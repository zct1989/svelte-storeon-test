import type { StoreonModule } from 'storeon'
import type { Store } from '.'

// State structure
export interface AppState {
    ready: boolean
    d: string
}

export interface AppEvents {
    'ready': undefined
}

const appModule: StoreonModule<AppState, AppEvents> = store => {
    store.on('@init', () => ({ ready: false }))
    store.on('ready', () => ({ ready: true }))
}

export const appStore: Store<AppState, AppEvents> = {
    key: 'd',
    module: appModule,
}
