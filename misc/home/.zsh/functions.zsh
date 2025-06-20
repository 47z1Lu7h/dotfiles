###############################################################################
#░░░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░#
#▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒#
#▒    ▒  ▒▒   ▒▒   ▒   ▒   ▒▒▒▒▒▒    ▒    ▒  ▒▒▒▒▒▒▒▒   ▒▒▒▒▒   ▒   ▒▒▒▒     ▒#
#▓▓▓   ▓▓▓▓   ▓▓   ▓▓   ▓▓   ▓▓   ▓▓▓▓▓▓   ▓▓▓   ▓▓   ▓▓   ▓▓▓   ▓▓   ▓   ▓▓▓▓#
#▓▓▓   ▓▓▓▓   ▓▓   ▓▓   ▓▓   ▓   ▓▓▓▓▓▓▓   ▓▓▓   ▓   ▓▓▓▓   ▓▓   ▓▓   ▓▓▓    ▓#
#▓▓▓   ▓▓▓▓   ▓▓   ▓▓   ▓▓   ▓▓   ▓▓▓▓▓▓   ▓ ▓   ▓▓   ▓▓   ▓▓▓   ▓▓   ▓▓▓▓▓  ▓#
#███   ████       █     ██   ████    ███  	██   ████   █████    ██   █  █#
#███████████████████████████████████████  ████████████████████████████████████#
#█By██████████████████████████████████ 47z! ██████████████████████████████:~)█#
###############################################################################

function hacker_quote(){
	ZSH_HACKER_QUOTES_ENABLE_WHEN_INTERACTIVE= zsh -i
}

	# - Set Linux terminal/framebuffer color scheme
function set_linux_colors(){
   if [[ $TERM == 'linux' ]] ; then
        echo -en "\e]P0000005" #black
        echo -en "\e]P83d3d3d" #darkgrey
        echo -en "\e]P1f03669" #darkred
        echo -en "\e]P9c75b79" #red
        echo -en "\e]P2b8e346" #darkgreen
        echo -en "\e]PAc8e37e" #green
        echo -en "\e]P3ffa402" #brown
        echo -en "\e]PBffbe4a" #yellow
        echo -en "\e]P402a2ff" #darkblue
        echo -en "\e]PC71cbff" #blue
        echo -en "\e]P5875c8d" #darkmagenta
        echo -en "\e]PDe41f66" #magenta
        echo -en "\e]P66fa923" #darkcyan
        echo -en "\e]PE0078ce" #cyan
        echo -en "\e]P7ffffff" #lightgrey
        echo -en "\e]PFc0c0c0" #white
        clear # bring us back to default input colours
  fi
}
set_linux_colors()

	# - Some git alias
function eeee { eeee }
function gt { git add -A; git commit -a -m init; git push }
function gs { git status }
function gd { git diff }
function ge { git commit --allow-empty -m "Empty commit" }
function gf { git push --force }
function gg { git checkout main || git checkout master; git pull; git status }
function gi { ee git cherry-pick $(vv $@) }
function gm { git add --all; git commit --amend --allow-empty }
function gn { gg; ee git checkout -b $(vv $@) }
function gP { git pull }
function gp { git push }
function gr { git log --all --grep="$@" --regexp-ignore-case --pretty=format:'%C(yellow)%h %C(magenta)%ad %C(green)%s %C(cyan)%an' --date=short }
	# [b]ranch delete
function gb { git branch --merged | grep --invert-match "main$" | grep --invert-match "^\*" }
function gbb { gb | xargs git branch --delete; git remote prune origin }
function gbd { git branch --delete --force $@; git push origin --delete $@ }
	# rebase
function gx { git add --all; ee git commit --fixup $(vv $@) }
function gxx { (git fetch origin main && git rebase --interactive --autosquash origin/main) || (git fetch origin master && git rebase --interactive --autosquash origin/master) }
function gxb { git rebase --interactive --autosquash HEAD~$(($@ + 1)) }
	# rebase conflict
function gxa { git add --all; git rebase --abort }
function gxc { git add --all; git rebase --continue }
	# [u]ndo and discard
function gu { git reset --soft HEAD~$@ }
function gz { git add --all; git reset --hard }
function guz { gu $@; gz }
	# stash
function gc { git stash clear }
function gl { git stash list }
function gSS { git add --all; git stash save }
function gstah { git stash apply "stash@{${@:-0}}" }

function fshow(){
  git log --graph --color=always \
      --format="%C(auto)%h%d %s %C(black)%C(bold)%cr" "$@" \
  | fzf --ansi --preview "echo {} \
    | grep -o '[a-f0-9]\{7\}' \
    | head -1 \
    | xargs -I % sh -c 'git show --color=always %'" \
        --bind "enter:execute:
            (grep -o '[a-f0-9]\{7\}' \
                | head -1 \
                | xargs -I % sh -c 'git show --color=always % \
                | less -R') << 'FZF-EOF'
            {}
	FZF-EOF"
}

#From https://github.com/rothgar/mastering-zsh.git
function  mans(){
    man -k . \
    | fzf -n1,2 --preview "echo {} \
    | cut -d' ' -f1 \
    | sed 's# (#.#' \
    | sed 's#)##' \
    | xargs -I% man %" --bind "enter:execute: \
      (echo {} \
      | cut -d' ' -f1 \
      | sed 's# (#.#' \
      | sed 's#)##' \
      | xargs -I% man % \
      | less -R)"
}

 	# - Set M4N colors
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

	# - Function extraction Multiple files
function xTr4Ct() {
	local remove_archive
	local success
	local extract_dir

	if (( $# == 0 )); then
		cat <<-'EOF' >&2
			Usage: extract [-option] [file ...]

			Options:
			   -r, --remove    Remove archive after unpacking.
		EOF
	fi

	remove_archive=1
	if [[ "$1" == "-r" ]] || [[ "$1" == "--remove" ]]; then
		remove_archive=0
		shift
	fi

	while (( $# > 0 )); do
		if [[ ! -f "$1" ]]; then
			echo "extract: '$1' is not a valid file" >&2
			shift
			continue
		fi

		success=0
		extract_dir="${1:t:r}"
		case "$1" in
			(*.tar.gz|*.tgz) (( $+commands[pigz] )) && { pigz -dc "$1" | tar xv } || tar zxvf "$1" ;;
			(*.tar.bz2|*.tbz|*.tbz2) tar xvjf "$1" ;;
			(*.tar.xz|*.txz)
				tar --xz --help &> /dev/null \
				&& tar --xz -xvf "$1" \
				|| xzcat "$1" | tar xvf - ;;
			(*.tar.zma|*.tlz)
				tar --lzma --help &> /dev/null \
				&& tar --lzma -xvf "$1" \
				|| lzcat "$1" | tar xvf - ;;
			(*.tar) tar xvf "$1" ;;
			(*.gz) (( $+commands[pigz] )) && pigz -d "$1" || gunzip "$1" ;;
			(*.bz2) bunzip2 "$1" ;;
			(*.xz) unxz "$1" ;;
			(*.lzma) unlzma "$1" ;;
			(*.Z) uncompress "$1" ;;
			(*.zip|*.war|*.jar|*.sublime-package|*.ipsw|*.xpi|*.apk) unzip "$1" -d $extract_dir ;;
			(*.rar) unrar x -ad "$1" ;;
			(*.7z) 7za x "$1" ;;
			(*.deb)
				mkdir -p "$extract_dir/control"
				mkdir -p "$extract_dir/data"
				cd "$extract_dir"; ar vx "../${1}" > /dev/null
				cd control; tar xzvf ../control.tar.gz
				cd ../data; extract ../data.tar.*
				cd ..; rm *.tar.* debian-binary
				cd ..
			;;
			(*)
				echo "extract: '$1' cannot be extracted" >&2
				success=1
			;;
		esac

		(( success = $success > 0 ? $success : $? ))
		(( $success == 0 )) && (( $remove_archive == 0 )) && rm "$1"
		shift
	done
}

	# - FZF
function nice-FZF(){

	if [ "$1" = "h" ]; then
		fzf -m --reverse --preview-window down:20 --preview '[[ $(file --mime {}) =~ binary ]] &&
	               echo {} is a binary file ||
	                (bat --style=numbers --color=always {} ||
	                 highlight -O ansi -l {} ||
	                 coderay {} ||
	                 rougify {} ||
	                 cat {}) 2> /dev/null | head -500'

	else
	       fzf -m --preview '[[ $(file --mime {}) =~ binary ]] &&
	                        echo {} is a binary file ||
	                        (bat --style=numbers --color=always {} ||
	                         highlight -O ansi -l {} ||
	                         coderay {} ||
	                         rougify {} ||
	                         cat {}) 2> /dev/null | head -500'
	fi
}

function ranger_cd() {
    tmp="$(mktemp)"
    ranger --choosedir="$tmp" "$@"
    if [ -f "$tmp" ]; then
        dir="$(cat "$tmp")"
        rm -f "$tmp"
        [ --datadir "$dir" ] && [ "$dir" != "$(pwd)" ] && cd "$dir"
    fi
}

function up() {
         uptime=$(awk -F. '{print $1}' /proc/uptime)
         secs=$((${uptime}%60))
         mins=$((${uptime}/60%60))
         hours=$((${uptime}/3600%24))
         days=$((${uptime}/86400))
         uptime="${mins}m"
         if [ "${hours}" -ne "0" ]; then
                uptime="${hours}h ${uptime}"
                if [ "${days}" -ne "0" ]; then
                uptime="${days}d ${uptime}"
                fi
        fi
        echo ${uptime}
}

function xp() {
	xprop | awk '
	   /^WM_CLASS/{sub(/.* =/, "instance:"); sub(/,/, "\nclass:"); print}
	   /^WM_NAME/{sub(/.* =/, "title:"); print}'
}

function fzf-pre() {
fzf -m --height 50% --layout=reverse --inline-info \
  --preview '([[ -f {} ]] && (bat --style=numbers --color=always {} || cat {})) || ([[ -d {} ]] && (tree -C {} | less)) || echo {} 2> /dev/null | head -200' \
  --preview-window 'right,50%,+{2}+3/3,~3,noborder' \
  --bind '?:toggle-preview'
}

function rga-fzf() {
	RG_PREFIX="rga --files-with-matches"
	local file
	file="$(
		FZF_DEFAULT_COMMAND="$RG_PREFIX '$1'" \
			fzf --sort --preview="[[ ! -z {} ]] && rga --pretty --context 5 {q} {}" \
				--phony -q "$1" \
				--bind "change:reload:$RG_PREFIX {q}" \
				--preview-window="70%:wrap"
	)" &&
	echo "opening $fiole" &&
	xdg-open "$file"
}

function color-GR1D_BACKGR0UNDS() {
	echo -e "\n${On_IBlack}${UBlue}${IBlue}=============${On_ICyan}${BIBlue}   fuNCt10n  ~>  Color~Grid   ${end}${On_IBlack}${UBlue}${IBlue}================\n===========================================================${end}\n"
	sleep 0.2
	for i in {0..255}; do print -Pn "%K{$i}  %k%F{$i}  ${(l:3::0:)i}%f   " ${${(M)$((i%6)):#3}:+$'\n'}; done 
}

function color-GR1D() {
	echo -e "\n${On_IBlack}${UBlue}${IBlue}=============${On_ICyan}${BIBlue}   fuNCt10n  ~>  Color~Grid   ${end}${On_IBlack}${UBlue}${IBlue}================\n===========================================================${end}\n"
	sleep 0.2

	iter=16
	while [ $iter -lt 52 ];do
	second=$[$iter+36]
	third=$[$second+36]
	four=$[$third+36]
	five=$[$four+36]
	six=$[$five+36]
	seven=$[$six+36]

	if [ $seven -gt 250 ];then seven=$[$seven-251]; fi
		echo -en "\033[38;5;$(echo $iter)m "
		printf "%03d" $iter
		echo -en "   \033[38;5;$(echo $second)m "
		printf "%03d" $second
		echo -en "   \033[38;5;$(echo $third)m "
		printf "%03d" $third
		echo -en "   \033[38;5;$(echo $four)m "
		printf "%03d" $four
		echo -en "   \033[38;5;$(echo $five)m "
		printf "%03d" $five
		echo -en "   \033[38;5;$(echo $six)m "
		printf "%03d" $six
		echo -en "   \033[38;5;$(echo $seven)m "
		printf "%03d" $seven

	iter=$[$iter+1]
	printf '\r\n'
done
}

function kit {
  themedir="$HOME/.config/kitty/themes"
  theme=`/bin/ls $themedir | grep -v README | sed 's/.conf//' | grep --color='none' "$1" | fzf -1 --exact`
  kitten @ set-colors "$themedir/$theme.conf"
}

function ncol {
    if [[ $1 == *.tsv* ]]; then
        csvgrep -n -t $1 | wc -l
    elif [[ $1 == *.csv* ]]; then
        csvgrep -n $1 | wc -l
    elif [[ $1 == *.feather ]]; then
        python -c \
          "import sys; import pandas as pd; print(pd.read_feather(sys.argv[1]).shape[1])" $1
    else
        echo "Unsupported format..."
    fi
}

function extractPorts(){
	ports="$(cat $1 | grep -oP '\d{1,5}/open' | awk '{print $1}' FS='/' | xargs | tr ' ' ',')"
	ip_address="$(cat $1 | grep -oP '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}' | sort -u | head -n 1)"
	echo -e "\n[*] Extracting information...\n" > extractPorts.tmp
	echo -e "\t[*] IP Address: $ip_address"  >> extractPorts.tmp
	echo -e "\t[*] Open ports: $ports\n"  >> extractPorts.tmp
	echo $ports | tr -d '\n' | xclip -sel clip
	echo -e "[*] Ports copied to clipboard\n"  >> extractPorts.tmp
	batcat -lruby  extractPorts.tmp; rm extractPorts.tmp
}

function set-api_token-htbXplorer() { echo -ne "\t${blue}~~~> ${yellow}Enter your ${green}HTB ${red}API_TOKEN ${yellow}:\n\t${blue}~~~> ${yellow} Enter the ${red}full path ${yellow}of a image: ~~> 
	${cyan}\n\n" echo -e "\n ~ Enter your HTB API_TOKEN:" read API; sudo sed -i 's/declare -r API_TOKEN=".*"/declare -r API_TOKEN="'$API'"/g' /opt/h4Ck/htbXplorer-Plus/htbXplorer sleep 1 echo -ne 
	"\t${blue}~~~> ${yellow} Done${red}!!\n\n"
}

function set-dpi_polybar() {
	dpi=$(cat ~/.config/polybar/cnf/*.ini | grep dpi | head -1)
	echo -e "\n\n\t\t${yellow}~ Current ${dpi}\n\t\t~ Enter a new ${red}DPI ${yellow}to resice Polybar${blue} ~~>${cyan}\n\t\t\t"
	read NEW_DPI;
	new_dpi="dpi = ${NEW_DPI}"
	sed -i "s/${dpi}/${new_dpi}/g" ~/.config/polybar/cnf/*.ini &&
	echo -ne "\t${blue}~~~> ${yellow}Setting ${red}$new_dpi ${yellow}in your settings.ini\n\t${blue}~~~> ${yellow}${red}Reload ${yellow}your polybar\n\n"
	sleep 0.5
}

function set-height_polybar () {
	height=$(cat ~/.config/polybar/cnf/*.ini | grep height | head -1)
	echo -e "\n\n\t\t${yellow}~ Current ${dpi}\n\t\t~ Enter a new ${red}height ${yellow}to resice Polybar${blue} ~~>${cyan}\n\t\t\t"
	read NEW_height
	new_height="height = ${NEW_height}%"
	sed -i "s/${height}/${new_height}/g" ~/.config/polybar/cnf/*.ini
	echo -ne "\t${blue}~~~> ${yellow}Setting ${red}$new_dpi ${yellow}in your settings.ini\n\t${blue}~~~> ${yellow}Just ${red}relanuch ${yellow}your polybar\n\n"
	sleep 1
}

#function set-default_background_in_bspwm() {
#	echo -ne "\t${blue}~~~> ${yellow}Set a default ${red} wallpaper ${yellow}in bspwm \n\t${blue}~~~> ${yellow} Enter the ${red}full path ${yellow}of a image: ~~> ${cyan}\n\n"
#	read image;
#	echo -ne "\t${image}\n"
#	sed -i "s/fill */fill '" ${image} "'/g" ~/.config/bspwm/bspwmrc
#	echo -ne "\t${blue}~~~> ${yellow}Setting new wallpaper \n\t${blue}~~~> ${yellow}Just press ${red}'ctrl+alt+r' ${yellow}to restart bspwm\n\n"
#	sleep 1
#}

function settarget() {
	ip_address=$1
	machine_name=$2
	echo "$ip_address $machine_name" > ~/.config/polybar/scripts/target
}

function rrf() {
	scrub -p dod $1
	shred -zun 10 -v $1
}

	# ~~> Function Nmap full ports-scan
function sC4n-nM4p() {
	sudo nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn $1 -oG allPorts && sleep 2
	ports="$(cat allPorts | grep -oP '\d{1,5}/open' | awk '{print $1}' FS='/' | xargs | tr ' ' ',')"
	nmap -sCV -vv -p${ports} $1 -oN targeted && /usr/bin/batcat targeted -ljava
}

function entry-2-h0sTs() {
	machine_adress=$1
	machine_name=$2
	echo -ne "$1\t$2\n" | sudo tee -a /etc/hosts
}

function matrix() { echo -e "\e[1;40m" ; clear ; while :; do echo $LINES $COLUMNS $(( $RANDOM % $COLUMNS)) $(( $RANDOM % 72 )) ;sleep 0.05; done|awk '{ letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()"; c=$4;        letter=substr(letters,c,1);a[$3]=0;for (x in a) {o=a[x];a[x]=a[x]+1; printf "\033[%s;%sH\033[2;32m%s",o,x,letter; printf "\033[%s;%sH\033[1;37m%s\033[0;0H",a[x],x,letter;if (a[x] >= $1) { a[x]=0; } }}' }
