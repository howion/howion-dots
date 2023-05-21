# zmodload zsh/zprof

RANGER_LOAD_DEFAULT_RC=false

# zsnap
source ~/.zsnap/repos/zsh-snap/znap.zsh

# p10k instant prompt. should stay close to top. initialization code that may require
# console input must go above.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes for more themes
ZSH_THEME="powerlevel10k/powerlevel10k"
# ZSH_THEME="dracula"
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# use case-sensitive completion
# CASE_SENSITIVE="true"

# use hyphen-insensitive completion.
# case-sensitive completion must be off. _ and - will be interchangeable
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
HIST_STAMPS="%d/%m/%y"

# standard plugins can be found in $ZSH/plugins/
# custom plugins may be added to $ZSH_CUSTOM/plugins/
plugins=(archlinux aliases cp git github yarn vscode)

source $ZSH/oh-my-zsh.sh

export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi
export EDITOR='nano'

# Compilation flags
export ARCHFLAGS="-arch x86_64"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# opam configuration
[[ ! -r /home/howion/.opam/opam-init/init.zsh ]] || source /home/howion/.opam/opam-init/init.zsh  > /dev/null 2> /dev/null

# autcomplete plugin
source ~/.repos/zsh-autocomplete/zsh-autocomplete.plugin.zsh
export GPG_TTY=$(tty)

# broot
source /home/howion/.config/broot/launcher/bash/br

# pnpm start
export PNPM_HOME="/home/howion/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

# tabtab source for packages, uninstall by removing these lines
[[ -f ~/.config/tabtab/zsh/__tabtab.zsh ]] && . ~/.config/tabtab/zsh/__tabtab.zsh || true

# custom aliases
source ~/.aliasesrc

# general variables
export ARCH="x86_64"
export LC_ALL="en_US.utf-8"
export LC_CTYPE="en_US.utf-8"
export LANG="en_US.utf-8"
export TERM="xterm-256color"
export VISUAL="nano"
export EDITOR="nano"
export HISTTIMEFORMAT="%h %d %H:%M:%S "
export HISTSIZE=10000
export HISTCONTROL=ignorespace
