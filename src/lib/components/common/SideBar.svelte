<script lang="ts">
    import {

        ChatBubbleLeftRight, Users, Squares2x2, Bell, Cog6Tooth, GlobeAlt, PlayCircle, Play, Tv, Sun, Moon
    } from '@steeze-ui/heroicons';
    import {Icon} from "@steeze-ui/svelte-icon";

    const routesFirstRow = [
        {name: 'Dashboard', href: '#', icon: Squares2x2, current: true},
        {name: 'Messages', href: '#', icon: ChatBubbleLeftRight, current: false},
        {name: 'Friends', href: '#', icon: Users, current: false},
    ];
    const routesSecondRow = [
        {name: 'Notifications', href: '#', icon: Bell, current: false},
        {name: 'Watch2gether', href: '#', icon: PlayCircle, current: false},
        {name: 'Discover', href: '#', icon: GlobeAlt, current: false},
        {name: 'Settings', href: '#', icon: Cog6Tooth, current: false},
    ];
    let theme = ""
    function toggleTheme(){
        return "";
    }
</script>

{#snippet navItem({name, href, icon, current})}
    <li>
        <a
                href={href}
                class={current ? 'bg-teal-400/25 text-white *:stroke-teal-400' : 'text-gray-400 hover:text-white hover:bg-gray-800'}
                class:group="{true}"
                class:flex="{true}"
                class:gap-x-3="{true}"
                class:rounded-md="{true}"
                class:p-3="{true}"
                class:text-sm="{true}"
                class:leading-6="{true}"
                class:font-semibold="{true}"
        >
            <Icon class="" size="24px" src={icon} theme="outline"/>
            <span class="sr-only">{name}</span>
        </a>
    </li>
{/snippet}
<div class="hidden lg:fixed lg:inset-y-0 lg:left-0  lg:top-10  lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-slate-600/35 backdrop-blur-md lg:pb-4">
    <div class="flex h-16 shrink-0 items-center justify-center">
        <img alt="Your Company"
             class="size-10 ring-2 rounded-md ring-teal-400/70 w-auto"
             src="https://cdn.discordapp.com/avatars/911937892471959552/d1e6ea730edfca8dfc03ad3f2e93e017?size=1024">
    </div>
    <nav class="mt-6 h-[calc(100%_-_5.5rem)] ">
        <ul class="flex flex-col  h-full items-center space-y-1 relative" role="list">
            <li class="flex flex-col  items-center border-t pb-2 w-1/2 border-gray-600/60">
            </li>
            {#each routesFirstRow as route}
                {@render navItem(route)}
            {/each}
            <li class="flex flex-col items-center border-t  w-1/2 border-gray-600/60">
            </li>
            {#each routesSecondRow as route}
                {@render navItem(route)}
            {/each}

            <li class="mt-auto absolute  bottom-0 mb-4 flex justify-center">
                <div class="border flex flex-col gap-2 rounded-full p-1.5 bg-slate-700/20 border-gray-600/60">

                        <button on:click={() => toggleTheme()}>
                            <Icon class="stroke-white" size="20px" src={Sun} theme="outline"/>
                        </button>
                    <span class="items-center border-b  w-full h-fit border-gray-500/90">
                    </span>
                        <button on:click={() => toggleTheme()}>
                            <Icon class="stroke-teal-500" size="20px" src={Moon} theme="outline"/>
                        </button>

                </div>
            </li>
        </ul>
    </nav>
</div>