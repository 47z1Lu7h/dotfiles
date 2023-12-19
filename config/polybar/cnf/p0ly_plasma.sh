#!/bin/bash
sleep 4; polybar -q right  -c ~/.config/polybar/themes/plasma.ini & disown; polybar -q left -c ~/.config/polybar/themes/plasma.ini & disown;
