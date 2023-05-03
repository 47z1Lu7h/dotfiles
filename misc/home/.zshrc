#####################################################################################
# ░ ░░▒ ▒ ░▒ ░▒░  ░▒░▒▒ ▒ ░▒░  ░ ░▒ ░▒░░░ ▒▒░░▒ ░░▒░░ ░▒▒ ▒ ░ ░▒░░▒ ▒ ░▒░ ░░▒ ░ ▒░▒ #
# ░ ████  ░▒░ ░▒░  █ ░▒ ███████████ ░░░░ ████  ██ ░░░░ ███████ ████  ░░░▒ ██ ███ ░▒ #
#  █  █████████████ ▒░ ██ █ ██ █████ ░ █ ██  █  ████  ████████  ████ ░░▒ ███  ████  #
# █ ░░  ██████████ ▒▒░ ██       ███  ██  ██  ██████  ██ ░ █  █ ░ ███ ▒  ██  █ ░████ #
# █ ░░▒         █ ▒ ░░ ███ ░▒░▒ ██  █ ░░▒░  ██ █ █   █ ░░ █  █ ▒░ ██ ░ ██  ██ ░ ███ #
#  ██ ░▒░░▒ ░  █ ▒░░ ░▒ ████ ░▒░ █ ░▒░▒ █  █   █ █  ░▒░░░ █  █ ░░ ██  ███ ▒ ░▒ ░░░▒ #
# ░▒░░▒▒ ▒ ░▒ █ ▒░▒░░░ ██ ████ ░▒░▒░▒░ ██ ██   █ █ ░▒░░▒  ██ ██ ▒ ██░ ██ ▒ ██  ░ ▒  #
# ▒░░▒░▒░░▒░ █ ░░░ ░▒░▒ ███ ████ ░░▒░▒ ██ ██   █ █  ░▒░▒  ██ ██  ██░▒ ██ ▒ ██  ░░░░ #
# ▒ ▒ ░▒░ ▒ █ ░▒▒░▒░ ░░░ ███ ████ ▒░ ▒ ██ ███████████ ▒░░ ████████    ██ ▒ ██ ░░▒ ░ #
# ░▒░▒░░░░ █ ░░ ▒░▒ ░░▒▒░▒ ███ ███ ░▒▒ ██ ██ ▒ █ ██  ░▒░ ███ ██  ███  ██ ░ ██ ░▒░░▒ #
# ░▒ ▒ ░░ █ ░▒░▒▒ ░░▒▒ ▒░▒ ▒ ██ ███ ░░ ██ ██ ░ █ ██  ░░▒ ███ ██ ░ ███ ██ ░ ██  ░ ░░ #
# ▒▒░░▒░ █ ▒ ▒ ░▒░▒▒ ▒░░░▒▒▒░ ██ ██ ░▒ ██ ██ ▒ █ ██  ░░▒ ███ ██ ▒ ███  ██  ██   ░▒░ #
# ░▒░░ █ ▒░▒░▒▒░░░░░▒▒ ▒ ░▒░░  █ █ ░░▒ █░▒ █ ▒ █ ██ ░▒▒░▒███   ░▒ ███  ██ ▒ ░▒ ██ ▒ #
# ░ ████ ▒ ░░░ ░ ▒▒  █  ███ ░░   █ ▒ █████  ▒░░█ ██  ░  ████  ░░  ███ ░ ███ ▒  ██ ░ #
# █   █████████████  █  █████████ ░░ █  █████ ▒█ ██   ██████ ░▒░  ███ ░░ ███████▒ ░ #
# ██░░▒  ██████████  █▒▒ ▒ █████  ▒▒ █ ░░▒ ██ ▒█ ███ ░▒░  ██ ░░▒  ███ ▒░▒  ███ ░▒ ▒ #
#  ██ ▒ ▒ ░ ░░  ▒░ ▒ █▒█▒ ░░▒ ░░▒▒ ▒ █ ▒ ░░▒ ▒▒█ ███ ░▒░ ░░ ▒ ░░░ ███  ░██▒ ▒ ░ ▒ ░ #
# ▒ ████░▒░▒░░░▒░▒░░ █ █░  █▒ ▒▒ ▒░███ ░░▒░░▒ ▒  ████ ░▒░░▒░░▒░░▒▒ ███ ████░░░▒ ░░▒ #
#    ███  ░▒▒ ▒ ▒ ▒  ████░ █░ ░ ▒░          ▒░░  ████ ░░▒ ░░▒░▒ ▒░▒ █████░ ▒░░    ░ #
# by  ░░░▒░▒▒ ░ ░░▒░  ░░░ ▒ ▒ ░▒░  47z!Lu7h  ░▒ ░▒ ░░▒ ░▒░▒ ░░░░▒ ░▒ ███▒░▒▒░  :) ░ #
#####################################################################################
source ~/.zsh/plugins/sudo.plugin.zsh/sudo.plugin.zsh
# add 'autoload' to fpath
fpath=($fpath autoloaded)

if [ -f ~/.zsh/aliases ]; then
	source ~/.zsh/aliases
else
	print "404: ~/.zsh/aliases not found."
fi

if [ -f ~/.zsh/functions ]; then
	source ~/.zsh/functions
else
	print "${red} 404: ~/.zsh/functions not found."
fi

if [ -f ~/.zsh/antigen.zsh ]; then
	source ~/.zsh/antigen.zsh
else
	print "404: ~/.zsh/antigen.zsh not found."
fi

	# Enable Powerlevel10k instant prompt. Should stay at the top of ~/.zshrc.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
	# - To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ -f /$HOME/.p10k.zsh ]] && source /$HOME/.p10k.zsh
	# - To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

	 # - Take off rubbish of p10k
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet
typeset -g POWERLEVEL9K_INSTANT_PROMPT=off

	# - c@lRs
export end='\033[0m'		# Text Reset
export italic='\e[3;\e[0m'
export lin="\e[4m;\e[0m"
export tacha="\e[9m;\e[0m"

# Regular Colors
export end='\e[0m'
export bold='\033[1m'
export black='\e[0;30m'
export grey='\e[1;30m'
export red='\e[0;31m'
export light_red='\e[1;31m'
export green='\e[0;32m'
export light_green='\e[1;32m'
export brown='\e[0;33m'
export yellow='\e[1;33m'
export blue='\e[0;34m'
export light_blue='\e[1;34m'
export purple='\e[0;35m'
export light_purple='\e[1;35m'
export cyan='\e[0;36m'
export light_cyan='\e[1;36m'
export light_grey='\e[0;37m'
export white='\e[1;37m'

export Black='\033[0;30m'        # Black
export Red='\033[0;31m'          # Red
export Green='\033[0;32m'        # Green
export Yellow='\033[0;33m'       # Yellow
export Blue='\033[0;34m'         # Blue
export Purple='\033[0;35m'       # Purple
export Cyan='\033[0;36m'         # Cyan
export White='\033[0;37m'        # White

# Bold
export BBlack='\033[1;30m'       # Black
export BRed='\033[1;31m'         # Red
export BGreen='\033[1;32m'       # Green
export BYellow='\033[1;33m'      # Yellow
export BBlue='\033[1;34m'        # Blue
export BPurple='\033[1;35m'      # Purple
export BCyan='\033[1;36m'        # Cyan
export BWhite='\033[1;37m'       # White

# Underline
export UBlack='\033[4;30m'       # Black
export URed='\033[4;31m'         # Red
export UGreen='\033[4;32m'       # Green
export UYellow='\033[4;33m'      # Yellow
export UBlue='\033[4;34m'        # Blue
export UPurple='\033[4;35m'      # Purple
export UCyan='\033[4;36m'        # Cyan
export UWhite='\033[4;37m'       # White

# Background
export On_Black='\033[40m'       # Black
export On_Red='\033[41m'         # Red
export On_Green='\033[42m'       # Green
export On_Yellow='\033[43m'      # Yellow
export On_Blue='\033[44m'        # Blue
export On_Purple='\033[45m'      # Purple
export On_Cyan='\033[46m'        # Cyan
export On_White='\033[47m'       # White

# High Intensity
export IBlack='\033[0;90m'       # Black
export IRed='\033[0;91m'         # Red
export IGreen='\033[0;92m'       # Green
export IYellow='\033[0;93m'      # Yellow
export IBlue='\033[0;94m'        # Blue
export IPurple='\033[0;95m'      # Purple
export ICyan='\033[0;96m'        # Cyan
export IWhite='\033[0;97m'       # White

# Bold High Intensity
export BIBlack='\033[1;90m'      # Black
export BIRed='\033[1;91m'        # Red
export BIGreen='\033[1;92m'      # Green
export BIYellow='\033[1;93m'     # Yellow
export BIBlue='\033[1;94m'       # Blue
export BIPurple='\033[1;95m'     # Purple
export BICyan='\033[1;96m'       # Cyan
export BIWhite='\033[1;97m'      # White

# High Intensity backgrounds
export On_IBlack='\033[0;100m'   # Black
export On_IRed='\033[0;101m'     # Red
export On_IGreen='\033[0;102m'   # Green
export On_IYellow='\033[0;103m'  # Yellow
export On_IBlue='\033[0;104m'    # Blue
export On_IPurple='\033[0;105m'  # Purple
export On_ICyan='\033[0;106m'    # Cyan
export On_IWhite='\033[0;107m'   # White

	# - Display last command
echo -en "\e]2;   \a"
preexec () { 
	print -Pn "\e]0;$1 -  \a" 
}

# Execute code in the background to not affect the current session
{
# Compile zcompdump, if modified, to increase startup speed.
zcompdump="${ZDOTDIR:-$HOME}/.zcompdump"
	if [[ -s "$zcompdump" && (! -s "${zcompdump}.zwc" || "$zcompdump" -nt "${zcompdump}.zwc") ]]; then
	zcompile "$zcompdump"
	fi
} &!

	# - Use modern completion system
autoload -Uz compinit
compinit
autoload -U select-word-style
select-word-style shell

zmodload zsh/complist
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -M menuselect 'j' vi-down-line-or-history

export WORDCHARS='*?_[]~=&;!#$%^(){}'
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_DATA_HOME="$XDG_CONFIG_HOME/local/share"
export XDG_CACHE_HOME="$XDG_CONFIG_HOME/cache"
export EDITOR="nvim"
export VISUAL="nvim"

	# - Keep 100000  lines of history within the shell and save it to ~/.zsh_history:
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=1000000
SAVEHIST=${HISTSIZE}

zstyle ':completion:*' use-cache on
zstyle ':completion:*' cache-path ~/.zsh/cache
zstyle ':completion:*:(all-|)files' ignored-patterns '(|*/)CVS'
zstyle ':completion:*:cd:*' ignored-patterns '(*/)#CVS'
zstyle ':completion:*' completer _complete _match _approximate
zstyle ':completion:*:match:*' original only
zstyle ':completion:*:approximate:*' max-errors 1 numeric
zstyle ':completion:*:functions' ignored-patterns '_*'
zstyle ':completion:*:*:xdvi:*' menu yes select
zstyle ':completion:*:*:xdvi:*' file-sort time
zstyle ':completion:*:*:kill:*' menu yes select
zstyle ':completion:*:kill:*'   force-list always
zstyle ':completion:*:cd:*' ignore-parents parent pwd
zstyle ':completion:*' squeeze-slashes true

rationalise-dot() {
  if [[ $LBUFFER = *.. ]]; then
    LBUFFER+=/..
  else
    LBUFFER+=.
  fi
}
zle -N rationalise-dot
bindkey . rationalise-dot

xdvi() { 
	command xdvi ${*:-*.dvi(om[1])} 
}

	# - Job Control
#unsetopt	listambiguous
setopt		appendhistory
setopt		menu_complete
setopt		complete_aliases
setopt		BANG_HIST                 # Treat the '!' character specially during expansion.
setopt 		EXTENDED_HISTORY          # Write the history file in the ":start:elapsed;command" format.
setopt 		INC_APPEND_HISTORY        # Write to the history file immediately, not when the shell exits.
setopt 		SHARE_HISTORY             # Share history between all sessions.
setopt		HIST_EXPIRE_DUPS_FIRST    # Expire duplicate entries first when trimming history.
setopt 		HIST_IGNORE_DUPS          # Don't record an entry that was just recorded again.
setopt 		HIST_IGNORE_ALL_DUPS      # Delete old recorded entry if new entry is a duplicate.
setopt 		HIST_FIND_NO_DUPS         # Do not display a line previously found.
#setopt 	HIST_IGNORE_SPACE         # Don't record an entry starting with a space.
setopt 		HIST_SAVE_NO_DUPS         # Don't write duplicate entries in the history file.
#setopt 	HIST_REDUCE_BLANKS        # Remove superfluous blanks before recording entry.
#setopt 	HIST_VERIFY               # Don't execute immediately upon history expansion.
#setopt 	HIST_BEEP                 # Beep when accessing nonexistent history.
#setopt		notify
#setopt		auto_list
#setopt		autocd				# change directory just by typing its name
#setopt		correct				# auto correct mistakes
#setopt		interactivecomments		# allow comments in interactive mode
#setopt		magicequalsubst			# enable filename expansion for arguments of the form ‘anything=expression’
#setopt		nonomatch			# hide error message if there is no match for the pattern
#setopt		notify				# report the status of background jobs immediately
#setopt		numericglobsort			# sort filenames numerically when it makes sense
#setopt		promptsubst			# enable command substitution in prompt

##################################################
  ###  ~~~~~~~~~~~~ Bindkeys  ~~~~~~~~~~~~   ###
##################################################
	# Use emacs keybindings even if our EDITOR is set to vi
bindkey -e

bindkey '^[[1;5C'               forward-word                            # [ Ctrl + Right ] => Move forward one word
bindkey '^[[1;5D'               backward-word                           # [ Ctrl + Left ] => Move backward one word
bindkey "^[[H"                  beginning-of-line                       # [ Fn + Left ] => Move to beginning of line
bindkey "^[[F"                  end-of-line                             # [ Fn + Right ] => Move to end of line
bindkey '^[[3~'                 kill-word                               # [ Fn + Delete ] => Kill the word fordward
bindkey '^H'                    _backward-kill-word                     # [ Ctrl + Delete ] => Kill the word backward
#bindkey ''                     _backward-kill-arg                      #
#bindkey ''                     _backward-arg                           #
#bindkey ''                     _forward-arg                            #
#bindkey ''                     _forward-kill-arg                       #
#bindkey ''                     _forward-kill-arg                       #
#bindkey ''                     copy-prev-shell-word                    # [ Alt + k ] => Copy previous word
#bindkey ''                     _backward-kill-path                     #
#bindkey -M menuselect ''       accept-and-infer-next-history           # [ Alt + y ] => ??
#bindkey -M isearch ''          accept-search                           # [ ?? ]
#bindkey '^[[A'                  up-line-or-history                      # [Arrow Up]
#bindkey '^[[B'                  down-line-or-history                    # [Arrow Down]
#bindkey '^[[6~'                 end-of-buffer-or-history                # page down
#bindkey '^[[5~'                 beginning-of-buffer-or-history          # page up
#bindkey '^g'					 clear-screen							# [ Ctrl + g ] => clear screen
#bindkey '^['                    undo                                    # [ Alt +  ] => Undo last action

bindkey -s	'^[o' '|grep -Ei "'				# [ Alt + g ] => Pipes to grep + search
bindkey -s	'^[p' '|xclip -sel clip\n'		# [ Alt + o ] => Saves to clipboard
bindkey -s	'^[' '\n'						# [  +  ] => 

bindkey '\e ' autosuggest-accept
autoload -Uz compinit && compinit -C
bindkey '^I' complete-word

        # Allow Ctrl-z to toggle between suspend and resume
function Resume() {
	fg
	zle push-input
	BUFFER=""
	zle accept-line
}
zle -N Resume
bindkey "^Z" Resume

	# want to make Enter always submit the command line, use the following:
autoload edit-command-line;            zle -N edit-command-line
bindkey '^e'                           edit-command-line               # [ ctrl-e ] => Edit line in vim
autoload -Uz copy-prev-shell-word;     zle -N copy-earlier-word
#autoload -Uz compinit && compinit -C

zmodload zsh/complist
function accept-and-complete-next-history() {
    zle expand-or-complete-prefix
}
zmodload zsh/complist

# Load Git completion
zstyle ':completion:*:*:git:*' script ~/.antigen/bundles/robbyrussell/oh-my-zsh/plugins/gitfast/git-completion.bash
fpath=(~/.zsh* $fpath; ~/.antigen $fpath)

zle -N zle-keymap-select


zle-line-init() {
  if [[ "$ZLE_LOCAL_HISTORY_SET" != "1" ]]; then
    ZLE_LOCAL_HISTORY_SET=1
    zle set-local-history 1
  fi
}
zle -N zle-line-init


## Page UP and Page Down through History
autoload -U history-search-end
zle -N history-beginning-search-backward-end history-search-end
zle -N history-beginning-search-forward-end history-search-end
bindkey "^[[A" history-beginning-search-backward-end
bindkey "^[[B" history-beginning-search-forward-end
bindkey "^[[A" history-beginning-search-backward
bindkey "^[[B" history-beginning-search-forward

# Cycle through history based on characters already typed on the line
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "$key[Up]" up-line-or-beginning-search
bindkey "$key[Down]" down-line-or-beginning-search

function _backward-word()			{ _zle-with-style backward-word				bash }
function _forward-word()			{ _zle-with-style forward-word				bash }
function _backward-arg()			{ _zle-with-style backward-word				shell }
function _forward-arg()				{ _zle-with-style forward-word				shell }
function _backward-kill-arg()		{ _zle-with-style backward-kill-word		shell }
function _forward-kill-arg()		{ _zle-with-style kill-word					shell }
function _backward-kill-word()		{ _zle-with-style backward-kill-word		normal }
function _backward-kill-path()		{ _zle-with-style backward-kill-word		normal	'/' }

zle -N _backward-word
zle -N _forward-word
zle -N _backward-arg
zle -N _forward-arg
zle -N _backward-kill-arg
zle -N _forward-kill-arg
zle -N _backward-kill-word
zle -N _backward-kill-path

	# - Quickly jump right after the first word (e.g. to insert switches)
function _after-first-word() {
	zle beginning-of-line
	zle forward-word
}
zle -N _after-first-word
bindkey '\C-X1' _after-first-word

	# - Extended word movements/actions
autoload -Uz select-word-style
function _zle-with-style() {
	setopt localoptions
	unsetopt warn_create_global
	local style
	[[ -n "$3" ]] && WORDCHARS=${WORDCHARS/$3}
	[[ $BUFFER = '^\s+$' ]] && style=shell || style=$2
	select-word-style $style
	zle $1
	[[ -n "$3" ]] && WORDCHARS="${WORDCHARS}${3}"
	select-word-style normal
}
zle -N select-word-style

up-line-or-local-history() {
    zle set-local-history 1
    zle up-line-or-history
    zle set-local-history 0
}
zle -N up-line-or-local-history
down-line-or-local-history() {
    zle set-local-history 1
    zle down-line-or-history
    zle set-local-history 0
}
zle -N down-line-or-local-history

bindkey '^[OA' up-line-or-history				# Cursor up
bindkey '^[OB' down-line-or-history				# Cursor down
bindkey '^[[1;5A' up-line-or-local-history		# [CTRL] + Cursor up
bindkey '^[[1;5B' down-line-or-local-history	# [CTRL] + Cursor down


function _delete-char-or-region() {
        [[ $REGION_ACTIVE -eq 1 ]] && zle kill-region || zle delete-char}
zle -N _delete-char-or-region

        # - Allow more powerful history-i-search (multiple uses in the same line)
autoload -Uz narrow-to-region
function _history-incremental-preserving-pattern-search-backward() {
        local state tmp
        MARK=CURSOR  # magick, else multiple ^R don't work
        narrow-to-region -p "$LBUFFER${BUFFER:+>>}" -P "${BUFFER:+<<}$RBUFFER" -S state
        zle end-of-history
        zle history-incremental-pattern-search-backward
        narrow-to-region -R state
}
zle -N _history-incremental-preserving-pattern-search-backward
bindkey '^r' _history-incremental-preserving-pattern-search-backward
bindkey -M isearch '^r' history-incremental-pattern-search-backward
bindkey '^s' history-incremental-pattern-search-forward


autoload -Uz vcs_info
precmd() {
  vcs_info
  # Format the vcs_info_msg_0_ variable
  zstyle ":vcs_info:git:*" formats "(%b) "

  echo -e -n "\x1b[\x33 q"
  PROMPT="%B%1~ $%b %F{004}${vcs_info_msg_0_}%f> "
  RPROMPT=" %F{005}%T%f"
}

autoload -Uz add-zsh-hook
function _update_vcs_info_msg() {
    psvar=()
    LANG=en_US.UTF-8 vcs_info
    [[ -n "$vcs_info_msg_0_" ]] && psvar[1]="$vcs_info_msg_0_"
}
add-zsh-hook precmd _update_vcs_info_msg

# Change cursor shape for different vi modes.
function zle-keymap-select {
  if [[ ${KEYMAP} == vicmd ]] ||
     [[ $1 = 'block' ]]; then
    echo -ne '\e[1 q'
  elif [[ ${KEYMAP} == main ]] ||
       [[ ${KEYMAP} == viins ]] ||
       [[ ${KEYMAP} = '' ]] ||
       [[ $1 = 'beam' ]]; then
    echo -ne '\e[5 q'
  fi
}
zle -N zle-keymap-select

#zstyle ':completion:*' auto-description 'specify: %d'
#zstyle ':completion:*' completer _expand _complete _correct _approximate
#zstyle ':completion:*' format 'Completing %d'
#zstyle ':completion:*' group-name ''
#zstyle ':completion:*' menu select long
#eval "$(dircolors -b)"
#zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
#zstyle ':completion:*' list-colors ''
#zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
#zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
#zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
#zstyle ':completion:*' use-compctl false
#zstyle ':completion:*' verbose true
#zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
#zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

# or to have a better heuristic, by allowing one error per 3 character typed
# zstyle ':completion:*:approximate:*' max-errors 'reply=( $(( ($#PREFIX+$#SUFFIX)/3 )) numeric )'
# ZSH case insensitive path-completion
# zstyle ':completion:*' matcher-list \
# 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*' \
# 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*'
# zstyle ':completion:*'			file-list		all
# zstyle ':autocomplete:*complete*:*'	insert-unambiguous	yes		# all Tab widgets
# zstyle ':autocomplete:*history*:*'	insert-unambiguous	yes		# all history widgets
# zstyle ':autocomplete:menu-search:*'	insert-unambiguous	yes		# ^S
# Start each new line in history search mode
# zstyle ':autocomplete:*'		default-context history-incremental-search-backward
# Wait with autocompletion until typing stops for a certain amount of seconds
# zstyle ':autocomplete:*'		min-delay 0.05  # seconds (float)
# on't show completion for current word, if it consists of two or more dots
# zstyle ':autocomplete:*'		ignored-input '..##'
# Normally, Autocomplete will try to one half of the terminal's height with results, \
# be it completions, the history menu or history search. \
# You can change this number of lines overall or for each of these individually:
# Set the value for all.
# zstyle -e ':autocomplete:*'				list-lines	'reply=( $(( LINES / 10 )) )'
# Override autocompletion.
# zstyle -e ':autocomplete:list-choices:*'		list-lines	'reply=( $(( LINES / 3 )) )'
# Override history menu.
# zstyle ':autocomplete:history-search-backward:*'	list-lines 16
# Override history search.
# zstyle ':autocomplete:history-incremental-search-backward:*' list-lines 16

##################################################
 ###  ~~~~~~~~~~~~~~~~ Plugins ~~~~~~~~~~~~   ###
##################################################

antigen bundles <<EOBUNDLES
	git
	pip
	gem
	npm
	sublime
	python
	command-not-found
	unixorn/fzf-zsh-plugin@main
	zsh-users/zsh-syntax-highlighting
	zsh-users/zsh-autosuggestions
	zsh-users/zsh-completions
	leophys/zsh-plugin-fzf-finder
	zsh-users/zsh-history-substring-search ./zsh-history-substring-search.zsh
	ael-code/zsh-colored-man-pages
EOBUNDLES

antigen theme romkatv/powerlevel10k
	# - Tell Antigen that you're done.
antigen apply
source	~/.antigen/bundles/zsh-users/zsh-completions
source	~/.antigen/bundles/zsh-users/zsh-autosuggestions
source	~/.antigen/bundles/zsh-users/zsh-syntax-highlighting

export ZSHSELECT_BOLD="1"                   # The interface will be drawn in bold font. Use "0" for no bold
export ZSHSELECT_PAIR="white/black"   		# Draw in white foreground, black background. Try e.g.: "white/green"
export ZSHSELECT_BORDER="0"					# No border around interface, Use "1" for the border
export ZSHSELECT_ACTIVE_TEXT="reverse"		# Mark current element with reversed text. Use "underline" for marking with underline
export ZSHSELECT_START_IN_SEARCH_MODE="1"	# Starts Zsh-Select with searching active. "0" will not invoke searching at start.

	# - Zsh autosuggestion settings
ZSH_AUTOSUGGEST_STRATEGY=(history completion)
AUTOSUGGESTION_ACCEPT_RIGHT_ARROW=1

	# - Enable auto-suggestions based on the history
if [ -f ~/.zsh/antigen/bundles/zsh-users/zsh-autosuggestions/zsh-autosuggestions.zsh ]; then
	. ~/.zsh/antigen/bundles/zsh-users/zsh-autosuggestions/zsh-autosuggestions.zsh
	# - Change suggestion color
	ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=#539775,bold'
fi

	# - Enable syntax-highlighting
if [ -f .zsh/antigen/bundles/zsh-users/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh ] && [ "$prompt" = yes ]; then
	.zsh/antigen/bundles/zsh-users/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
	ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets pattern)
	ZSH_HIGHLIGHT_STYLES[default]=none
	ZSH_HIGHLIGHT_STYLES[unknown-token]=fg=red,bold
	ZSH_HIGHLIGHT_STYLES[reserved-word]=fg=cyan,bold
	ZSH_HIGHLIGHT_STYLES[suffix-alias]=fg=green,underline
	ZSH_HIGHLIGHT_STYLES[global-alias]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[precommand]=fg=green,underline
	ZSH_HIGHLIGHT_STYLES[commandseparator]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[autodirectory]=fg=green,underline
	ZSH_HIGHLIGHT_STYLES[path]=underline
	ZSH_HIGHLIGHT_STYLES[path_pathseparator]=
	ZSH_HIGHLIGHT_STYLES[path_prefix_pathseparator]=
	ZSH_HIGHLIGHT_STYLES[globbing]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[history-expansion]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[command-substitution]=none
	ZSH_HIGHLIGHT_STYLES[command-substitution-delimiter]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[process-substitution]=none
	ZSH_HIGHLIGHT_STYLES[process-substitution-delimiter]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[single-hyphen-option]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[double-hyphen-option]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[back-quoted-argument]=none
	ZSH_HIGHLIGHT_STYLES[back-quoted-argument-delimiter]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[single-quoted-argument]=fg=yellow
	ZSH_HIGHLIGHT_STYLES[double-quoted-argument]=fg=yellow
	ZSH_HIGHLIGHT_STYLES[dollar-quoted-argument]=fg=yellow
	ZSH_HIGHLIGHT_STYLES[rc-quote]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[dollar-double-quoted-argument]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[back-double-quoted-argument]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[back-dollar-quoted-argument]=fg=magenta
	ZSH_HIGHLIGHT_STYLES[assign]=none
	ZSH_HIGHLIGHT_STYLES[redirection]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[comment]=fg=black,bold
	ZSH_HIGHLIGHT_STYLES[named-fd]=none
	ZSH_HIGHLIGHT_STYLES[numeric-fd]=none
	ZSH_HIGHLIGHT_STYLES[arg0]=fg=green
	ZSH_HIGHLIGHT_STYLES[bracket-error]=fg=red,bold
	ZSH_HIGHLIGHT_STYLES[bracket-level-1]=fg=blue,bold
	ZSH_HIGHLIGHT_STYLES[bracket-level-2]=fg=green,bold
	ZSH_HIGHLIGHT_STYLES[bracket-level-3]=fg=magenta,bold
	ZSH_HIGHLIGHT_STYLES[bracket-level-4]=fg=yellow,bold
	ZSH_HIGHLIGHT_STYLES[bracket-level-5]=fg=cyan,bold
	ZSH_HIGHLIGHT_STYLES[cursor-matchingbracket]=standout
fi
	# Path
PATH=/root/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games



