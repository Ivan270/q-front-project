import { defineStore } from 'pinia'
import UserService from '@/services/UserService'
import type UserInterface from '@/types/interfaces/User.interface'
import axios from 'axios'

const userService = new UserService()

const useAuth = defineStore('auth', {
    state: () => {
        return {
            token: '',
            baseUrl: 'https://q-back-test.vercel.app/auth/',
            user: {} as UserInterface
        }
    },
    actions: {
        async login(email: string, password: string) {
            const uri = this.baseUrl + 'login';
            const user = {
                email: email,
                password: password
            }

            try {
                const { data } = await axios.post(uri, user)
                this.token = data.access_token
                this.user = await userService.fetchUserByEmail(email)
                return true
            } catch (error) {
                return false
            }

        },
        logout() {
            this.user = {};
            this.token = ''
        },
        setUser(user:UserInterface){
            this.user = user;
        }
    }
})

export default useAuth;