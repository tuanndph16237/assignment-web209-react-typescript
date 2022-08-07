import instance from "./instance";
import { UserType } from '../type/user';

export const listUser = () => {
    const url = '/user'
    return instance.get(url);
}
export const listOneUser = (id: string) => {
    const url = `/user/${id}`
    return instance.get(url);
}
export const deleteUser = (id: string) => {
    const url = `/user/${id}`
    return instance.delete(url)
}
export const addUser = (use: UserType) => {
    const url = '/user'
    return instance.post(url, use);
}
export const updateUser = (use: UserType) => {
    const url = `/user/${use._id}`
    return instance.put(url, use);
}

export const signup = (user: {}) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: {}) => {
    const url = `/signin`;
    return instance.post(url, user);
}