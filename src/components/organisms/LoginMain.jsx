import React from 'react'

const LoginMain = () => {
  return (
    <div className="  container mx-auto pt-40 ">
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <ImgLogin />
            <LoginBody/>
          </div>
        </div>
      </section>
    </div>
  )
}
export default LoginMain