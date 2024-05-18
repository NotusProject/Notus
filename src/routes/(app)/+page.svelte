<script lang="ts">
    import ThemeSwitch from "./theme-switch.svelte"
    import { WindowTitlebar} from "@tauri-controls/svelte";

    const platforms = ["gnome"]
    import { platform } from '@tauri-apps/plugin-os';
    let device = $state('')
    $effect(async()=>{
        const platformName = await platform();
        device = platformName
    })
</script>

<svelte:head>
    <title>Demo-Svelte</title>
</svelte:head>

{#if device !== '' && device !== "android"}

            <WindowTitlebar
                    controlsOrder="platform"
                    class="h-13   bg-white shadow dark:bg-slate-800"
                    data-tauri-drag-region
            >
                <div class="ml-3 flex items-center" data-tauri-drag-region>
                    <div
                            class="flex w-full items-center justify-center"
                            data-tauri-drag-region
                    >
                        Title
                    </div>
                    <div
                            class="flex flex-row space-x-2 whitespace-nowrap rounded-md px-2 py-1 shadow"
                    >

                    </div>
                </div>


            </WindowTitlebar>

    {/if}

<style >
    :global(html.dark) {
        background-color: theme(colors.sky.950);
    }
    :global(html) {
        background-color: theme(colors.slate.50);
    }
</style>