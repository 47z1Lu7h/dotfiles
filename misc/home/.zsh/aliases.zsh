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

alias l='lsd --group-dirs=first'
alias ll='lsd -lh --group-dirs=first'
alias la='lsd -ha --group-dirs=first'
alias lla='lsd -lha --group-dirs=first'
alias lt='lsd --tree --group-dirs=first --depth'
alias lta='lsd -ha --tree --group-dirs=first --depth'
alias llt='lsd -lh --tree --group-dirs=first --depth'
alias llta='lsd -lha --tree --group-dirs=first --depth'

alias history="history 0"
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias g53p='grep  --color=auto --exclude-dir=.bzr,CVS,.git,.hg,.svn'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

alias diff="diff --color=always --palette='ad=1;3;38;5;154:de=1;3;38;5;9'"
alias ip='ip --color=auto'
alias ipa='ip --color=auto a'
alias cat='/usr/bin/batcat'
alias catn='/usr/bin/cat '
alias c='/usr/bin/batcat -p -ljava'
alias hg='history | grep -Ei'
alias wh='which'

alias code-config_f0lD3R='code ~/.config/'

alias   ..='cd ..'
alias	s='sudo'
alias   r3B00t='sudo reboot'
alias	p0W350ff='sudo poweroff'
alias	n='neofetch'
alias	na='nano'
alias	rr='trash -frv'
alias	nv='nvim'
alias	ki='kitty +kitten icat'

alias   set-n3w-p0lYbar='~/.config/polybar/launch'
alias	p0Ly-47z1='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/47z1.ini & disown'
alias	p0Ly-simple='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/simple.ini & disown'
alias	p0Ly-pentest_kali='sudo killall polybar; polybar -q bottom -c ~/.config/polybar/themes/pentest_kali.ini & disown'
alias	p0Ly-plasma='sudo killall polybar; polybar -q right  -c ~/.config/polybar/themes/plasma.ini & disown; polybar -q left -c ~/.config/polybar/themes/plasma.ini & disown'

alias	kitty-47z1='kitty -c ~/.config/kitty/themes/47z1.conf & disown'
alias	kitty-ComicShan='kitty -c ~/.config/kitty/themes/ComicShan.conf & disown'
alias	kitty-daddy='kitty -c ~/.config/kitty/themes/daddy.conf & disown'
alias	kitty-goMono-='kitty -c ~/.config/kitty/themes/goMono.conf & disown'
alias	kitty-hack='kitty -c ~/.config/kitty/themes/hack.conf & disown'
alias	kitty-mathJax='kitty -c ~/.config/kitty/themes/mathJax.conf & disown'

alias	set-backgroung='feh --bg-fill $1'
alias	set-0WN3r='sudo chown $USER:$USER .'
alias	mkl='mkdir nmap content exploits'
alias	htb-Xpl0r3r='sudo /opt/h4Ck/htbXplorer-Plus/htbXplorer $1 $2 $3'

alias upd='sudo apt update'
alias upg='sudo apt upgrade -y'
alias installing='sudo apt install -y'
alias reinstalling='sudo apt reinstall -y'
alias uninstalling='sudo apt purge -y'
alias auT0-Remove='sudo apt autoremove -y'
alias auT0-Clean='sudo apt autoclean -y'
alias x4MP='sudo /opt/lampp/xampp'
alias sys='sudo systemctl'

alias tun0="echo '${BYellow}$(ip a | grep tun0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"
alias eth="echo '${BYellow}$(ip a | grep eth0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"
alias wlan="echo '${BYellow}$(ip a | grep wlan0 | grep inet | awk {'print $2'} | awk {'print $1'} FS='/')'"

alias nmap-Reconnaissance='sudo nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn $1 -oG allPorts'
alias nmap-Port_Scan='extractPorts allPorts && nmap -sCV -vv -p$(xclip -selection clipboard -o) $1 -oN targeted'

alias lab-HTB='sudo openvpn ~/Desktop/h7B/vp3n3s/lab_47z1Lu7h.ovpn & disown'
alias lab-Seassonal-HTB='sudo openvpn ~/Desktop/h7B/vp3n3s/competitive_47z1Lu7h.ovpn & disown'
alias lab-Fortress-HTB='sudo openvpn ~/Desktop/h7B/vp3n3s/fortresses_47z1Lu7h.ovpn & disown'
alias lab-Strtng-Point-HTB='sudo openvpn ~/Desktop/h7B/vp3n3s/starting_point_47z1Lu7h.ovpn & disown'
alias kill-0P3Nvpn='sudo killall openvpn'
