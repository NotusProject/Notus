<script>
    import "../app.css";
    import {WindowTitlebar} from "@tauri-controls/svelte";
    import {fade} from 'svelte/transition';
    import { cubicIn, cubicOut } from 'svelte/easing';

    let { children,data} = $props();

</script>
<main class="overflow-hidden">
    <WindowTitlebar
            class="h-10  !bg-none !bg-transparent dark:bg-slate-800"
            controlsOrder="platform"
            data-tauri-drag-region
            windowControlsProps={{ class: " *:stroke-white  "}}
    >
        <div class="ml-3 flex items-center" data-tauri-drag-region>
            <div
                    class="flex w-full font-medium text-slate-400  items-center justify-center"
                    data-tauri-drag-region
            >
                Notus
            </div>
        </div>
    </WindowTitlebar>
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