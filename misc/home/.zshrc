# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
LIGHT_COLOR='base16-gruvbox-light-soft.yml'
DARK_COLOR='base16-gruvbox-dark-soft.yml'

# Paque Nose Pronuncie, not sure :/
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet
typeset -g POWERLEVEL9K_INSTANT_PROMPT=off

if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
########################################################################################################
# Display last command interminal
echo -en "\e]2;   \a"
preexec () { print -Pn "\e]0;$1 -  \a" }

#Set 'man' colors
function man() {
    env \
    LESS_TERMCAP_mb=$'\e[01;31m' \
    LESS_TERMCAP_md=$'\e[01;31m' \
    LESS_TERMCAP_me=$'\e[0m' \
    LESS_TERMCAP_se=$'\e[0m' \
    LESS_TERMCAP_so=$'\e[01;44;33m' \
    LESS_TERMCAP_ue=$'\e[0m' \
    LESS_TERMCAP_us=$'\e[01;32m' \
    man "$@"
}
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ -f /$HOME/.p10k.zsh ]] && source /$HOME/.p10k.zsh
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# Keep 1000 lines of history within the shell and save it to ~/.zsh_history:
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history

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
setopt notify
#####################################################
# Auto completion / suggestion
# Mixing zsh-autocomplete and zsh-autosuggestions
# Requires: zsh-autocomplete (custom packaging by Parrot Team)
# Jobs: suggest files / foldername / histsory bellow the prompt
# Requires: zsh-autosuggestions (packaging by Debian Team)
# Jobs: Fish-like suggestion for command history
# Select all suggestion instead of top on result only

zstyle ':autocomplete:tab:*' insert-unambiguous yes
zstyle ':autocomplete:tab:*' widget-style menu-select
zstyle ':autocomplete:*' min-input 2
zstyle ':completion:*' auto-description 'specify: %d'
zstyle ':completion:*' completer _expand _complete _correct _approximate
zstyle ':completion:*' format 'Completing %d'
zstyle ':completion:*' group-name ''
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

# Fix the Java Problem
export _JAVA_AWT_WM_NONREPARENTING=1
# Prompt
PROMPT="%F{red}┌[%f%F{cyan}%m%f%F{red}]─[%f%F{yellow}%D{%H:%M-%d/%m}%f%F{red}]─[%f%F{magenta}%d%f%F{red}]%f"$'\n'"%F{red}└╼%f%F{green}$USER%f%F{yellow}$%f"
# Export PATH$
export PATH=~/.local/bin:/snap/bin:/usr/sandbox/:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/usr/share/games:/usr/local/sbin:/usr/sbin:/sbin:$PATH

##################################################
# Useful alias for benchmarking programs
# require install package "time" sudo apt install time
# alias time="/usr/bin/time -f '\t%E real,\t%U user,\t%S sys,\t%K amem,\t%M mmem'"

alias ls='ls -lh --color=auto'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias gr='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias ll='lsd -lh --group-dirs=first'
alias lñ='lsd --group-dirs=first'
alias l='lsd --group-dirs=first'
alias lt='lsd --tree --group-dirs=first'
alias llñ='lsd -lha --group-dirs=first'
alias llt='lsd -lha --tree --group-dirs=first'
alias cat='/usr/bin/batcat'
alias catnl= '/usr/bin/batcat --paging=never'
alias catn='/bin/cat'

alias c='cat'
alias ..='cd ..'
alias s='sudo'
alias r='reboot'
alias n='neofetch'
alias na='nano'
alias rr='trash -frv'
alias nv='nvim'
alias ifco='ifconfig'
alias ki='kitty +kitten icat'
alias b5PWm-p@ly='~/.config/polybar/b5PWm-p@ly.sh'
alias pl45M4-p@ly='~/.config/polybar/pl45M4-p@ly.sh'
alias k1ll_P@lybar='sudo killall polybar'
alias lab_HTB='sudo openvpn ~/d35kT@p/h7B/vp3n3s/47z1.ovpn & disown'
alias lab_Seassonal_HTB='sudo openvpn ~/d35kT@p/h7B/vp3n3s/competitive_47z1Lu7h.ovpn & disown'
alias lab_Fortress_HTB='sudo openvpn ~/d35kT@p/h7B/vp3n3s/fortresses_47z1Lu7h.ovpn & disown'
alias lab_Starting-Point_HTB='sudo openvpn ~/d35kT@p/h7B/vp3n3s/starting_point_47z1Lu7h.ovpn & disown'
alias k1ll_@p3nvpn='sudo killall openvpn'
alias c@l@r-p1Ck3r='~/.config/polybar/bin/xcolor-pick'
alias upd4t1N6='sudo apt update'
alias up654D1N6='sudo apt update && sudo apt upgrade -y'
alias in5t4ll1N6='sudo apt install $1 -y'
alias re1n5t4ll1N6='sudo apt reinstall $1 -y'
alias un15t4ll1N6='sudo apt purge $1 -y'
alias auT@R3m@V3='sudo apt autoremove'
alias auT@Cl34n='sudo apt autoclean'
alias x4MP='sudo /opt/lampp/xampp $1'
alias sys='sudo systemctl'

###################################################
# Use emacs keybindings even if our EDITOR is set to vi
bindkey -e

# [Alt-RightArrow] - move forward one word
bindkey -M emacs '^[[1;5C' forward-word
bindkey -M vicmd '^[[1;5C' forward-word
bindkey -M viins '^[[1;5C' forward-word
bindkey '^[[1;5C' emacs-forward-word
bindkey '^[[1;5C' forward-word

# [Alt-LeftArrow] - move backward one word
bindkey -M emacs '^[[1;5D' backward-word
bindkey -M vicmd '^[[1;5D' backward-word
bindkey -M viins '^[[1;5D' backward-word
bindkey '^[[1;5D' emacs-backward-word
bindkey '^[[1;5D' backward-word

# [Fn+Delete] - kill the word backward
bindkey -M emacs '^[[3~' kill-word
bindkey -M vicmd '^[[3~' kill-word
bindkey -M viins '^[[3~' kill-word
bindkey '^[[3~' kill-word

# [Ctrl-Delete] - delete whole word
bindkey -M emacs '^H' backward-kill-word
bindkey -M viins '^H' backward-kill-word
bindkey -M vicmd '^H' backward-kill-word
bindkey '^H' backward-kill-word

# [ctrl + fn] - move to beginning/end of line
bindkey "^[[H" beginning-of-line
bindkey "^[[F"  end-of-line

bindkey -s '^[i' "|grep -Ei \"\n"			# Alt+g pipes to grep
bindkey -s '^[o' "|xclip -sel clip\n"			# Alt+o saves to clipboard
bindkey -s '^[p' "|less | batcat\n"			# Alt-p pipes to less

bindkey '^[[6~' end-of-buffer-or-history		# page down
bindkey '^[[5~' beginning-of-buffer-or-history		# page up
bindkey '^[[Z' undo					# shift + tab undo last action

##################################################
# Function
#################################################
function mkl(){
	mkdir {nmap,content,exploits}
}
function htb-Xplorer(){
         sudo /opt/h4Ck/htbXplorer-Plus/htbXplorer $1 $2 $3
}

function tun0(){
        ip a | grep tun0 | grep inet | awk {'print $2'} | awk {'print $1'} FS="/"
}
function eth(){
        ip a | grep eth0 | grep inet | awk {'print $2'} | awk {'print $1'} FS="/"
}
function wlan(){
        ip a | grep wlan0 | grep inet | awk {'print $2'} | awk {'print $1'} FS="/"
}
function my-Public-IP(){
	curl ifconfig.co
}

function settarget(){
	ip_address=$1
	machine_name=$2
	echo "$ip_address $machine_name" > /$HOME/.config/polybar/bin/target
}

# Extract nmap information
function extractPorts(){
	ports="$(cat $1 | grep -oP '\d{1,5}/open' | awk '{print $1}' FS='/' | xargs | tr ' ' ',')"
	ip_address="$(cat $1 | grep -oP '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' | sort -u | head -n 1)"
	echo -e "\n[*] Extracting information...\n" > extractPorts.tmp
	echo -e "\t[*] IP Address: $ip_address"  >> extractPorts.tmp
	echo -e "\t[*] Open ports: $ports\n"  >> extractPorts.tmp
	echo $ports | tr -d '\n' | xclip -sel clip
	echo -e "[*] Ports copied to clipboard\n"  >> extractPorts.tmp
	cat extractPorts.tmp; rm extractPorts.tmp
}

# Change cursor shape for different vi modes.
function zle-keymap-select {
  if [[ $KEYMAP == vicmd ]] || [[ $1 = 'block' ]]; then
    echo -ne '\e[1 q'
  elif [[ $KEYMAP == main ]] || [[ $KEYMAP == viins ]] || [[ $KEYMAP = '' ]] || [[ $1 = 'beam' ]]; then
    echo -ne '\e[5 q'
  fi
}


###########################################################################################################
# Plugins
source /usr/share/zsh/plugins/zsh-syntax-highlightiqng/zsh-syntax-highlighting.plugin.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh/plugins/sudo.plugin.zsh
source /usr/share/zsh/plugins/zsh-autocomplete/zsh-autocomplete.plugin.zsh
source /usr/share/zsh/powerlevel10k/powerlevel10k.zsh-theme
