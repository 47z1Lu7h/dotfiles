######################################################################
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
	###############  ~~~~~~~~~~~~~~~~ ¡| Start~Up Speed~Up & t4b's name |! ~~~~~~~~~~~~ ###############
#####################################################################################################################
# Execute code in the background to not affect the current session
{
# Compile zcompdump, if modified, to increase startup speed.
zcompdump="${ZDOTDIR:-$HOME}/.zcompdump"
    if [[ -s "$zcompdump" && (! -s "${zcompdump}.zwc" || "$zcompdump" -nt "${zcompdump}.zwc") ]]; then
      zcompile "$zcompdump"
    fi
} &!

	# Display last command interminal
echo -en "\e]2;   \a"
preexec () { print -Pn "\e]0;$1 -   \a" }

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
	    ##############  ~~~~~~~~~~~~~~~~ ¡|  b453  &  B1nK3yS  |! ~~~~~~~~~~~~   ###############
#####################################################################################################################

	# Job Control
setopt	notify
setopt	appendhistory
setopt	menu_complete
setopt	complete_aliases
setopt	no_list_ambiguous

	# - Use modern completion system
autoload -U select-word-style
select-word-style bash
zle -N zle-keymap-select
zmodload -i zsh/complist
autoload -Uz compinit
compinit -d ~/.cache/zcompdump

	# ~~>  Mixing zsh-autocomplete and zsh-autosuggestions
zstyle ':autocomplete:tab:*' insert-unambiguous yes
zstyle ':autocomplete:tab:*' widget-style menu-select
zstyle ':autocomplete:*' min-input 2
zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
zstyle ':completion:*' menu yes select
zstyle ':completion:*' menu select=4

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
zstyle :compinstall filename '~/.zshrc'

	# Keybindings
bindkey -e					# emacs key bindings
bindkey ' ' magic-space				# Do history expansion on space

bindkey $key[Up] up-line-or-history
bindkey $key[Down] down-line-or-history

bindkey '^i' expand-or-complete-prefix		# Bind tab
bindkey '^[s' menu-complete			# [ Alt + s ]   Bind alt-s to menu-complete
bindkey '^n' expand-or-complete			# [ Ctrl + n ]    Expand menu
bindkey '^p' reverse-menu-complete		# [ Ctrl + p ]   Reverse menu

bindkey '^[[1;5C' forward-word			# [ Ctrl + Right ] -> Move one word fordward
bindkey '^[[1;5D' backward-word 		# [ Ctrl + Left ] -> Move one word backward
bindkey '^[[H' beginning-of-line		# [ Fn + Right ]   Move to Beginning of line
bindkey '^[[F' end-of-line			# [ Fn + Right ]   Move to End of line

bindkey '^H' backward-kill-word			# [ Ctrl + Delete ]   Delete the whole word backward
bindkey '^U' backward-kill-line			# [ Alt + q ]    Delete the whole Line backward
bindkey '^[[3~' delete-word			# [ Fn + Delete ]   Delete the whole word backward
bindkey '^[[Z' undo				# [ Shift + Tab ]   Undo last action

bindkey -s '^[o' "|xclip -sel clip\n"		# [ Alt + o ]   Saves to clipboard
bindkey -s '^[g' "|grep -Ei \"\n"		# [ Alt + g ]   Pipes to grep
bindkey -s '^[p' "|batcat -ljava -p \n"		# [ Alt + p ]   Pipes to less (java colors, no borders)

bindkey '^[[5~' beginning-of-buffer-or-history	# page up
bindkey '^[[6~' end-of-buffer-or-history	# page down

	# Use the vi navigation keys in menu completion
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -M menuselect 'j' vi-down-line-or-history

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


#####################################################################################################################
            ############  ~~~~~~~~~~~~~~~~ ¡| Plugins & Cu5t@m Aliases & functions |! ~~~~~~~~~~~~   ############
#####################################################################################################################
source ~/.zsh/m1sc.zsh
source ~/.zsh/misc.zsh
source ~/.zsh/aliases.zsh
source ~/.zsh/functions.zsh
source /usr/share/zsh/sudo.plugin.zsh
source /usr/share/zsh/powerlevel10k/powerlevel10k.zsh-theme
source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh-fzf-history-search/zsh-fzf-history-search.plugin.zsh

 export FUZZ=/usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
 export DNS=/usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt
 export r0CkT0u=/usr/share/wordlists/rockyou.txt
