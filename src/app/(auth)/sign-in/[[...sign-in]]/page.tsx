import { SignIn } from "@clerk/nextjs"


const SignInPage = () => {
  return (
    <main className=" flex h-screen w-full  justify-center items-center ">
        {/*agr use sign in nhi hai to sign button show krege*/}
        <SignIn/>
      
    </main>
  )
}

export default SignInPage
