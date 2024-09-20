#!/bin/bash
sleep 2;
polybar -q right  -c ~/.config/polybar/themes/plasma.ini & disown;
polybar -q left -c ~/.config/polybar/themes/plasma.ini & disown;
polybar -q top -c ~/.config/polybar/themes/simple.ini & disown;
