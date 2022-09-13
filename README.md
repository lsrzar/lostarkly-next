# <img src="https://user-images.githubusercontent.com/87744767/160224530-25b35904-ab1d-466f-b5da-1f38bca153a9.png" height="24px"/> LostArkly
<a href="#" title="Built With">![Built With](https://img.shields.io/badge/-Built%20With-222222?style=flat-square)</a>
<a href="https://nextjs.org/" title="Next">![Next.js](https://img.shields.io/badge/-Next-e8ebec?&logo=nextdotjs&logoColor=222222&style=flat-square)</a>
<a href="https://reactjs.org/" title="React">![React](https://img.shields.io/badge/-React-e8ebec?&logo=React&logoColor=189AB4&style=flat-square)</a>
<a href="https://chakra-ui.com/" title="Chakra UI">![Chakra UI](https://img.shields.io/badge/-Chakra%20UI-e8ebec?&logo=chakraui&style=flat-square)</a>
<a href="https://www.typescriptlang.org" title="TypeScript">![TypeScript](https://img.shields.io/badge/-TypeScript-e8ebec?&logo=TypeScript&style=flat-square)</a>

A checklist for [Lost Ark](https://www.playlostark.com/)'s daily & weekly quests.

> This project is under **heavy development**🚧.
> Currently, the data persists only within the browser as a set of cookies (awfully implemented) and does not do anything else! See the planned features [here](#planned-features)

⚡ **Try it out [here](https://lostarkly.vercel.app)!**

<a href="https://user-images.githubusercontent.com/87744767/160224346-baa88e6e-0068-4633-aa45-c842a384cd67.gif" title="LostArkly Screencap">
  <img src="https://user-images.githubusercontent.com/87744767/160224346-baa88e6e-0068-4633-aa45-c842a384cd67.gif" alt="LostArkly Screencap" width="800px"/>
</a>

## Setting it up

```bash
git clone https://github.com/lesrz/lostarkly-next
cd lostarkly-next
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site running.
## Tools

  <a href="https://eslint.org/" title="ESLint">![ESLint](https://img.shields.io/badge/-ESLint-1b1a3f?&logo=eslint&logoColor=4b3abf&style=flat-square)</a>
  <a href="https://prettier.io/" title="Prettier">![Prettier](https://img.shields.io/badge/-Prettier-1a2a30?&logo=prettier&logoColor=b38831&style=flat-square)</a>
  <a href="https://code.visualstudio.com/" title="VSCode">![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-2c2b30?&logo=visualstudiocode&logoColor=2386c5&style=flat-square)</a>
  <a href="https://neovim.io/" title="Neovim">![Neovim](https://img.shields.io/badge/-Neovim-317dbb?&logo=neovim&logoColor=579a49&style=flat-square)</a>
  <a href="https://vercel.com/" title="Vercel">![Vercel](https://img.shields.io/badge/-Vercel-222222?&logo=vercel&logoColor=ffffff&style=flat-square)</a>
  
## Planned Features

- [ ] Automatic reset based on server timezones.
- [ ] Manual reset button.
- [ ] Cooldown timers for each task.
- [ ] Add tabs for multiple characters/accounts.

## Known Issues

- Wonky implementation of checkboxes & cookies (plan to implement state management and local storage management libraries)
- Lack of accessibility
- Semantic HTML inconsistencies
