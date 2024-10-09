  # ~> Ctrl-z toggle between suspend and resume
function Resume() {
  fg
  zle push-input
  BUFFER=""
  zle accept-line
}

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

######################################################################################################################
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


####################################################################################################################
     ######################  ~~~~~~~~~~~~~~~~ ¡| l0t of c0l05s|! ~~~~~~~~~~~~   ###########################
#####################################################################################################################
	# ~ c@lRs
export end='\033[0m'		# Text Reset
export italic=''
export line="\e[4m;\e[0m"	# Line
export strikeTh="\e[9m;\e[0m"	# strikethrough

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

