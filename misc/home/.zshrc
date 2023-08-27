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

#####################################################################################################################
	###############  ~~~~~~~~~~~~~~~~ ¡| Start~Up Speed~Up |! ~~~~~~~~~~~~ ###############
#####################################################################################################################
# Execute code in the background to not affect the current session
{
# Compile zcompdump, if modified, to increase startup speed.
zcompdump="${ZDOTDIR:-$HOME}/.zcompdump"
    if [[ -s "$zcompdump" && (! -s "${zcompdump}.zwc" || "$zcompdump" -nt "${zcompdump}.zwc") ]]; then
      zcompile "$zcompdump"
    fi
} &!

#####################################################################################################################
     ######################  ~~~~~~~~~~~~~~~~ ¡| Powerlevel promt |! ~~~~~~~~~~~~   ###########################
#####################################################################################################################
	# Enable Powerlevel10k instant prompt. Should stay at the top of ~/.zshrc.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"; fi
	# - To customize prompt, run `p10k configure` or edit ~/.p10k.zsh
[[ -f /$HOME/.p10k.zsh ]] && source /$HOME/.p10k.zsh
	# - T@ cU5t@m1z3 p5@mTt, 5Un `p10k c@nf16Ur3` @r 3D1t ~/.p10K.z5h
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
	# - Take off rubbish of p10k
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet
typeset -g POWERLEVEL9K_INSTANT_PROMPT=off

#####################################################################################################################
     ######################  ~~~~~~~~~~~~~~~~ ¡| l0t of c0l05S|! ~~~~~~~~~~~~   ###########################
#####################################################################################################################
	# ~ c@lRs
export end='\033[0m'		# Text Reset
export italic=''
export line="\e[4m;\e[0m"
export tachado="\e[9m;\e[0m"

export black='\033[0;30m'        # black
export red='\033[0;31m'          # red
export green='\033[0;32m'        # green
export yellow='\033[0;33m'       # yellow
export blue='\033[0;34m'         # blue
export purple='\033[0;35m'       # purple
export cyan='\033[0;36m'         # cyan
export white='\033[0;37m'        # white

	# Underline
export Ublack='\033[4;30m'       # black
export Ured='\033[4;31m'         # red
export Ugreen='\033[4;32m'       # green
export Uyellow='\033[4;33m'      # yellow
export Ublue='\033[4;34m'        # blue
export Upurple='\033[4;35m'      # purple
export Ucyan='\033[4;36m'        # cyan
export Uwhite='\033[4;37m'       # white

	# Bold
export Bblack='\033[1;30m'       # black
export Bred='\033[1;31m'         # red
export Bgreen='\033[1;32m'       # green
export Byellow='\033[1;33m'      # yellow
export Bblue='\033[1;34m'        # blue
export Bpurple='\033[1;35m'      # purple
export Bcyan='\033[1;36m'        # cyan
export Bwhite='\033[1;37m'       # white

	# High Intensity
export Iblack='\033[0;90m'       # black
export Ired='\033[0;91m'         # red
export Igreen='\033[0;92m'       # green
export Iyellow='\033[0;93m'      # yellow
export Iblue='\033[0;94m'        # blue
export Ipurple='\033[0;95m'      # purple
export Icyan='\033[0;96m'        # cyan
export Iwhite='\033[0;97m'       # white

	# Bold High Intensity
export BIblack='\033[1;90m'      # black
export BIred='\033[1;91m'        # red
export BIgreen='\033[1;92m'      # green
export BIyellow='\033[1;93m'     # yellow
export BIblue='\033[1;94m'       # blue
export BIpurple='\033[1;95m'     # purple
export BIcyan='\033[1;96m'       # cyan
export BIwhite='\033[1;97m'      # white

	# Background
export On_black='\033[40m'       # black
export On_red='\033[41m'         # red
export On_green='\033[42m'       # green
export On_yellow='\033[43m'      # yellow
export On_blue='\033[44m'        # blue
export On_purple='\033[45m'      # purple
export On_cyan='\033[46m'        # cyan
export On_white='\033[47m'       # white

	# High Intensity backgrounds
export On_Iblack='\033[0;100m'   # black
export On_Ired='\033[0;101m'     # red
export On_Igreen='\033[0;102m'   # green
export On_Iyellow='\033[0;103m'  # yellow
export On_Iblue='\033[0;104m'    # blue
export On_Ipurple='\033[0;105m'  # purple
export On_Icyan='\033[0;106m'    # cyan
export On_Iwhite='\033[0;107m'   # white

#####################################################################################################################
	    ###############  ~~~~~~~~~~~~~~~~ ¡| Tabs default name |! ~~~~~~~~~~~~   #############
#####################################################################################################################
	# Display last command interminal
echo -en "\e]2;   \a"
preexec () { print -Pn "\e]0;$1 -   \a" }

#####################################################################################################################
            ############  ~~~~~~~~~~~~~~~~ ¡| Cu5t@m Aliases & functions |! ~~~~~~~~~~~~   ############
#####################################################################################################################

if [ -f ~/.zsh/aliases.zsh ]; then
	source ~/.zsh/aliases.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}󰭄 \t${Iblack}${BIcyan} aliases.zsh ${red}${BIred} \n"
fi

if [ -f ~/.zsh/functions.zsh ]; then
	source ~/.zsh/functions.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}󰭄 \t${Iblack}${BIcyan} functions.zsh ${red}${BIred} \n\n"
fi

#####################################################################################################################
	    ###################  ~~~~~~~~~~~~~~~~ ¡|  |! ~~~~~~~~~~~~   #######################
#####################################################################################################################
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
setopt	HIST_redUCE_BLANKS        # Remove superfluous blanks before recording entry.
setopt	HIST_VERIFY               # Don't execute immediately upon history expansion.

	# Use modern completion system
autoload -U select-word-style
select-word-style bash
#autoload -Uz compinit promptinit bashcompinit
#compinit
#promptinit
#bashcompinit
zle -N zle-keymap-select
zmodload -i zsh/complist

	# ~~>  Mixing zsh-autocomplete and zsh-autosuggestions
zstyle ':autocomplete:tab:*' insert-unambiguous yes
zstyle ':autocomplete:tab:*' widget-style menu-select
zstyle ':autocomplete:*' min-input 2
zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu yes select
zstyle ':completion:*' menu select=2

eval "$(dircolors -b)"
zstyle ':completion:*:default' list-colors ${(s.:.)LS_COLORS}
zstyle ':completion:*' list-colors ''
zstyle ':completion:*' list-prompt %SAt %p: Hit TAB for more, or the character to insert%s
zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r3:|=* l:|=*'
zstyle ':completion:*' menu select=short
zstyle ':completion:*' select-prompt %SScrolling active: current selection at %p%s
zstyle ':completion:*' use-compctl false
zstyle ':completion:*' verbose true
zstyle ':completion:*:*:kill:*:processes' list-colors '=(#b) #([0-9]#)*=0=01;31'
zstyle ':completion:*:kill:*' command 'ps -u $USER -o pid,%cpu,tty,cputime,cmd'

	# Job Control
setopt	notify
setopt	appendhistory
setopt	menu_complete
setopt	complete_aliases

#####################################################################################################################
    ###################  ~~~~~~~~~~~~~~~~ ¡| B1nK3yS |! ~~~~~~~~~~~~   #######################
#####################################################################################################################
	# Keybindings
bindkey -e					# emacs key bindings
bindkey ' ' magic-space				# Do history expansion on space

bindkey $key[Up] up-line-or-history
bindkey $key[Down] down-line-or-history

bindkey '^[[1;5C' forward-word			# [ Ctrl + Right ] -> Move one word fordward
bindkey '^[[1;5D' backward-word 		# [ Ctrl + Left ] -> Move one word backward
bindkey '^[[H' beginning-of-line		# [ Fn + Right ]   Move to Beginning of line
bindkey '^[[F' end-of-line			# [ Fn + Right ]   Move to End of line

bindkey '^H' backward-kill-word			# [ Ctrl + Delete ]   Delete the whole word backward
bindkey '^U' backward-kill-line			# [ Alt + q ]    Delete the whole Line backward
#bindkey '^[[3;5~'  forward-kill-word		# [ Ctrl + Supr ]   b
bindkey '^[[3~' delete-word			# [ Fn + Delete ]   Delete the whole word backward

bindkey '^[[Z' undo				# [ Shift + Tab ]   Undo last action

bindkey -s '^[o' "|xclip -sel clip\n"		# [ Alt + o ] Saves to clipboard
bindkey -s '^[g' "|grep -Ei \"\n"		# [ Alt + g ] Pipes to grep
bindkey -s '^[p' "|batcat -ljava -p \n"		# [ Alt + p ] Pipes to less (java colors, no borders)

bindkey '^[[5~' beginning-of-buffer-or-history	# page up
bindkey '^[[6~' end-of-buffer-or-history	# page down

#####################################################################################################################
   	        ###################  ~~~~~~~~~~~~~~~~ ¡| m15c |! ~~~~~~~~~~~~   ##################
#####################################################################################################################
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

#precmd() {
#  vcs_info
  # Format the vcs_info_msg_0_ variable
#  zstyle ":vcs_info:git:*" formats "(%b) "
#
#  echo -e -n "\x1b[\x33 q"
#  PROMPT="%B%1~ $%b %F{004}${vcs_info_msg_0_}%f> "
#  RPROMPT=" %F{005}%T%f"
#}

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


#autoload -Uz +X compinit && compinit
#autoload -Uz +X bashcompinit && bashcompinit
#autoload -Uz +X promptinit && promptinit
#zmodload -i zsh/complist

#####################################################################################################################
        ###################  ~~~~~~~~~~~~~~~~ ¡| autosuggestions |! ~~~~~~~~~~~~   #######################
#####################################################################################################################
	# - Zsh autosuggestion settings
ZSH_AUTOSUGGEST_STRATEGY=(history completion)
AUTOSUGGESTION_ACCEPT_RIGHT_ARROW=1

	# - Enable auto-suggestions based on the history
if [ -f .usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh ]; then
	.usr/share/zsh-autosuggestions.zsh/zsh-autosuggestions.zsh
	# - Change suggestion color
	ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=#539775,bold'
fi
#####################################################################################################################
        #################  ~~~~~~~~~~~~~~~~ ¡| syntax-highlighting |! ~~~~~~~~~~~~   #####################
#####################################################################################################################
	# - Enable syntax-highlighting
if [ -f /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh ] && [ "$prompt" = yes ]; then
    ./usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.plugin.zsh
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

#####################################################################################################################
         ######################  ~~~~~~~~~~~~~~~~ ¡| Plugins |! ~~~~~~~~~~~~   ###########################
#####################################################################################################################

if [ -f /usr/share/zsh/sudo.plugin.zsh ]; then
	source /usr/share/zsh/sudo.plugin.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} sudo.plugin${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
	sudo wget "https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/plugins/sudo/sudo.plugin.zsh" -P	/usr/share/zsh/
fi

if [ -d /usr/share/zsh/powerlevel10k ]; then
	source /usr/share/zsh/powerlevel10k/powerlevel10k.zsh-theme
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} Powerlevel10k ${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
	sudo git clone --depth=1 "https://github.com/romkatv/powerlevel10k.git"			/usr/share/zsh/powerlevel10k
fi

if [ -d /usr/share/zsh-syntax-highlighting ]; then
	source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} zsh-syntax-highlighting${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
	sudo git clone "https://github.com/zsh-users/zsh-syntax-highlighting.git"		/usr/share/zsh-syntax-highlighting
fi

if [ -d /usr/share/zsh-autosuggestions ]; then
	source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} zsh-autosuggestions ${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
        sudo git clone "https://github.com/zsh-users/zsh-autosuggestions"		/usr/share/zsh-autosuggestions
fi

if [ -d /usr/share/zsh-autocomplete ]; then
	source /usr/share/zsh-autocomplete/zsh-autocomplete.plugin.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} zsh-autocomplete${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
	sudo git clone --depth 1 -- "https://github.com/marlonrichert/zsh-autocomplete.git"	 /usr/share/zsh-autocomplete
fi

if [ -d /usr/share/zsh-fzf-history-search ]; then
	source /usr/share/zsh-fzf-history-search/zsh-fzf-history-search.plugin.zsh
else
	echo -ne "\n${Iblack} ${Igreen}󱡴  ${Iblack} ${Igreen}   ${Iblack}${Bblue} Missing${BIblue}! ${Iblack}\t󰭄 \t${Iblack}${BIcyan} zsh-fzf-history-search${red}${BIred} \n"
	echo -ne "\n\t\t${Iblack}${purple}  ${Iblack}\t󰭄 \t${Iblack}${blue} Proceeding to ${BIblue}clone ${blue}it${BIblue}󰈅  ${red}󰦹 ${red}󰦹 ${red}󰦹 \t${Icyan}\n"
	sudo git clone "https://github.com/joshskidmore/zsh-fzf-history-search"			/usr/share/zsh-fzf-history-search
fi
