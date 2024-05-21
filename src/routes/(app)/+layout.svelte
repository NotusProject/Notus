<script lang="ts">
    import {getContext} from "svelte";
    import type {AuthModel} from "pocketbase";
    import SideBar from "$lib/components/common/SideBar.svelte";
    import {fly} from "svelte/transition";
    import {cubicIn, cubicOut} from "svelte/easing";
    import {pocketbase} from "$lib/services/pocketbase";

    let {children, data} = $props();
    let user = $state<AuthModel>({});
    $effect(() => {
        user = getContext('user');
        console.log(data)
        console.log(pocketbase.authStore)
    })
</script>
{#if pocketbase.authStore.token}


    <div >

        <SideBar/>
        {#key data.url}
        <main
                in:fly={{ x: 150, duration: 250, easing: cubicOut }}


                class="py-10 lg:pl-[22rem]">
            <div class="px-4 sm:px-6 lg:px-8">
                {@render children()}

            </div>
        </main>
        {/key}

        <aside class="fixed inset-y-0 top-10 bg-slate-600/35 left-20 border-l border-gray-600  hidden w-72 overflow-y-auto  px-4 py-6 sm:px-6 lg:px-8 xl:block">
            <!-- Secondary column (hidden on smaller screens) -->
            <div class="text-white">placeholder</div>
        </aside>
    </div>
{:else}
    <main>

        <a href="/login" class="login-link">Click me</a>
    </main>

{/if}


<!--{/if}-->
<style>
    .login-link {
        color: blue;
        text-decoration: underline;
    }
</style>