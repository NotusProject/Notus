<script>
    import {Icon} from '@steeze-ui/svelte-icon'
    import {Bolt, Envelope, Key, User} from '@steeze-ui/heroicons'
    import Input from "$lib/components/common/Input.svelte";
</script>
<div class="flex h-[calc(100vh-40px)] pt-5  flex-col justify-center overflow-hidden  px-4 lg:px-8">
    <div class=" sm:mx-auto sm:w-full sm:max-w-[500px] ">
        <div
                class="backdrop-blur bg-gray-600/25 	  ring-1 ring-gray-500 ring-opacity-65 px-6 py-12 shadow rounded-[48px] rounded-tr-none rounded-bl-none sm:px-12">
            <div class="sm:mx-auto sm:w-full  sm:max-w-md">
                <img alt="Your Company"
                     class="mx-auto  size-12    w-auto"
                     src="/icon.png">
                <h2
                        class="mt-6 text-center text-xl font-medium  tracking-wide leading-normal text-white">
                    Create an account</h2>
            </div>
            <form action="#" class="space-y-6" method="POST">
                <Input
                        icon={true}
                        id="email"
                        label="Email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        type="email"
                >
                    <Icon class='fill-gray-400' size="20px" src={Envelope} theme='mini'/>
                </Input>
                <Input
                        icon={true}
                        id="username"
                        label="Display name"
                        name="username"
                        placeholder="Bombaclat3000"
                        required
                        type="text"
                >
                    <Icon class='fill-gray-400' size="20px" src={User} theme='mini'/>
                </Input>
                <Input
                        autocomplete="current-password"
                        icon={true}
                        id="password"
                        label="Password"
                        name="password"
                        placeholder="password123"
                        required
                        type="password"
                >
                    <Icon class='fill-gray-400' size="20px" src={Key} theme='mini'/>
                </Input>
                <Input
                        autocomplete="current-password"
                        icon={true}
                        id="Cpassword"
                        label="Confirm password"
                        name="Cpassword"
                        placeholder="password123"
                        required
                        type="password"
                >
                    <Icon class='fill-gray-400' size="20px" src={Key} theme='mini'/>
                </Input>
<!--                <div class="flex items-center justify-between">-->
<!--                    <div class="flex items-center">-->
<!--                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded ring-1 border-none ring-inset ring-gray-500 bg-gray-500/25 checked:bg-teal-500 hover:bg-gray-300/20 focus:outline-none focus:ring-gray-500 checked:focus:ring-0 checked:ring-0 focus-within:ring-1 focus:ring-offset-0 focus:border-none checked:hover:bg-teal-500 focus-within:checked:bg-teal-500">-->
<!--                        <label for="remember-me"-->
<!--                               class="ml-3 block text-sm leading-6 text-gray-300">Remember-->
<!--                            me</label>-->
<!--                    </div>-->
<!--                </div>-->

                <div>
                    <button class="flex  w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white border-t border-t-teal-300 btn-shadow  hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            type="submit">
                        Sign in
                    </button>
                </div>
            </form>
        </div>

        <p class="mt-10 text-center text-sm text-gray-400">
           Arleady have an account?
            <a class="font-semibold leading-6 text-teal-600 hover:text-teal-500"
               href="/login">Login</a>
        </p>
    </div>
</div>
<style>
    .btn-shadow{
        box-shadow: 0 1px 3px hsla(0, 16%, 90%, 0.2);
    }
</style>