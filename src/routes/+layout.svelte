<script>
    import "../app.css";
    import {WindowTitlebar} from "@tauri-controls/svelte";
    import {fade} from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';
    import { platform } from '@tauri-apps/plugin-os';
    let { children,data} = $props();
    let platformName = $state("")
    $effect(async()=>{
         platformName = await platform();

    })
</script>
<main class="overflow-hidden">
    {#if platformName !== 'android' && platformName !== ""}
    <WindowTitlebar
            class="h-10  bg-slate-600/25 backdrop-blur"
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
<!--        *todo hide if not logged in -->
        <div class="absolute left-1/2 transform top-1 -translate-x-1/2 lex w-96 mx-auto font-medium text-xs text-slate-400 items-center justify-center">
            <input type="text" name="search" id="search" class="block w-full rounded-md  border-0 py-1 bg-slate-600/25 text-white  ring-inset text-xs ring-gray-500 placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-gray-500 focus:bg-gray-300/5 hover:bg-gray-300/10 sm:text-sm sm:leading-6" placeholder="search...">
            <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd class="inline-flex items-center rounded border border-slate-400 px-1 font-sans text-xs text-gray-400">Ctrl+K</kbd>
            </div>
        </div>
    </WindowTitlebar>
        {/if}
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