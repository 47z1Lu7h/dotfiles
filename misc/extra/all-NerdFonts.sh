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
fonts_dir="${HOME}/.local/share/fonts"

if [[ ! -d "$fonts_dir" ]]; then
    mkdir -p "$fonts_dir"
fi

for font in "${fonts[@]}"; do
    zip_file="${font}.zip"
    download_url="https://github.com/ryanoasis/nerd-fonts/releases/download/v${version}/${zip_file}"
    echo "Downloading $download_url"
    wget "$download_url"
    unzip -n "$zip_file" -d "$fonts_dir"
#    unzip -n "$zip_file" -d "47z1-Evironment/misc/fonts"
    rm "$zip_file"
done

find "$fonts_dir" -name '*Windows Compatible*' -delete

sudo fc-cache
