NAME=$(cat /etc/*release | grep '^NAME' | awk '{print $NF}' FS='='| tr -d '"' |  awk '{print $1}')

if  [ $NAME = Kali ]; then
	echo "%{T0}%{F#90ff} "

elif  [ $NAME = Ubuntu ]; then
	echo "%{T0}%{F#90ff} "

elif  [ $NAME = Parrot ]; then
	echo "%{T0}%{F#90ff} "

elif  [ $NAME = Arch ]; then
	echo "%{T0}%{F#90ff} "
fi
