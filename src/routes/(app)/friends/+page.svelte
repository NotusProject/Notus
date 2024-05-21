<script lang="ts">

    import AddFriendSection from "./components/AddFriendSection.svelte";
    import {Bell, Check, Cog6Tooth, Envelope, GlobeAlt, Phone, PlayCircle, Signal, XMark} from "@steeze-ui/heroicons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import UserListItem from "./components/UserListItem.svelte";
    import {pocketbase} from "$lib/services/pocketbase";
    let tab = $state(0)
    const actionBtns = [
        { text: '', icon: Phone, background: "bg-teal-600"},
        { text: '', href: '/watch', icon: Envelope, background: "bg-teal-600" },
        { text: '', href: '/discover', icon: Signal, background: "bg-teal-600" },
    ];
    const requestBtns = [
        { text: 'Accept', icon: Check, background: "bg-teal-600", onclick: async (id:string)=>{
                await pocketbase.collection('friend_requests').update(id, {status: 'accepted'});

            } },
        { text: 'Reject', icon: XMark, background: "bg-gray-500/55", onclick: async (id:string)=>{
                await pocketbase.collection('friend_requests').update(id, {status: 'declined'});

            }},
    ];
    let requestList = $state([]);
    $effect(async()=>{
        requestList =  await pocketbase.collection('friend_requests').getFullList({
            filter: "status = 'pending'",
            expand:"sender"
        });
        await pocketbase.collection('friend_requests').subscribe('*',(data)=>{
            console.log(data)
        })
        })
</script>
{#snippet navItem({text, icon, background,onclick},id)}
    <button onclick={()=>{onclick(id)}} type="button" class="inline-flex items-center gap-x-1.5 rounded-md {background} px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
        <Icon class='-ml-0.5' size="20px" src={icon} theme='mini'/>

        {text}
    </button>
    {/snippet}
<div class="flex flex-col h-full">
    <div class="border-b border-gray-500 pb-5 sm:pb-0">
        <div class="flex justify-between items-center ">
            <h3 class="text-base font-semibold leading-6 dark:text-white">Friends</h3>
            <button class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" onclick={()=>{tab = 3}} type="button">

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
                    <button class=" {tab === 0 ? 'border-teal-500 text-teal-500': 'text-gray-400 border-transparent '} hover:border-teal-600 hover:text-teal-600 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"  onclick={()=>{tab = 0}}>All</button>
                    <button class="{tab === 1 ? 'border-teal-500 text-teal-500': 'text-gray-400 border-transparent '} hover:border-teal-600 hover:text-teal-600 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"   onclick={()=>{tab = 1}}>Online</button>
                    <button class="{tab === 2 ? 'border-teal-500 text-teal-500': 'text-gray-400 border-transparent '} over:border-teal-600 hover:text-teal-600 whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"   onclick={()=>{tab = 2}} >Requests</button>


                </nav>
            </div>

        </div>
    </div>
    {#if tab ===0}
    <ul role="list" class="">
<!--        <UserListItem-->
<!--        avatar="https://cdn.discordapp.com/avatars/911937892471959552/d1e6ea730edfca8dfc03ad3f2e93e017?size=1024"-->
<!--        username="vynxc"-->
<!--        span="Online"-->
<!--        >-->
<!--            {#each actionBtns as btn}-->
<!--                {@render navItem(btn)}-->
<!--                {/each}-->
<!--        </UserListItem>-->
        <li class="relative flex justify-between gap-x-6  py-5 ">
            <div class="flex min-w-0 gap-x-4">
                <img class="h-12 w-12 flex-none rounded-md ring-2 ring-gray-400  ring-opacity-75" src="https://cdn.discordapp.com/avatars/1226135412150505503/b6e0faa1d24b06aef215deef6fdd0a6e?size=1024" alt="">
                <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-200">
                            <span class="absolute inset-x-0 -top-px bottom-0"></span>
                           Mugi
                    </p>
                    <div class="mt-1 flex text-xs leading-5 text-gray-500">

                    <div class=" flex items-center gap-x-1.5">

                        <p class="text-xs leading-5 text-gray-500">Last Seen 3h ago</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="flex shrink-0 items-center gap-x-4">
                <div class="hidden sm:flex gap-4 sm:items-end">
                    <button onclick={()=>{tab = 3}} type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">

                        <Icon class='-ml-0.5' size="20px" src={Phone} theme='mini'/>
                    </button>
                    <button onclick={()=>{tab = 3}} type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                        <Icon class='-ml-0.5' size="20px" src={Envelope} theme='mini'/>
                    </button>
                    <button onclick={()=>{tab = 3}} type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                        <Icon class='-ml-0.5' size="20px" src={Signal} theme='mini'/>
                    </button>
                </div>
            </div>
        </li>


    </ul>
        {/if}
    {#if tab === 2}
        <ul role="list" class="">
            {#each requestList as request}
            <UserListItem
                    avatar="{request.expand.sender.avatar}"
                    username="{request.expand.sender.username}"
                    span="Incoming friend request"
            >
                {#each requestBtns as btn}
                    {@render navItem(btn,request.id)}
                {/each}
            </UserListItem>
                {/each}
        </ul>
        {/if}
    {#if tab === 3}
        <AddFriendSection/>
    {/if}
</div>
<style>
    .login-link {
        color: blue;
        text-decoration: underline;
    }
</style>