import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import AuthService from "./services/auth.service";

const providers: Provider[] = [
    Credentials({
        credentials:{
            email:{label:"Email", type:"email"},
            password:{label:"Password", type:"password"}
        },
        authorize: async (credentials) => {
            console.log(credentials);
            if(!credentials?.email || !credentials?.password){
                
                throw new Error("Invalid credentials")
            }
            else{
                try{
                    const res = await AuthService.logIn(String(credentials?.email), String(credentials?.password))
                    if(!res.user) throw new Error("User not found")
                    console.log(res.user); 
                    return res.user
                }
                catch(err){
                    if(err instanceof Error) console.error(err.message);
                    throw new Error("Invalid credentials")
                }
            }              
            

            /*
            if(credentials?.email !== "YmZ8i@example.com"){
                throw new Error("Invalid credentials")
            }
            return {
                id: "1",
                name: "John Doe",
                email: "YmZ8i@example.com",
            }    
            */ 
        }
    })
]

export const providerMap = providers.map((provider)=>{
    if(typeof provider === 'function'){
        const providerData = provider();
        return { id: providerData.id, name: providerData.name }
    }
    return{ id: provider.id, name: provider.name }
});

export const { handlers, signIn, signOut, auth} = NextAuth({
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        authorized({auth: session, request:{nextUrl}}) {
            const isLoggedIn = !!session?.user;
            const isPublicPage = nextUrl.pathname.startsWith('/public');

            if(isPublicPage || isLoggedIn) {
                return true
            }
            return false
        }
    }
})