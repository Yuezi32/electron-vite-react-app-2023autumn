import {globalRouters} from '@renderer/router'

export const goto = (path) => {
    globalRouters.navigate(path)
}