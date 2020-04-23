<script>
import { onMount } from 'svelte';

export let values, duration, random, minspeed;
let counterResult = {};
var timers = [];

onMount(() => {
    duration = parseInt(duration) || 5000;
    minspeed = parseInt(minspeed) || 20;
    random = (random == 'true');
    for (let [key, value] of Object.entries(values)) {
        let step = 1;
        let max = parseInt(value);
        let randomMax = Math.floor(max / 2);
        let randomMin = 0;
        while((duration / (max / step)) < minspeed){
            step++;
        }
        counterResult[key] = 0;
        timers[key] = setInterval(function(){
            if(counterResult[key] < max){
                if(random){
                    randomMin = Math.floor(counterResult[key] / 2);
                    counterResult[key] = getRandomInt(randomMin, randomMax);
                    randomMax += step;
                }
                counterResult[key] += step;
            } else {
                counterResult[key] = max;
                clearInterval(timers[key]);
            }
        }, duration / (max / step));
    }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

</script>

<slot {counterResult}></slot>