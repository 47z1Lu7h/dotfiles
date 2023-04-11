#!/usr/bin/env sh

## Add this to your wm startup file.

# Terminate already running bar instances
killall -q polybar

## Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

## Bar5!
polybar bottom  -c ~/.config/polybar/bspwm.ini &
#polybar top  -c ~/.config/polybar/bspwm.ini &
