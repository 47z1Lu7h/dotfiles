#!/bin/bash

if [ "$EUID" == 0 ];then
    echo -ne "\n\n${bold}${red}<|${bold}${black}[${bold}${red}!${bold}${black}]${bold}${red}|${bold}${black}[${bold}${red}!${bold}${black}]${bold}${red}|> \t${cyan}You do not have to be ${red}root ${cyan}to execute this script \t${stnd}${red};-)${end}\n\n" && sleep 2
    exit 1
fi

version='3.2.1'

declare -a fonts=(
0xProto
3270
Agave
AnonymousPro
Arimo
AurulentSansMono
BigBlueTerminal
BitstreamVeraSansMono
CascadiaCode
CascadiaMono
CodeNewRoman
ComicShannsMono
CommitMono
Cousine
D2Coding
DaddyTimeMono
DejaVuSansMono
DroidSansMono
EnvyCodeR
FantasqueSansMono
FiraCode
FiraMono
FontPatcher
GeistMono
Go-Mono
Gohu
Hack
Hasklig
HeavyData
Hermit
iA-Writer
IBMPlexMono
Inconsolata
InconsolataGo
InconsolataLGC
IntelOneMono
Iosevka
IosevkaTerm
IosevkaTermSlab
JetBrainsMono
Lekton
LiberationMono
Lilex
MartianMono
Meslo
Monaspace
Monofur
Monoid
Mononoki
MPlus
NerdFontsSymbolsOnly
Noto
OpenDyslexic
Overpass
ProFont
ProggyClean
Recursive
RobotoMono
ShareTechMono
SourceCodePro
SpaceMono
Terminus
Tinos
Ubuntu
UbuntuMono
UbuntuSans
VictorMono
ZedMono
)

echo -ne "\n\t${white}<|[${cyan}!${white}]|> ${BIblue}Who do you like to install all ${BIcyan}nerdFonts ${BIblue}for${red}??\n"
echo -ne "\n\t\t${BIcyan}1${BIblue}) ~> ${BIred}\tfor User\n\t\t${BIcyan}2${BIblue}) ~>${BIred}\tfor System \t${BIred}\n\t"
read path

if [ $path == 1 ]; then
	echo -ne "\n\t${black}󰧟 ${Iwhite}~> ${Bcyan}OK ${Iblue}done${BIwhite}!!Installing in ${Bcyan}${fontsPath}\n\n${BIcyan}"
	fonts-Path="~/.local/share/fonts/nerd-fonts"
	if [[ ! -d ~/.local/share/fonts/nerd-fonts ]]; then mkdir -p ~/.local/share/fonts/nerd-fonts ; fi

fi

if [ $path == 2 ]; then
	echo -ne "\n\t${black}󰧟${Bwhite}~> ${cyan}OK ${Iblue}done ${Bblack}!!\n${BIcyan}"
	fonts-Path="/usr/share/fonts/nerd-fonts"
	if [[ ! -d /usr/share/fonts/nerd-fonts ]]; then	sudo mkdir -p /usr/share/fonts/nerd-fonts; fi
fi

for font in "${fonts[@]}"; do
	zip_file="${font}.zip"
	download_url="https://github.com/ryanoasis/nerd-fonts/releases/download/v${version}/${zip_file}"
	echo -ne "\n\n\t${BIblack}󰧟${BIwhite}~> ${cyan}d0Wnloading ${BIred}$download_url${cyan}${BIwhite}!!\n${BIcyan}\n"
	wget "$download_url"
	sudo unzip -n "$zip_file" -d "$fonts-Path"
	rm "$zip_file";
done

sudo find "$fonts-Path" -name '*Windows Compatible*' -delete
sudo find "$fonts-Path" -name '*LICENSE*' -delete; sudo fc-cache
