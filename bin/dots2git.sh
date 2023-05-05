#!/usr/bin/env bash

function copy_dots() {
    rm -rf --preserve-root ../dotfiles
    mkdir -p ../dotfiles

    dots=(
        "$HOME/.aliasesrc"
        "$HOME/.nanorc"
        "$HOME/.zshrc"
    )

    for dot in "${dots[@]}"; do
        cp -v "$dot" ../dotfiles
    done

    # dot folders

    cp -rvf "$HOME/.i3" ../dotfiles
    cp -rvf "$HOME/.nano" ../dotfiles
}

echo "Hello World! I will copy your selected dotfiles to this git repo now."
echo # new line

copy_dots # I'm the judge, jury and executioner
