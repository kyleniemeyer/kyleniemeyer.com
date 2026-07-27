<script lang="ts">
    import { page } from '$app/state';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Page not found" />

<h1>{page.status === 404 ? "That page isn't here" : 'Something went wrong'}</h1>

<p class="lede">
    {page.error?.message ?? 'An unexpected error occurred.'}
</p>

<p>
    Try the <a href="/">home page</a>, or head to my
    <a href="/about">about page</a> to get your bearings.
</p>
