#!/bin/bash

declare -a fonts=(
Agave
AnonymousPro
Arimo
AurulentSansMono
BigBlueTerminal
BitstreamVeraSansMono
CascadiaCode
CodeNewRoman
ComicShannsMono
Cousine
DaddyTimeMono
DejaVuSansMono
DroidSansMono
EnvyCodeR
FantasqueSansMono
FiraCode
FiraMono
FontPatcher
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
JetBrainsMono
Lekton
LiberationMono
Lilex
Meslo
Monofur
Monoids
Mononoki
MPlus
NerdFontsSymbolsOnly
Noto
OpenDyslexic
Overpass
ProFont
ProggyClean
RobotoMono
ShareTechMono
SourceCodePro
SpaceMono
Terminus
Tinos
Ubuntu
UbuntuMono
VictorMono
)

version='3.2.1'

fonts_dir="/usr/share/fonts/n3RD_f0ntS"

if [[ ! -d "$fonts_dir" ]]; then
    sudo mkdir -p "$fonts_dir"
fi

for font in "${fonts[@]}"; do
    zip_file="${font}.zip"
    download_url="https://github.com/ryanoasis/nerd-fonts/releases/download/v${version}/${zip_file}"
    echo "Downloading $download_url"
    wget "$download_url"
    sudo unzip -n "$zip_file" -d "$fonts_dir"
    rm "$zip_file"
done

sudo find "$fonts_dir" -name '*Windows Compatible*' -delete
sudo find "$fonts_dir" -name '*LICENSE*' -delete

sudo fc-cache
