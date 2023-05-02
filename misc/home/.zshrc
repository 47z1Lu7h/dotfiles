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

	# - Display last command
echo -en "\e]2;   \a"
preexec () { print -Pn "\e]0;$1 -  \a" }

	# - Use modern completion system
autoload -Uz compinit
compinit
autoload -U select-word-style
select-word-style bash
export WORDCHARS='.-'

	# - Keep 100000  lines of history within the shell and save it to ~/.zsh_history:
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=1000000
SAVEHIST=${HISTSIZE}

	# Set up the prompt
autoload -Uz promptinit
promptinit

zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu select=4
eval "$(dircolors -b)"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'
zstyle ':completion:*' menu select=short
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle ':completion:*' use-compctl false
zstyle ':completion:*' verbose true

zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

	# Path
PATH=/root/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games

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
#setopt 	HIST_IGNORE_DUPS          # Don't record an entry that was just recorded again.
#setopt 	HIST_IGNORE_ALL_DUPS      # Delete old recorded entry if new entry is a duplicate.
#setopt 	HIST_FIND_NO_DUPS         # Do not display a line previously found.
#setopt 	HIST_IGNORE_SPACE         # Don't record an entry starting with a space.
#setopt 	HIST_SAVE_NO_DUPS         # Don't write duplicate entries in the history file.
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
bindkey '^[[A'                  up-line-or-history                      # [Arrow Up]
bindkey '^[[B'                  down-line-or-history                    # [Arrow Down]
bindkey '^[[6~'                 end-of-buffer-or-history                # page down
bindkey '^[[5~'                 beginning-of-buffer-or-history          # page up

bindkey '^[z'                   undo                                    # [ Alt + z ] => Undo last action
bindkey -s '^[i' '|grep -Ei "'                                          # [ Alt + g ] => Pipes to grep + search
bindkey -s '^[o' '|xclip -sel clip\n'                                   # [ Alt + o ] => Saves to clipboard
bindkey -s '^[p' '|less | batcat -ljava\n'				# [ Alt + p ] => Pipes to less & batcat java colors
bindkey  	# [ Alt + ¿? ] =>
bindkey  	# [ Alt + ¿? ] =>

bindkey '\e ' autosuggest-accept
autoload -Uz compinit && compinit -C
bindkey '^I' complete-word

# want to make Enter always submit the command line, use the following:
autoload edit-command-line;            zle -N edit-command-line
bindkey '^e'                           edit-command-line               # [ ctrl-e ] => Edit line in vim
autoload -Uz copy-prev-shell-word;     zle -N copy-earlier-word
autoload -Uz compinit && compinit -C
bindkey '^I' complete-word

zmodload zsh/complist
function accept-and-complete-next-history() {
    zle expand-or-complete-prefix
}
zmodload zsh/complist

# Load Git completion
zstyle ':completion:*:*:git:*' script ~/.zsh/git-completion.bash
fpath=(~/.zsh $fpath)

#utoload -Uz compinit && compinit

zle -N zle-keymap-select

autoload -Uz +X compinit && compinit
zmodload -i zsh/complist

bindkey "${key[Up]}" up-line-or-local-history
bindkey "${key[Down]}" down-line-or-local-history

# Cycle through history based on characters already typed on the line
autoload -Uz history-search-end
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "$key[Up]" up-line-or-beginning-search
bindkey "$key[Down]" down-line-or-beginning-search

## Page UP and Page Down through History
#zle -N history-beginning-search-backward-end \
#                history-search-end
#zle -N history-beginning-search-forward-end \
#                history-search-end
#bindkey "\e[5~" history-beginning-search-backward-end
#bindkey "\e[6~" history-beginning-search-forward-end
#
#up-line-or-local-history() {
#    zle set-local-history 1
#    zle up-line-or-history
#    zle set-local-history 0
#}
#zle -N up-line-or-local-history

#down-line-or-local-history() {
#    zle set-local-history 1
#    zle down-line-or-history
#    zle set-local-history 0
#}
#zle -N down-line-or-local-history

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

export ZSHSELECT_BOLD="1"                   	# The interface will be drawn in bold font. Use "0" for no bold
export ZSHSELECT_PAIR="white/black"   		# Draw in white foreground, black background. Try e.g.: "white/green"
export ZSHSELECT_BORDER="0"			# No border around interface, Use "1" for the border
export ZSHSELECT_ACTIVE_TEXT="reverse"		# Mark current element with reversed text. Use "underline" for marking with underline
export ZSHSELECT_START_IN_SEARCH_MODE="1"	# Starts Zsh-Select with searching active. "0" will not invoke searching at start.

	# - Enable command-not-found if installed
if [ -f /etc/zsh_command_not_found ]; then
    . /etc/zsh_command_not_found
fi

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


