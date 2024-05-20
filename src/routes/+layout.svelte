<script lang="ts">
    import "../app.css";
    import {WindowTitlebar} from "@tauri-controls/svelte";
    import {fade} from 'svelte/transition';
    import {cubicIn, cubicOut} from 'svelte/easing';
    import {platform} from '@tauri-apps/plugin-os';
    import {setContext} from "svelte";
    import {LocalStorage} from "$lib/utils/utilsSvelte.svelte.js";
    import type {AuthModel, RecordAuthResponse, RecordModel} from 'pocketbase';
    import {pocketbase} from "$lib/services/pocketbase";

    let {children, data} = $props();
    let platformName = $state("")

    const userLocalStorage = new LocalStorage<AuthModel>('user', null);
    const user = $state<AuthModel>({})
    $effect(() => {
        if (userLocalStorage.value !== null && userLocalStorage.key !== '') {
            user!.authStore = userLocalStorage.value;
            setContext('user', user);
        }
        pocketbase.authStore.onChange(async (token, model) => {
            userLocalStorage.value = model;
        });
    });
</script>
<main class="overflow-hidden">
        <WindowTitlebar
                class="h-10 hidden lg:flex bg-slate-600/25 backdrop-blur"
                controlsOrder="platform"
                data-tauri-drag-region
                windowControlsProps={{ class: " *:stroke-white  *:min-h-10"}}
        >
            <div class="ml-3 flex justify-center items-center" data-tauri-drag-region>
                <div
                        class="flex w-full font-medium text-slate-400  items-center justify-center"
                        data-tauri-drag-region
                >
                    Notus
                </div>
            </div>
            {#if user}
                <div class="absolute left-1/2 transform top-1 -translate-x-1/2 lex w-96 mx-auto font-medium text-xs text-slate-400 items-center justify-center">
                    <input type="text" name="search" id="search"
                           class="block w-full rounded-md  border-0 py-1 bg-slate-600/25 text-white  ring-inset text-xs ring-gray-500 placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 hover:bg-gray-300/10 sm:text-sm sm:leading-6"
                           placeholder="search...">
                    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <kbd class="inline-flex items-center rounded border border-slate-400 px-1 font-sans text-xs text-gray-400">Ctrl+K</kbd>
                    </div>
                </div>
            {/if}
        </WindowTitlebar>
    <div class="absolute -z-10 inset-0 flex items-center justify-center isolate overflow-hidden">
        <svg aria-hidden="true" class="absolute inset-0 -z-10 h-full w-full stroke-gray-500/15 [mask-image:radial-gradient(100%_100%_at_top_right,teal,transparent)]">
            <defs>
                <pattern height="200" id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" patternUnits="userSpaceOnUse" width="200" x="50%" y="-1">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <svg class="overflow-visible fill-gray-800/20" x="50%" y="-1">
                <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" height="100%" stroke-width="0" width="100%" />
        </svg>
        <div aria-hidden="true" class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#009488] to-[#009488] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"></div>
        </div>
    </div>
    {#key data.url}
        <div
                in:fade={{ easing: cubicOut, duration: 220}}
                out:fade={{ easing: cubicIn, duration: 250 }}
                class="overflow-scroll  h-[calc(100vh)] ">
            {@render children()}
        </div>
    {/key}
</main>
<style>

</style>