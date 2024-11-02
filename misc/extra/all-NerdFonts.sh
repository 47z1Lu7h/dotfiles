#!/bin/bash

if [ "$EUID" == 0 ];then
    echo -ne "\n\n${bold}${red}<|${bold}${black}[${bold}${red}!${bold}${black}]${bold}${red}|${bold}${black}[${bold}${red}!${bold}${black}]${bold}${red}|> \t${cyan}You do not have to be ${red}root ${cyan}to execute this script \t${stnd}${red};-)${end}\n\n" && sleep 2
    exit 1
fi

version='3.2.1'

#declare -a fonts=( 0xProto 3270 Agave AnonymousPro Arimo AurulentSansMono BigBlueTerminal BitstreamVeraSansMono CascadiaCode CascadiaMono CodeNewRoman ComicShannsMono CommitMono Cousine D2Coding DaddyTimeMono DejaVuSansMono DroidSansMono EnvyCodeR FantasqueSansMono FiraCode FiraMono FontPatcher GeistMono Go-Mono Gohu Hack Hasklig HeavyData Hermit iA-Writer IBMPlexMono Inconsolata InconsolataGo InconsolataLGC IntelOneMono Iosevka IosevkaTerm IosevkaTermSlab JetBrainsMono Lekton LiberationMono Lilex MartianMono Meslo Monaspace Monofur Monoid Mononoki MPlus NerdFontsSymbolsOnly Noto OpenDyslexic Overpass ProFont ProggyClean Recursive RobotoMono ShareTechMono SourceCodePro SpaceMono Terminus Tinos Ubuntu UbuntuMono UbuntuSans VictorMono ZedMono )

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

echo -ne "\n${bold}${white}<|[${red}!${white}]|> ${end}${blue} This script will install ${red}all ${blue}the ${red}Nerd-Fonts${blue},\n\tfrom the github repo of ${Iblack}Ryanoasis${end}${blue}."
echo -ne "\n\n${bold}${red}<${Iblack}|${red}[${bold}${cyan}!${red}]${Iblack}|${red}> ${end}${blue}Who would you like to install the fonts for${Iblack}?\n"
echo -ne "\n\t${end}${blue}[ ${end}${BIcyan}1 ${end}${blue}] ${red}\t~~>\t${end}${blue}User${end}"
echo -ne "\n\t${end}${blue}[ ${end}${BIcyan}2 ${end}${blue}] ${red}\t~~>\t${end}${blue}Root${end}\n\n\t\t${BIgreen}󰙊    ${BIred}"

read answer

if [ $answer != "${answer#[1]}" ]; then

	sys="user"
	fonts_Path="$HOME/.fonts/nerd_fonts"

	if [[ ! -d "$fonts_Path" ]]; then
		mkdir -p "$fonts_Path"
	fi

elif [ $answer != "${answer#[2]}" ]; then

	sys="root"
	fonts_Path="/usr/share/fonts/nerd_fonts"

	if [[ ! -d "$fonts_Path" ]]; then
		sudo mkdir -p "$fonts_Path"
	fi

else
	>/dev/null 2>&1
	echo -ne "\n${Iblack}   ${Iwhite} 󰄾 󰥭 \t${BIcyan}b${BIred}Y${BIcyan}e${Bblack}!!\n\n${blue}" && sleep 0.5 && exit 1
fi

echo -ne "\n${bold}${white}<|[${cyan}!${white}]|> ${BIgray}${Iblack}  ${blue}Getting fonts ${blue}for ${red}$sys${BIblue}!!\n${blue}" && sleep 0.5

for font in "${fonts[@]}"; do

	zip_file="${font}.zip"
	download_url="https://github.com/ryanoasis/nerd-fonts/releases/download/v${version}/${zip_file}"
	echo -ne "\n\n\t\t ${yellow}󰔷 ${red} d0WNl04d1N6${yellow}󰇆  ${Iblack}  ${purple}$download_url${Bblack}!!\n${end}${blue}\n"
	wget "$download_url"
	sudo unzip -n "$zip_file" -d "$fonts_Path"
	rm "$zip_file";
done

if [ $? -eq 0 ]; then
	sudo find "$fonts_Path" -name '*Windows Compatible*' -delete
	sudo fc-cache -v && sudo chown -R $USER:$USER ${HOME}
fi

#	ls $fonts_Path/$font* >/dev/null 2>&1
#	if [ -f $fonts_Path/$font* ]; then
