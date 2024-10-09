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

function accept-and-complete-next-history() {
    zle expand-or-complete-prefix
}

