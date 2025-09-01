import { SignUp } from "@clerk/nextjs"



const SignUpPage = () => {
  return (
    <main className=" flex h-screen-full items-center justify-center ">
            {/*agr use sign in nhi hai to sign button show krege*/}
            <SignUp/>
          
        </main>
  )
}

export default SignUpPage
