# svelte-counter

A simple css-agnostic count-up component for Svelte 5.

## Installation 🔧

First you need a [Svelte](https://svelte.dev) 5 project. Its starter template lives at https://github.com/sveltejs/template.

Then install the component by running the following command in your project's directory:

```sh
npm install svelte-counter
```

## Demo

To run the interactive local demo from this repository:

```sh
npm install
npm run demo
```

Use `npm run demo:build` to create a production build of the demo.

## How to use 🚀

1. First import the component on your svelte page's script section.

```js
import Counter from 'svelte-counter';
```

2. Declare your counter variables as one object like so (again in the script section):

```js
let counters = {
    'coffees'	: 88,
    'hours' : 1600,
    'lines' : 6132,
    'clients'	: 22
}
```
_You can use anything *valid* you like for variable & key names, it doesn't matter!_

3. Call the component where you want it to be placed e.g.:

```html
<Counter values={counters} duration="5000" random="false" minspeed="200">
    {#snippet children({ counterResult })}
        <div>{counterResult.coffees} cups of coffee drunk</div>
        <div>{counterResult.hours} hours worked</div>
        <div>{counterResult.lines} lines of code written</div>
        <div>{counterResult.clients} happy customers</div>
    {/snippet}
</Counter>
```

In the slot space between `<Counter></Counter>` you can write your template however you like. Use the same keys you declared above for the counterResult object in your template.

The `children` snippet receives an object containing `counterResult`; you may destructure it with any local name.

### Configuration Options
All the following options are optional:
| Name | Default | Description |
| ---- | ------- | ----------- |
| duration | 5000 | Effect duration in milliseconds |
| random | false | Randomize the counting (might go even backwards) |
| minspeed | 20 | The fastest it will tick in milliseconds, larger means slower |

## Missing ❌
* Decimals support - Could do it but most people only want integer counters. Will update upon request.
* Tests - It's pretty straight forward but feel free to contribute.
* Demo Page - Will do.

## Contribution 🖇️

Feel free to fork. If you find a bug or got something great to add make a pull request!

## Authors ✒️

* ** John Rallis ** - * Initial Work * - [rallisf1](https://github.com/rallisf1)

You can also look at the list of all the [contributors](https://github.com/rallisf1/svelte-counter/contributors) who have participated in this project. 

## License 📄

This project is free to use, edit & distribute under the MIT License.

## Expressions of Gratitude 🎁

* Tell others about this project 📢 
* Buy me a beer 🍺 or coffee ☕ | ₿ [Crypto](https://freewallet.org/id/rallisf1/) |💰 [Cash](https://www.paypal.me/rallisf1) 
* Publicly thanks 🤓

---
⌨️ with ❤️ by  [rallisf1](https://github.com/rallisf1) 😊
