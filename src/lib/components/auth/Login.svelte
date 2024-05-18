<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[500px]">
        <div
                class="backdrop-blur bg-gray-600/25	  ring-1 ring-gray-600 ring-opacity-65 px-6 py-12 shadow rounded-[48px] rounded-tr-none rounded-bl-none sm:px-12">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img class="mx-auto  size-16  w-auto"
                     src="/logo.png"
                     alt="Your Company">
                <h2
                        class="mt-6 text-center text-xl font-medium  tracking-wide leading-normal text-white">
                    Welcome Back!</h2>
            </div>
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email"
                           class="block text-sm font-medium leading-6 text-white">Email</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path
                                        d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                <path
                                        d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                            </svg>
                        </div>
                        <input type="email" name="email" id="email"
                               class="block w-full rounded-md bg-transparent border-0 py-1.5 pl-10 text-white ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 hover:bg-gray-300/5 sm:text-sm sm:leading-6"
                               placeholder="you@example.com">
                    </div>
                </div>
                <div>
                    <label for="password"
                           class="block text-sm font-medium leading-6 text-white">Password</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                                <path fill-rule="evenodd" d="M8 7a5 5 0 1 1 3.61 4.804l-1.903 1.903A1 1 0 0 1 9 14H8v1a1 1 0 0 1-1 1H6v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707L8.196 8.39A5.002 5.002 0 0 1 8 7Zm5-3a.75.75 0 0 0 0 1.5A1.5 1.5 0 0 1 14.5 7 .75.75 0 0 0 16 7a3 3 0 0 0-3-3Z" clip-rule="evenodd" />
                            </svg>

                        </div>
                        <input id="password" name="password" type="password"
                               autocomplete="current-password" required
                               class="block w-full rounded-md bg-transparent border-0 py-1.5 pl-10 text-white ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 sm:text-sm sm:leading-6 hover:bg-gray-300/5"
                               placeholder="password123">
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded ring-1 border-none ring-inset ring-gray-500 bg-gray-500/25 checked:bg-teal-500 hover:bg-gray-300/20 focus:outline-none focus:ring-gray-500 checked:focus:ring-0 checked:ring-0 focus-within:ring-1 focus:ring-offset-0 focus:border-none checked:hover:bg-teal-500 focus-within:checked:bg-teal-500">
                        <label for="remember-me"
                               class="ml-3 block text-sm leading-6 text-gray-300">Remember
                            me</label>
                    </div>

                    <div class="text-sm leading-6">
                        <a href="#" class="font-semibold text-teal-600 hover:text-teal-500">Forgot
                            password?</a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            class="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                        Sign in
                    </button>
                </div>
            </form>
        </div>

        <p class="mt-10 text-center text-sm text-gray-400">
            Don't have an account?
            <a href="#"
               class="font-semibold leading-6 text-teal-600 hover:text-teal-500">Register</a>
        </p>
    </div>
</div>
