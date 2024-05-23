<script lang="ts" generics="T">
    
    import { pocketbase } from '$lib/services/pocketbase';
    import type { UsersResponse } from '$lib/services/pocketbase-types';
    import UserListItem from './UserListItem.svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { Check, UserPlus } from '@steeze-ui/heroicons';
    
    let username = $state('');
    let searchResults = $state<Promise<UsersResponse<unknown>[]>>();
    
    async function searchUsersByUsername(username: string, event: Event) {
        event.preventDefault();
        
        searchResults = pocketbase.collection('users').getList(1, 50, {
            filter: `username ~ "${username}"`
        }).then(records => records.items);
    }
    
    async function sendFriendReq(userId: string) {
        await pocketbase.collection('friend_requests').create({
            sender: `${pocketbase?.authStore?.model?.id}`,
            recipient: userId,
            status: 'pending'
        });
    }
 
</script>
<div class="m-auto max-w-2xl mt-4">
    <div>
        <div class="text-center">
            <svg aria-hidden="true" class="mx-auto h-12 w-12 stroke-teal-500" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                <path d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
            <h2 class="mt-2 text-base font-semibold leading-6 text-white">Add new friends</h2>
            <p class="mt-1 text-sm text-gray-400">Add friends to collaborate on notes and study together in voice
                chat.</p>
        </div>
        
        <form class="mt-6 flex" onsubmit="{(e)=>{searchUsersByUsername(username,e)}}">
            <label class="sr-only" for="email">Email address</label>
            <input bind:value={username}
                   class="block md:min-w-[500px] w-full rounded-md bg-slate-600/25  border-0 py-3 md:py-1.5  text-white ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 hover:bg-gray-300/15 sm:text-sm sm:leading-6"
                   id="username" name="username" placeholder="Enter an email or username" type="text">
            <button class="ml-4 flex-shrink-0 rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" type="submit">Send invite</button>
        </form>
    </div>
    <div class="mt-10 w-full ">
        <!--todo: toast to announce that friend req was send -->
        {#if searchResults}
            {#await searchResults}
                <p class="text-white">Searching for users...</p>
            {:then users}
                {#each users as user}
                    <UserListItem avatar="{user.avatar}" span="Joined 2024" username={user.username}>
                        <button onclick={()=>{sendFriendReq(user.id)}} type="button"
                                class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                            <Icon class='-ml-0.5' size="20px" src={UserPlus} theme='mini' />
                            Add friend
                        </button>
                    </UserListItem>
                {/each}
            {:catch error}
                <p class="text-white">Error: {error.message}</p>
            {/await}
        {:else}
            <div class="mx-auto flex flex-col gap-4 items-center justify-center">
                <img alt="icon" class="opacity-65 size-32 " src="/icon.png">
                <p class="text-gray-400 text-base">Notus is eagerly waiting for study buddies to join the voice chat and
                    study together!</p>
            </div>
        {/if}
    </div>

</div>