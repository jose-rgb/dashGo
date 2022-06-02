import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

//fetch de users
export async function getUsers(): Promise<User[]> {
    const { data } = await api.get('users')

    //formatando
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric'})
        }
    });

    return users;
}

//hook com react query
export function useUsers()  {
    return(
        useQuery('users', getUsers, {staleTime: 1000 * 5} ) //5 seconds de cache
    )
} 