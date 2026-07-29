<script>
    import Counter from '../../src/Counter.svelte'

    let run = $state(0)
    let duration = $state(2200)
    let random = $state(false)

    const values = {
        coffees: 88,
        hours: 1600,
        projects: 42,
        clients: 22
    }

    function restart() {
        run += 1
    }
</script>

<svelte:head>
    <meta name="description" content="Interactive demo for svelte-counter" />
</svelte:head>

<main>
    <section class="intro">
        <p class="eyebrow">svelte-counter</p>
        <h1>A small, CSS-agnostic count-up component.</h1>
        <p class="lede">Use the controls to see the Svelte 5 snippet API in action.</p>

        <div class="controls">
            <label>
                Duration
                <input bind:value={duration} min="200" max="10000" step="100" type="range" />
                <output>{duration} ms</output>
            </label>

            <label class="toggle">
                <input bind:checked={random} type="checkbox" />
                Random steps
            </label>

            <button onclick={restart}>Run again</button>
        </div>
    </section>

    {#key run}
        <Counter {duration} {random} minspeed={24} {values}>
            {#snippet children({ counterResult })}
                <section aria-label="Counter results" class="counters">
                    <article>
                        <strong>{counterResult.coffees}</strong>
                        <span>coffees brewed</span>
                    </article>
                    <article>
                        <strong>{counterResult.hours}</strong>
                        <span>hours saved</span>
                    </article>
                    <article>
                        <strong>{counterResult.projects}</strong>
                        <span>projects shipped</span>
                    </article>
                    <article>
                        <strong>{counterResult.clients}</strong>
                        <span>happy clients</span>
                    </article>
                </section>
            {/snippet}
        </Counter>
    {/key}
</main>
