import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
//Classname
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}