###########################################################
#░░░░░░░░░░░░   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░#
#▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒#
#▒▒▒▒   ▒▒▒▒▒   ▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒     ▒▒▒▒▒   ▒▒▒▒▒▒     ▒#
#▓▓   ▓▓   ▓▓   ▓   ▓▓   ▓▓   ▓▓   ▓▓▓▓▓▓  ▓▓▓   ▓▓   ▓▓▓▓#
#▓   ▓▓▓   ▓▓   ▓   ▓   ▓▓▓   ▓▓▓▓    ▓▓         ▓▓▓▓    ▓#
#▓   ▓▓▓   ▓▓   ▓   ▓   ▓▓▓   ▓▓▓▓▓▓   ▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓   #
#███   █    █   █   ███   █    █      ████     ████      █#
#█████████████████████████  ██████████████████████████████#
#█By█████████████████████ 47z! ███████████████████████:~)█#
###########################################################

alias	l='lsd --group-dirs=first'
alias	ll='lsd -lh --group-dirs=first'
alias	la='lsd -ha --group-dirs=first'
alias	lla='lsd -lha --group-dirs=first'
alias	lt='lsd --tree --group-dirs=first --depth'
alias	lta='lsd -ha --tree --group-dirs=first --depth'
alias	llt='lsd -lh --tree --group-dirs=first --depth'
alias	llta='lsd -lha --tree --group-dirs=first --depth'

alias   '..'='cd ../'
alias	s='sudo'
alias	n='neofetch'
alias	na='nano'
alias	rr='trash -frv'
alias	nv='nvim'

alias	upd='sudo apt update'
alias	upg='sudo apt update && sudo apt upgrade -y'
alias	up6='sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y && sudo apt autoclean -y'
alias	auT0-Remove='sudo apt autoremove -y'
alias	auT0-Clean='sudo apt autoclean -y'
alias	ki='kitty +kitten icat'

alias   t-list='trash-list'
alias   t-restore='trash-restore'
alias   t-empty='trash-empty'

alias	history="history 0"
alias	hg='history | grep -Ei'
alias	dir='dir --color=auto'
alias	vdir='vdir --color=auto'
alias	g53p='grep  --color=auto --exclude-dir=.bzr,CVS,.git,.hg,.svn'
alias	grep='grep --color=auto'
alias	fgrep='fgrep --color=auto'
alias	egrep='egrep --color=auto'
alias	ch3CK='7z l'
alias	diff="diff --color=always --palette='ad=1;3;38;5;154:de=1;3;38;5;9'"
alias	ip='ip --color=auto'
alias	catn='/usr/bin/cat '
alias	cat='/usr/bin/batcat'
alias	c='/usr/bin/batcat -p'

alias	list-f0Nt5='kitty +list-fonts'
alias	x4MP='sudo /opt/lampp/xampp'
alias	sYs='sudo systemctl'
alias	myIp='curl icanhazip.com'

alias	tun0="echo '${BYellow}$(ip a | grep tun0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"
alias	tun1="echo '${BYellow}$(ip a | grep tun1 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"
alias	eth="echo '${BYellow}$(ip a | grep eth0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"
alias	wlan="echo '${BYellow}$(ip a | grep wlan0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"

alias	lab-HTB='sudo openvpn ~/w35kT0p/h7B/vp3n3s/lab_47z1Lu7h.ovpn & disown'
alias	lab-Seassonal-HTB='sudo openvpn ~/w35kT0p/h7B/vp3n3s/competitive_47z1Lu7h.ovpn & disown'
alias	lab-Fortress-HTB='sudo openvpn ~/w35kT0p/h7B/vp3n3s/fortresses_47z1Lu7h.ovpn & disown'
alias	lab-Strtng-Point-HTB='sudo openvpn ~/w35kT0p/h7B/vp3n3s/starting_point_47z1Lu7h.ovpn & disown'
alias	kill-oP3Nvpn='sudo killall openvpn'
alias	kill-p0lyb4r='sudo killall polybar'

alias	set-backgroung='feh --bg-fill $1'
alias	mkl='mkdir nmap content exploits'
alias	htb-Xpl0r3r='sudo /opt/h4Ck/htbXplorer-Plus/htbXplorer $1 $2 $3'

alias   set-n3w-p0lYbar='~/.config/polybar/launch'
alias	p0Ly-47z1='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/47z1.ini & disown'
alias	p0Ly-simple='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/simple.ini & disown'
alias	p0Ly-pentest='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/pentest.ini & disown'
alias	p0Ly-plasma='sudo killall polybar; polybar -q right  -c ~/.config/polybar/themes/plasma.ini & disown; polybar -q left -c ~/.config/polybar/themes/plasma.ini & disown'

alias	kitty-47z1='kitty -c ~/.config/kitty/themes/47z1.conf & disown'
alias	kitty-Comic='kitty -c ~/.config/kitty/themes/Comic.conf & disown'
alias	kitty-daddy='kitty -c ~/.config/kitty/themes/daddy.conf & disown'
alias	kitty-goMono='kitty -c ~/.config/kitty/themes/goMono.conf & disown'
alias	kitty-hack='kitty -c ~/.config/kitty/themes/hack.conf & disown'

alias netCons='lsof -i'                         # Show all open TCP/IP sockets
alias lsock='sudo lsof -i -P'                   # Display open sockets
alias lsockU='sudo lsof -nP | grep UDP'         # Display only open UDP sockets
alias lsockT='sudo lsof -nP | grep TCP'         # Display only open TCP sockets
alias openPorts='sudo lsof -i | grep LISTEN'    # openPorts:    All listening connections

#   findPid: find out the pid of a specified process
#   -----------------------------------------------------
#       Note that the command name can be specified via a regex
#       E.g. findPid '/d$/' finds pids of all processes with names ending in 'd'
#       Without the 'sudo' it will only find processes of the current user
#   -----------------------------------------------------
    findPid () { lsof -t -c "$@" ; }

#   memHogsTop, memHogsPs:  Find memory hogs
#   -----------------------------------------------------
    alias memHogsTop='top -1 -o RES | head -20'
    alias memHogsPs='ps wwaxm -o pid,stat,vsize,rss,time,command | head -10'

#   cpuHogs:  Find CPU hogs
#   -----------------------------------------------------
    alias cpuHogs='ps wwaxr -o pid,stat,%cpu,time,command | head -10'

#   topForever:  Continual 'top' listing (every 10 seconds)
#   -----------------------------------------------------
    alias topForever='top -d 10 -o %CPU'

#   ii:  display useful host related informaton
#   -------------------------------------------------------------------
    ii() {
        echo -e "\nYou are logged on ${Icyan}$HOST"
        echo -e "\n\tAdditionnal information:$NC " ; uname -a
        echo -e "\n${Igreen}Users logged on:$NC " ; w -h
        echo -e "\n\t${white}Current date :$NC " ; date
        echo -e "${Bred}Machine stats :$NC " ; uptime
        echo -e "\n\t${BIcyan}Current network location :$NC  " ; curl ipinfo.io
        echo -e "\t\n${BIyellow}Public facing IP Address :$NC   " ; myIp
    }

