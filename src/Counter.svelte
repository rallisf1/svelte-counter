<script>
    import { untrack } from 'svelte'

    let {
        children,
        values = {},
        duration = 5000,
        random = false,
        minspeed = 20
    } = $props()

    let counterResult = $state({})
    let initialized = $state(false)

    $effect(() => {
        const totalDuration = positiveInteger(duration, 5000)
        const minimumSpeed = positiveInteger(minspeed, 20)
        const useRandomSteps = random === true || random === 'true'
        const targets = Object.entries(values ?? {})
        const timers = []

        untrack(() => {
            counterResult = {}

            for (const [key, value] of targets) {
                const max = Number.parseInt(value, 10)

                if (!Number.isFinite(max) || max <= 0) {
                    counterResult[key] = Number.isFinite(max) ? max : 0
                    continue
                }

                let step = 1
                while (totalDuration / (max / step) < minimumSpeed) {
                    step += 1
                }

                let randomMax = Math.floor(max / 2)
                counterResult[key] = 0

                const timer = setInterval(() => {
                    let current = counterResult[key]

                    if (current >= max) {
                        counterResult[key] = max
                        clearInterval(timer)
                        return
                    }

                    if (useRandomSteps) {
                        const randomMin = Math.floor(current / 2)
                        current = randomInteger(randomMin, randomMax)
                        randomMax += step
                    }

                    counterResult[key] = Math.min(current + step, max)
                    if (counterResult[key] === max) clearInterval(timer)
                }, totalDuration / (max / step))
                timers.push(timer)
            }
        })

        initialized = true
        return () => timers.forEach(clearInterval)
    })

    function positiveInteger(value, fallback) {
        const parsed = Number.parseInt(value, 10)
        return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
    }

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

</script>

{#if initialized}
    {@render children?.({ counterResult })}
{/if}
