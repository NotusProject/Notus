<script>

import Input from "$lib/components/common/Input.svelte";
import {Key, MagnifyingGlass} from "@steeze-ui/heroicons";
import {Icon} from "@steeze-ui/svelte-icon";
import AddFriendSection from "./friends/components/AddFriendSection.svelte";
let newFriends= $state(true)
</script>

<div class="flex flex-col h-full">
<div class="border-b border-gray-500 pb-5 sm:pb-0">
    <div class="flex justify-between items-center ">
        <h3 class="text-base font-semibold leading-6 dark:text-white">Friends</h3>
        <button class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" onclick={()=>{newFriends = true}} type="button">

            <svg class="-ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
            </svg>

            Add Friend
        </button>
    </div>

    <div class="mt-3 sm:mt-4">

        <!-- Tabs at small breakpoint and up -->
        <div class="hidden sm:block">
            <nav class="-mb-px flex space-x-8">
                <button  class="border-transparent text-gray-400 hover:border-teal-600 hover:text-teal-600 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium">All</button>
                <button  class="border-transparent text-gray-400 hover:border-teal-600 hover:text-teal-600 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium">Online</button>
                <button  class="border-teal-500 text-teal-500 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium" >Requests</button>


            </nav>
        </div>

    </div>
</div>
{#if newFriends}
    <AddFriendSection/>
{/if}
</div>
<style>
    .login-link {
        color: blue;
        text-decoration: underline;
    }
</style>