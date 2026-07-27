<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Section from '$lib/components/Section.svelte';
    import External from '$lib/components/External.svelte';
    import {
        OSU_EMAIL,
        PERSONAL_EMAIL,
        RESEARCH_GROUP_URL,
        SOCIAL,
    } from '$lib/site';
</script>

<Title
    text="Contact"
    description="How to reach Kyle Niemeyer, for university business, consulting inquiries, and everything else."
/>

<h1>Getting in touch</h1>

<p class="lede">
    Which address to use depends on what it's about.
</p>

<Section id="university" header="University business">
    <p>
        Anything involving Oregon State &mdash; prospective students, courses,
        research collaborations, School of MIME academic programs &mdash; should
        go to <External to={`mailto:${OSU_EMAIL}`}>{OSU_EMAIL}</External>.
    </p>
    <p>
        If you're a current or prospective student, read the <External
            to={`${RESEARCH_GROUP_URL}/lab`}>lab page</External
        >
        and the
        <External to={`${RESEARCH_GROUP_URL}/contact`}
            >contact page on my research group site</External
        > first; they answer most of what people write to ask.
    </p>
</Section>

<Section id="consulting" header="Consulting">
    <p>
        Consulting inquiries go to <External to={`mailto:${PERSONAL_EMAIL}`}
            >{PERSONAL_EMAIL}</External
        >. See <a href="/consulting">what I do</a> for the kinds of work I take on.
    </p>
</Section>

<Section id="elsewhere" header="Elsewhere">
    <ul>
        <li>
            <External to={SOCIAL.github}>GitHub</External> &mdash; where most of my
            code lives.
        </li>
        <li>
            <External to={SOCIAL.bluesky}>Bluesky</External> &mdash; I post
            occasionally and read regularly; DMs and replies reach me.
        </li>
        <li>
            <External to={SOCIAL.mastodon}>Mastodon</External> &mdash; same, less
            often.
        </li>
        <li>
            <External to={SOCIAL.linkedin}>LinkedIn</External> &mdash; for
            professional contacts. I usually only accept connections from people
            I've actually met.
        </li>
    </ul>

    <p class="note">
        Please don't call. Write first, and we can schedule a call if one would
        help.
    </p>
</Section>

<style>
    .note {
        font-size: var(--size-small);
        color: var(--ink-soft);
        border-left: 2px solid var(--rule);
        padding-left: 1rem;
    }
</style>
