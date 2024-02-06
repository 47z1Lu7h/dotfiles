#!/bin/bash
sleep 3; 
polybar -q right  -c ~/.config/polybar/themes/plasma.ini & disown; 
polybar -q left -c ~/.config/polybar/themes/plasma.ini & disown;
