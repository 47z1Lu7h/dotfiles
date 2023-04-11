#!/bin/bash

ip_address=$(cat /$HOME/.config/polybar/bin/target | awk '{print $1}')
machine_name=$(cat /$HOME/.config/polybar/bin/target | awk '{print $2}')

if [ $ip_address ] && [ $machine_name ]; then
        echo "%{T0}%{F#fd0000} %{T5}%{F#888A} %{T5}%{F#00F7FF}$ip_address%{u-}%{F#888AAF}%{T5} = %{T4}%{F#00F7FF}$machine_name"
else
        echo "%{T0}%{F#ffffff}  %{T0}%{F#888A}%{T2}%{F#888AAF}No Target Machine ..."
fi
