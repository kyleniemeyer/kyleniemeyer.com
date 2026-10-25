<script module lang="ts">
    import type { ProjectMeta } from '$lib/project';

    export const meta: ProjectMeta = {
        title: 'Butcher block kitchen counters',
        year: 2022,
        blurb: 'I set out to replace a dishwasher and ended up replacing the countertops, sink, and dishwasher.',
        cover: '/images/making/kitchen-countertops/after.webp',
        coverAlt: 'New kitchen countertops and sink.',
        tags: ['kitchen', 'countertops', 'plumbing'],
    };
</script>

<script lang="ts">
    import Gallery from '$lib/components/Gallery.svelte';
    import type { Photo } from '$lib/project';

    /* Photos live in static/images/making/kitchen-countertops/. */
    const photos: Photo[] = [
        {
            src: '/images/making/kitchen-countertops/before.webp',
            alt: 'The original laminate counters and old dishwasher.',
            caption: 'Before.',
        },
        {
            src: '/images/making/kitchen-countertops/dishwasher-mold.webp',
            alt: 'Mold on the wall behind the old dishwasher.',
            caption: 'A past leak behind the dishwasher grew some mold...',
        },
        {
            src: '/images/making/kitchen-countertops/floor.webp',
            alt: 'Wood flooring being held down by kettlebells.',
            caption: 'I used some kettlebells to weigh down the flooring that went under the new dishwasher.',
        },
        {
            src: '/images/making/kitchen-countertops/bumpup.webp',
            alt: 'Wood spacers to above the cabinets.',
            caption: 'Putting flooring under the dishwasher meant adding vertical spacing above the cabinets.',
        },
        {
            src: '/images/making/kitchen-countertops/unstained.webp',
            alt: 'New butcher-block countertops, unstained (and no sink).',
            caption: 'New butcher-block countertops, unstained (and no sink).',
        },
        {
            src: '/images/making/kitchen-countertops/drawer-surgery.webp',
            alt: 'Drawer that required some surgery.',
            caption: 'Drawer that required some surgery to avoid hitting the new sink.',
        },
        {
            src: '/images/making/kitchen-countertops/after.webp',
            alt: 'Stained butcher-block countertops.',
            caption: 'The final product.',
        },
        {
            src: '/images/making/kitchen-countertops/after-view2.webp',
            alt: 'Stained butcher-block countertops, other side of oven.',
            caption: 'The final product (including the other side of the oven).',
        },
    ];
</script>

<p>
    This one started small. After I bought my house and moved in, the first
    thing on my list was replacing the old dishwasher. Once I got into it, I
    found the old unit couldn't come out without removing the countertop. Since
    the counters had to come up anyway, I decided to replace them.
</p>

<p>
    The cheap laminate went, and butcher block counters went in. I finished the wood 
    surface with Waterlox Original sealer/finish, which is made from tung oil.
    Then, I installed a new farmhouse kitchen sink, with an industrial-style faucet,
    and the new Bosch dishwasher that started the whole thing.
    I also added a garbage disposal, which the old sink did not have.
</p>

<p>
    I ran into a few unexpected issues along the way. Evidently some moisture had
    made its way behind the old dishwasher at some point, leading to a lovely
    colony of black mold on the wall that I had to remediate. The nice oak hardwood 
    flooring that prior owners installed throughout the house didn't extend into
    the dishwasher alcove, so I had to glue some leftover pieces in place 
    (temporarily weighed down by some handy kettlebells). But, that raised the top
    surface of the dishwasher above the height of the cabinets, which required
    vertical wood spacers to bring everything to the same horizontal plane.
</p>

<p>
    After I got everything installed and the surfaces finished, I ran into one 
    other hurdle... the apron of the new sink extended far enough that it blocked
    my utensil drawer! I didn't realize this until <em>after</em> installing the
    sink, so I had to creatively disassemble the drawer in place, with all of its
    contents, before remaking it a bit narrower to fit.
</p>

<p>
    Overall, I'm very happy with how it turned out. If I were to do it again,
    the main thing I would do differently would be to join the two pieces of the 
    L using a 45° miter joint rather than a butt joint. The joint is a bit more 
    visible than I'd like.
</p>

<Gallery {photos} />
