<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import Section from '$lib/components/Section.svelte';
    import External from '$lib/components/External.svelte';
    import { RESEARCH_GROUP_URL } from '$lib/site';
</script>

<Title
    text="About"
    description="Kyle E. Niemeyer is Professor of Mechanical Engineering at Oregon State University, working in computational modeling, combustion, and open research software."
/>

<h1>About me</h1>

<p class="lede">
    Professor of Mechanical Engineering at Oregon State University, working on
    computational modeling of fluid flows and on making research software better.
</p>

<Section id="short" header="Short bio">
    <p>
        Kyle E. Niemeyer is Professor of Mechanical Engineering at <External
            to="https://oregonstate.edu">Oregon State University</External
        >
        in the
        <External to="https://engineering.oregonstate.edu/MIME"
            >School of Mechanical, Industrial, and Manufacturing Engineering</External
        >. He also serves as the Associate School Head for Academic Affairs,
        managing the administration of existing and development of undergraduate
        and graduate academic programs in the School. He leads the
        <External to={RESEARCH_GROUP_URL}>Niemeyer Research Group</External>,
        which uses computational modeling to study various phenomena involving
        fluid flows, including combustion and chemical kinetics, and related
        topics like numerical methods and parallel computing. He is also a strong
        advocate of open access, open source software, and open science in
        general, and has contributed in the area of standardizing research
        software citation.
    </p>

    <p>
        Kyle's <External to={`${RESEARCH_GROUP_URL}/publications`}
            >peer-reviewed publications</External
        > span the combustion, energy, and computational physics communities, and
        he has received multiple prestigious fellowships throughout his career,
        including the
        <External to="https://www.aaaspolicyfellowships.org"
            >AAAS Science &amp; Technology Policy Fellowship</External
        >
        in 2022, the
        <External to="https://bssw.io/pages/bssw-fellowship-program"
            >Better Scientific Software (BSSw) Fellowship</External
        >
        in 2019, the <External to="http://www.nsfgrfp.org"
            >NSF Graduate Research Fellowship</External
        >
        in 2010, and the
        <External to="https://ndseg.org"
            >National Defense Science and Engineering Graduate Fellowship</External
        > in 2009.
    </p>

    <p>
        Kyle received his Ph.D. in Mechanical Engineering from <External
            to="https://case.edu/">Case Western Reserve University</External
        >
        in 2014, working with
        <External
            to="https://me.engr.uconn.edu/blog/faculty/sung-chih-jen-jackie/"
            >Professor Jackie Sung</External
        >
        in the
        <External to="http://combdiaglab.engr.uconn.edu/"
            >Combustion Diagnostics Laboratory</External
        >
        (now at the University of Connecticut). He received BS and MS degrees in
        Aerospace Engineering from
        <External to="https://case.edu/">Case Western Reserve University</External
        > in 2009 and 2010, respectively.
    </p>

    <p>
        He also serves as an Associate Editor-in-Chief of the <External
            to="https://joss.theoj.org"><em>Journal of Open Source Software</em></External
        >.
    </p>
</Section>

<Section id="lineage" header="Academic lineage">
    <p>
        My full academic lineage can be found at my <External
            to="http://www.genealogy.ams.org/id.php?id=180371"
            >Mathematics Genealogy Project profile</External
        >, but briefly, I was advised by:
    </p>
    <ul>
        <li>
            <External
                to="https://me.engr.uconn.edu/blog/faculty/sung-chih-jen-jackie/"
                >Jackie Sung</External
            > (Ph.D., Princeton University), who was advised by
        </li>
        <li>
            <External to="https://mae.princeton.edu/people/faculty/law"
                >Chung K. Law</External
            > (Ph.D., University of California, San Diego), who was advised by
        </li>
        <li>
            <External to="https://en.wikipedia.org/wiki/Forman_A._Williams"
                >Forman A. Williams</External
            >
            (Ph.D., Caltech), who had
            <External to="https://en.wikipedia.org/wiki/Richard_Feynman"
                >Richard Feynman</External
            > on his dissertation committee and was advised by
        </li>
        <li>
            <External to="https://en.wikipedia.org/wiki/Stanford_S._Penner"
                >Stanford S. (Sol) Penner</External
            > (Ph.D., University of Wisconsin-Madison), who was advised by
        </li>
        <li>
            <External to="https://en.wikipedia.org/wiki/Farrington_Daniels"
                >Farrington Daniels</External
            >
            (Ph.D., Harvard) and
            <External
                to="https://en.wikipedia.org/wiki/Theodore_von_K%C3%A1rm%C3%A1n"
                >Theodore von Kármán</External
            > (Dr. phil., University of Göttingen), the latter of whom was advised
            by
        </li>
        <li>
            <External to="https://en.wikipedia.org/wiki/Ludwig_Prandtl"
                >Ludwig Prandtl</External
            >.
        </li>
    </ul>

    <p>As an undergraduate, I was also advised by</p>
    <ul>
        <li>
            <External to="https://en.wikipedia.org/wiki/Joseph_M._Prahl"
                >Joseph Prahl</External
            > (Ph.D., Harvard University), and
        </li>
        <li>
            <External to="https://en.wikipedia.org/wiki/Christopher_J._Hernandez"
                >Christopher Hernandez</External
            > (Ph.D., Stanford University).
        </li>
    </ul>
</Section>

<Section id="elsewhere" header="Beyond the university">
    <p>
        Outside the university I collect <a href="/books">books</a> and build
        things out of wood; there are pictures and notes under
        <a href="/making">making</a>. I also take on
        <a href="/consulting">consulting work</a> in a personal capacity.
    </p>
</Section>
