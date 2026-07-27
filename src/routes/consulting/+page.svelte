<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import External from '$lib/components/External.svelte';
    import { PERSONAL_EMAIL } from '$lib/site';
</script>

<Title
    text="Consulting"
    description="Consulting services from Kyle Niemeyer via Niemeyer Consulting LLC: modeling and simulation of thermal-fluid systems, high-performance computing, and scientific software."
/>

<h1>Consulting services</h1>

<p class="lede">
    Beyond my academic collaborations related to sponsored research projects,
    joint funding applications, and teaching, I also provide consulting services
    via Niemeyer Consulting LLC (registered in Oregon).
</p>

<p>
    I provide consulting services in my personal capacity in these general areas
    and beyond:
</p>

<ul>
    <li>
        modeling and simulation of thermal-fluid systems, particularly involving
        reacting fluid flows
    </li>
    <li>
        high-performance computing, particularly using high-level languages like
        Python
    </li>
    <li>testing of scientific and engineering software</li>
    <li>open-source software development</li>
    <li>verification and validation of science and engineering models</li>
    <li>software support</li>
    <li>
        review and evaluation of proposals for research &amp; development funding
    </li>
</ul>

<p>
    Services also include delivery of courses and training in the above and other
    areas, as well as supporting supervision of research and engineering projects
    in my areas of expertise.
</p>

<p>
    Consulting fees for these services are negotiated on an individual basis.
    Services are provided to institutions as well as individuals.
</p>

<p class="inquiry">
    Inquiries for services can be made via <External
        to={`mailto:${PERSONAL_EMAIL}`}>email</External
    >.
</p>

<style>
    .inquiry {
        margin-top: calc(var(--step) * 1.5);
        padding: 1rem 1.15rem;
        background-color: var(--paper-sunken);
        border-left: 3px solid var(--accent);
        border-radius: var(--radius);
    }
</style>
