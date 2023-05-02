# howion-dots (+ boilerplates)

Some of my dotfiles for both my workstation and projects. This repository mainly here to serve as a boilerplate for my current and future projects.

Please note that **directories does not serve as a complete boilerplate**. For example, nextjs boilerplate lacks `.editorconfig` and `.gitignore`. You should use `npx howion-dots` to properly create a boilerplate. The reason behind this is that there are some common dotfiles and other files that are required to be auto generated specific to that project.

As I belive 4 spaces is the only true way to code, there is no way to change that and every file and config is in and for 4 spaces format.


## Available Commands

### **`boil`**

Create a new folder and populate it with the selected boilerplate. See [available boilerplates](#available-boilerplates). This command is interactive.

```console
npx howion-dots boil <boilerplate> <destination>
```

`destination` argument determines in which folder to put the boilerplate in. Destination cannot be equal to `.` or `..`. Destination directory must be empty if exists.

For example `npx howion-dots boil nextjs mathematica` creates a new folder called `mathematica` in the current directory and populates it with nextjs boilerplate.

### **`update`**

Updates the current boilerplate's dotfiles and dependencies. This code may but probably will not break your project unless you made changes to the previous boilerplate. This command is interactive and **will ask to whether rewrite previously auto-generated files**.

```console
npx howion-dots update <boilerplate>
```

This command should be executed in the current

### **`plates`**




## Available Boilerplates

### Next.js 13

`next@13 (swc) + ts + sass + stylelint + postcss`

```console
npx howion-dots boil nextjs <destination>
```

### Node Project

`esbuild + ts`

```console
npx howion-dots boil node <destination>
```


## Todo

- [ ] Finish `npx howion-dots`.
- [ ] Adjust postcss and stylelint in `nextjs`.
- [ ] Complete `node`

## License

MIT
