import React from 'react'

const LoginBody = () => {
  return (
    <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSublit}>
                <SocialButtonsLogin />
                <SpaceLogin />
                <Input1Login />
                <Input2Login />
                <RememberLogin />
                <ButtonsLogin />
              </form>
            </div>
  )
}

export default LoginBody