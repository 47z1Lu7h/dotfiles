#####################################################################
# ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░  ░▒ ░▒ 
# ▄███████▄     ▄████████  ░▒▄█    █▄ ░  ░  ▄████████  ▄████████ ░ ▒ 
#██▀ ░▒  ▄██   ███  ░▒███ ░▒███ ░▒ ███  ░▒ ███    ███ ███    ███  ░ 
#   ░ ░▄███▀   ███    █▀ ░▒ ███    ███ ░▒  ███    ███ ███    █▀  ▒ ░ 
# ▀█▀▄███▀▄▄   ███ ░▒      ▄███▄▄▄▄███▄▄  ▄███▄▄▄▄██▀ ███  ░▒ ░▒  ░ 
#  ▄███ ░▒ ▀ ▀███████████ ▀▀███▀▀▀▀███▀  ▀▀███▀▀▀▀▀   ███ ░▒ ░  ░▒ ░ 
#▄███▀   ░▒  ░▒ ░▒░▒  ███ ░ ███ ░▒ ███   ▀███████████ ███    █▄░▒ ░ 
#███▄  ░▒ ▄█    ▄█ ░ ▒███   ███  ░ ███ ░ ▒ ███░  ░███ ███    ███  ░▒ 
# ▀████████▀  ▄████████▀░▒  ███░▒  █▀  ░▒  ███ ░  ███ ████████▀  ░▒ 
#▒ ░  ░▒ ░  ░    ▒ ░  ░▒ ░           ░ ░ ░███▒ ░ ███▒ ░  ░▒ ░ ░  ░ ░ 
# by ░░░  ░   ░▒ ░  ░  ░   47z!Lu7h   ▒ ░ ░   ░▒ ░   ░▒ ░   ░ :)  ░ 
#####################################################################
# Execute code in the background to not affect the current session
{
# Compile zcompdump, if modified, to increase startup speed.
zcompdump="${ZDOTDIR:-$HOME}/.zcompdump"
    if [[ -s "$zcompdump" && (! -s "${zcompdump}.zwc" || "$zcompdump" -nt "${zcompdump}.zwc") ]]; then
    zcompile "$zcompdump"
    fi
} &!

########################################################################################################
	# - c@lRs
export end='\033[0m'		# Text Reset
export italic='\e[3;\e[0m'
export line="\e[4m;\e[0m"
export tachado="\e[9m;\e[0m"

	# Regular Colors
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

########################################################################################################
	# Enable Powerlevel10k instant prompt. Should stay at the top of ~/.zshrc.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"; fi
	# - To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ -f /$HOME/.p10k.zsh ]] && source /$HOME/.p10k.zsh
	# - To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
	# - Take off rubbish of p10k
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet
typeset -g POWERLEVEL9K_INSTANT_PROMPT=off

########################################################################################################
	# Display last command interminal
echo -en "\e]2;   \a"
preexec () { print -Pn "\e]0;$1 -  \a" }

source /usr/share/zsh/functions.zsh
source	/usr/share/zsh/aliases.zsh

########################################################################################################
    # - Keep 1M lines of history within the shell and save it to ~/.zsh_history:
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=10000000
SAVEHIST=${HISTSIZE}

setopt	BANG_HIST                 # Treat the '!' character specially during expansion.
setopt	EXTENDED_HISTORY          # Write the history file in the ":start:elapsed;command" format.
setopt	INC_APPEND_HISTORY        # Write to the history file immediately, not when the shell exits.
setopt	SHARE_HISTORY             # Share history between all sessions.
setopt	HIST_EXPIRE_DUPS_FIRST    # Expire duplicate entries first when trimming history.
setopt 	HIST_IGNORE_DUPS          # Don't record an entry that was just recorded again.
setopt	HIST_IGNORE_ALL_DUPS      # Delete old recorded entry if new entry is a duplicate.
setopt	HIST_FIND_NO_DUPS         # Do not display a line previously found.
setopt	HIST_IGNORE_SPACE         # Don't record an entry starting with a space.
setopt	HIST_SAVE_NO_DUPS         # Don't write duplicate entries in the history file.
setopt	HIST_REDUCE_BLANKS        # Remove superfluous blanks before recording entry.
setopt	HIST_VERIFY               # Don't execute immediately upon history expansion.

	# Use modern completion system
autoload -U select-word-style
select-word-style bash
autoload -Uz compinit promptinit bashcompinit
compinit
promptinit
bashcompinit
zle -N zle-keymap-select
zmodload -i zsh/complist

	# Job Control
setopt	notify
setopt	appendhistory
setopt	menu_complete
setopt	complete_aliases

###########################################################################################################
    ###################  ~~~~~~~~~~~~~~~~ ¡| autosuggestions |! ~~~~~~~~~~~~   #######################
###########################################################################################################
	# ~~>  Mixing zsh-autocomplete and zsh-autosuggestions

zstyle ':autocomplete:tab:*' insert-unambiguous yes
zstyle ':autocomplete:tab:*' widget-style menu-select
zstyle ':autocomplete:*' min-input 2
zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
#zstyle ':completion:*' menu select=2

eval "$(dircolors -b)"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r3:|=* l:|=*'
zstyle ':completion:*' menu select=long
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle ':completion:*' use-compctl false
zstyle ':completion:*' verbose true
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

# Export PATH$
export PATH=~/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:$PATH
export PATH=~/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:$FPATH

###########################################################################################################
    ###################  ~~~~~~~~~~~~~~~~ ¡| B1nK3yS |! ~~~~~~~~~~~~   #######################
###########################################################################################################

###########################################################################################################
    ###################  ~~~~~~~~~~~~~~~~ ¡| m15c |! ~~~~~~~~~~~~   #######################
###########################################################################################################

    # ~> Auto ../../../
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

        # ~> Ctrl-z toggle between suspend and resume
function Resume() {
        fg
        zle push-input
        BUFFER=""
        zle accept-line
}
zle -N Resume
bindkey "^Z" Resume

precmd() {
  vcs_info
}

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
  if [[ $KEYMAP == vicmd ]] || [[ $1 = 'block' ]]; then
    echo -ne '\e[1 q'
  elif [[ $KEYMAP == main ]] || [[ $KEYMAP == viins ]] || [[ $KEYMAP = '' ]] || [[ $1 = 'beam' ]]; then
    echo -ne '\e[5 q'
  fi
}

	# - Enable command-not-found if installed
if [ -f /etc/zsh_command_not_found ]; then
    . /etc/zsh_command_not_found
fi

zmodload zsh/complist
function accept-and-complete-next-history() {
    zle expand-or-complete-prefix
}
zmodload zsh/complist

autoload -Uz +X compinit && compinit
autoload -Uz +X bashcompinit && bashcompinit
autoload -Uz +X promptinit && promptinit
zmodload -i zsh/complist

###########################################################################################################
    ###################  ~~~~~~~~~~~~~~~~ ¡| autosuggestions |! ~~~~~~~~~~~~   #######################
###########################################################################################################
	# - Zsh autosuggestion settings
ZSH_AUTOSUGGEST_STRATEGY=(history completion)
AUTOSUGGESTION_ACCEPT_RIGHT_ARROW=1

	# - Enable auto-suggestions based on the history
if [ -f .usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]; then
	.usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh/zsh-autosuggestions.zsh
	# - Change suggestion color
	ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=#539775,bold'
fi

	# - Enable syntax-highlighting
if [ -f /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh ] && [ "$prompt" = yes ]; then
    ./usr/sharezsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
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

###########################################################################################################
     ######################  ~~~~~~~~~~~~~~~~ ¡| Plugins |! ~~~~~~~~~~~~   ###########################
###########################################################################################################
source /usr/share/zsh/sudo.plugin.zsh
source /usr/share/zsh/powerlevel10k/powerlevel10k.zsh-theme
source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh-autocomplete/zsh-autocomplete.plugin.zsh
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh-fzf-history-searc/zsh-fzf-history-search.plugin.zsh
