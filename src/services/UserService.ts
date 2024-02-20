import { ref, type Ref } from 'vue'
import axios from 'axios'
import type UserInterface from '@/types/interfaces/User.interface';

class UserService {
    private users: Ref<Array<UserInterface>>
    private user: Ref<UserInterface>
    private url: string

    constructor() {
        this.users = ref<Array<UserInterface>>([])
        this.user = ref<UserInterface>({})
        this.url = 'https://q-back-test.vercel.app/user'
    }

    getUsers(): Ref<Array<UserInterface>> {
        return this.users
    }
    getUser(): Ref<UserInterface> {
        return this.user
    }

    async fetchAll(): Promise<void> {
        try {
            const { data } = await axios.get(this.url)
            this.users.value = data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchUserById(id: string | Array<string>): Promise<UserInterface> {
        try {
            const { data } = await axios.get(`${this.url}/${id}`)
            this.user.value = data
        } catch (error) {
            console.log('Error al buscar al usuario por id', error)
        }
        return this.user.value
    }

    async fetchUserByEmail(email: string): Promise<UserInterface> {
        try {
            const { data } = await axios.get(`${this.url}/find/${email}`);
            this.user.value = data;
        } catch (error) {
            console.log('Error al buscar usuario por email', error);
            throw error;
        }
        return this.getUser().value;
    }

    async createVCard(email: string): Promise<UserInterface> {
        try {
            const { data } = await axios.get(`${this.url}/vcf/${email}`);
            return data
        } catch (error) {
            console.log('Error al crear VCard', error);
            throw error;
        }
    }

    // async createUser(
    //     name: string,
    //     lastname: string,
    //     roles: Array<string>,
    //     email: string,
    //     phone: number,
    //     birth: string,
    //     company: string,
    //     jobTitle: string,
    //     address: string,
    //     jobDescription: string,
    //     personalImage: string,
    //     companyLogo: string
    // ): Promise<UserInterface> {

    //     try {
    //         const newUser: UserInterface = {
    //             name,
    //             lastname,
    //             roles,
    //             email,

    //             phone,
    //             birth,
    //             company,
    //             jobTitle,
    //             address,
    //             jobDescription,
    //             personalImage,
    //             companyLogo,
    //         };
    //         const { data } = await axios.post<UserInterface>(this.url, newUser);
    //         return data;

    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    // }
    async createUser(formData:any){
        try {
            console.log(formData)
            const {data} = await axios.post(this.url, formData)
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteUser(id: string):Promise<Boolean> {
        let result = false;
        try {
            const { data } = await axios.delete(`${this.url}/${id}`)
            console.log(data)
            result = true
        } catch (error) {
            console.log(error)
            result = false
        }
        return result
    }
    async updateUser(id: string, { name, lastname, roles, password, email, birth, phone, company, jobTitle, jobDescription, address, personalImage, logoImage }: UserInterface) {
        let result = false
        try {
            const { data } = await axios.put(`${this.url}/${id}`, {
                name, lastname, roles, password, email, birth, phone, company, jobTitle, jobDescription, address, personalImage, logoImage
            })
            result = true
        } catch (error) {
            console.log(error)
            result = false;
        }
        return result
    }
}

export default UserService
