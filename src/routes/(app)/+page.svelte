<script>
    import { WindowTitlebar } from "@tauri-controls/svelte";
</script>

<main>
    <WindowTitlebar
            controlsOrder="platform"
            class="h-13 bg-white shadow dark:bg-slate-800"
            data-tauri-drag-region
    >
        <div class="ml-3 flex items-center" data-tauri-drag-region>
            <div
                    class="flex w-full items-center justify-center"
                    data-tauri-drag-region
            >
                Title
            </div>
            <div class="flex flex-row space-x-2 whitespace-nowrap rounded-md px-2 py-1 shadow">
                <!-- Your buttons or additional content here -->
            </div>
        </div>
    </WindowTitlebar>

    <a href="/login" class="login-link">Click me</a>
</main>

<style>
    .login-link {
        color: blue;
        text-decoration: underline;
    }
</style>