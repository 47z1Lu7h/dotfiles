
<h1 align="center">✨ 47z!'s Dofiles! ✨</h1>


## **Thanks for dropping by!**

<img src="https://raw.githubusercontent.com/47z1Lu7h/dotfiles/refs/heads/main/.github/assets/image.png" alt="img" align="right" width="400px">

Hey 

Here are some details about my current setup:

+ **OS**: Debian
+ **Window Manager / Compositor**: [bspwm](https://github.com/baskerville/bspwm)
+ **Widgets**: [polybar](https://github.com/polybar/polybar)
+ **Notifications**: [dunst](https://github.com/dunst-project/dunst)
+ **Shell**: [zsh](https://wiki.archlinux.org/index.php/Zsh)
+ **Terminal**: [kitty](https://github.com/kovidgoyal/kitty)
+ **Editor**: [NvChad](https://github.com/NvChad/NvChad)
+ **Launcher**: [rofi](https://github.com/davatorium/rofi/)
+ **Browser**: Firefox, Google-Chrome
<!--+ **File Manager**: [nnn](https://github.com/jarun/nnn) and [Nemo](https://github.com/linuxmint/nemo)-->

<br>

<a id="keybinds"></a>
## :four_leaf_clover: ‎ <samp>KEY BINDINGS</samp>

<details>
<summary><b>Kitty mapping (<a href="~/.config/kitty/cnf/mapping.ini">kitty keys</a>)</b></summary>

| Key                                                                         | Action                                              |
|:----------------------------------------------------------------------------|:----------------------------------------------------|
| **Color Configuration**                                                     |                                                     |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>1</kbd>                             | Set color config to greenOverDark.ini               |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>2</kbd>                             | Set color config to hack.ini                        |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>3</kbd>                             | Set color config to color.ini                       |
|                                                                            |                                                     |
| **Font Size**                                                               |                                                     |
| <kbd>ctrl</kbd> + <kbd>+</kbd>                                             | Increase font size                                  |
| <kbd>ctrl</kbd> + <kbd>-</kbd>                                             | Decrease font size                                  |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>backspace</kbd>                      | Restore font size                                   |
|                                                                            |                                                     |
| **Background Opacity**                                                     |                                                     |
| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>+</kbd>                          | Increase background opacity by 0.05                 |
| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>-</kbd>                          | Decrease background opacity by 0.05                 |
| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>                          | Set background opacity to default                   |
|                                                                            |                                                     |
| **Clipboard**                                                               |                                                     |
| <kbd>alt</kbd> + <kbd>v</kbd>                                              | Paste from clipboard                                 |
|                                                                            |                                                     |
| **Window Management**                                                      |                                                     |
| <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>enter</kbd>                        | New window                                           |
| <kbd>alt</kbd> + <kbd>enter</kbd>                                          | New window with cwd                                 |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>x</kbd>                             | Close window                                        |
|                                                                            |                                                     |
| **Layout Management**                                                      |                                                     |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>e</kbd>                             | Next layout                                          |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>s</kbd>                             | Last used layout                                     |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>g</kbd>                             | Goto layout Fat                                      |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>t</kbd>                             | Goto layout Tall                                     |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>s</kbd>                             | Toggle layout Stack                                  |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>z</kbd>                             | Swap with window                                     |
|                                                                            |                                                     |
| **Moves the window into a new tab**                                        |                                                     |
| <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>enter</kbd>                       | Detach window new-tab                                |
|                                                                            |                                                     |
| **Switch to window**                                                        |                                                     |
| <kbd>alt</kbd> + <kbd>left</kbd>                                           | Neighboring window left                              |
| <kbd>alt</kbd> + <kbd>right</kbd>                                          | Neighboring window right                             |
| <kbd>alt</kbd> + <kbd>up</kbd>                                             | Neighboring window up                                |
| <kbd>alt</kbd> + <kbd>down</kbd>                                           | Neighboring window down                              |
|                                                                            |                                                     |
| **Move window**                                                             |                                                     |
| <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>up</kbd>                          | Move window up                                       |
| <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>left</kbd>                        | Move window left                                     |
| <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>right</kbd>                       | Move window right                                    |
| <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>down</kbd>                        | Move window down                                     |
|                                                                            |                                                     |
| **Resize window**                                                           |                                                     |
| <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>right</kbd>                      | Resize window narrower                              |
| <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>left</kbd>                       | Resize window wider                                 |
| <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>up</kbd>                         | Resize window taller                                |
| <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>down</kbd>                       | Resize window shorter                               |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>enter</kbd>                         | Resize window reset                                 |
|                                                                            |                                                     |
| **Tab Management**                                                          |                                                     |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>t</kbd>                             | Set tab title                                        |
| <kbd>cmd</kbd> + <kbd>alt</kbd> + <kbd>w</kbd>                             | New tab with cwd                                     |
| <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>w</kbd>                           | New tab                                              |
| <kbd>fn</kbd> + <kbd>shift</kbd> + <kbd>right</kbd>                        | Next tab                                             |
| <kbd>fn</kbd> + <kbd>shift</kbd> + <kbd>left</kbd>                         | Previous tab                                         |
| <kbd>alt</kbd> + <kbd>1</kbd>                                              | Goto tab 1                                           |
| <kbd>alt</kbd> + <kbd>2</kbd>                                              | Goto tab 2                                           |
| <kbd>alt</kbd> + <kbd>3</kbd>                                              | Goto tab 3                                           |
| <kbd>alt</kbd> + <kbd>4</kbd>                                              | Goto tab 4                                           |
| <kbd>alt</kbd> + <kbd>5</kbd>                                              | Goto tab 5                                           |
| <kbd>alt</kbd> + <kbd>6</kbd>                                              | Goto tab 6                                           |
| <kbd>alt</kbd> + <kbd>7</kbd>                                              | Goto tab 7                                           |
| <kbd>alt</kbd> + <kbd>8</kbd>                                              | Goto tab 8                                           |
| <kbd>alt</kbd> + <kbd>9</kbd>                                              | Goto tab 9                                           |
|                                                                            |                                                     |



> **LEGEND**  
> [<kbd>super</kbd>](https://en.wikipedia.org/wiki/Super_key_(keyboard_button))

</details>

<details>
<summary><b>sxhkdrc (<a href="./config/sxhkd/sxhkdrc">~/.config/sxhkd/sxhkdrc</a>)</b></summary>

| Key                                                              | Action                                        |
|:-----------------------------------------------------------------|:----------------------------------------------|
|                                                                 |                                               |
| **System**                                                       |                                               |
| <kbd>super</kbd> + <kbd>Return</kbd>                             | Open Kitty terminal with theme 47z1          |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>y</kbd>                | Suspend system                               |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>l</kbd>              | Restart systemd-logind                       |
| <kbd>super</kbd> + <kbd>l</kbd>                                  | Lock screen with Betterlockscreen            |
|                                                                 |                                               |
| **Rofi & Navigation**                                            |                                               |
| <kbd>super</kbd> + <kbd>d</kbd>                                  | Open Rofi program launcher                   |
| <kbd>alt</kbd> + <kbd>Tab</kbd>                                  | Open Rofi window switcher                    |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>n</kbd>                | Open Rofi Bluetooth menu                     |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>m</kbd>                | Run MouseWheel script                        |
| <kbd>control</kbd> + <kbd>Escape</kbd>                           | Reload sxhkd configuration                   |
|                                                                 |                                               |
| **Applications**                                                 |                                               |
| <kbd>super</kbd> + <kbd>e</kbd>                                  | Open Dolphin file manager                    |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>g</kbd>                | Open Google Chrome                           |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>f</kbd>                | Open Firefox ESR                             |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>b</kbd>                | Open Burp Suite                              |
| <kbd>super</kbd> + <kbd>v</kbd>                                  | Open Clipmenu                                |
| <kbd>super</kbd> + <kbd>z</kbd>                                  | Hide window                                  |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>p</kbd>                | Open Rofi power menu                         |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>c</kbd>                | Open Color Picker                            |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>o</kbd>                | Open OBS Studio                              |
|                                                                 |                                               |
| **BSPWM Window Management**                                      |                                               |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>q</kbd>              | Quit BSPWM                                   |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>r</kbd>              | Restart BSPWM                                |
| <kbd>super</kbd> + <kbd>Escape</kbd>                            | Close window                                 |
| <kbd>alt</kbd> + <kbd>Escape</kbd>                              | Open Plasma System Monitor                   |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>Escape</kbd>           | Kill window                                  |
| <kbd>super</kbd> + <kbd>w</kbd>                                  | Toggle tiled/monocle layout                  |
| <kbd>super</kbd> + <kbd>y</kbd>                                  | Move marked node to preselected node         |
| <kbd>super</kbd> + <kbd>q</kbd>                                  | Swap current node with biggest window        |
|                                                                 |                                               |
| **Window States & Flags**                                        |                                               |
| <kbd>super</kbd> + <kbd>a</kbd>                                  | Set window floating                          |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>a</kbd>              | Set window tiled                             |
| <kbd>super</kbd> + <kbd>f</kbd>                                  | Set window pseudo-tiled                      |
| <kbd>super</kbd> + <kbd>r</kbd>                                  | Set window fullscreen                        |
| <kbd>super</kbd> + <kbd>z</kbd>                                  | Hide window                                  |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>m</kbd>               | Mark window                                  |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>x</kbd>               | Lock window                                  |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>y</kbd>               | Set window sticky                           |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>a</kbd>               | Set window private                          |
|                                                                 |                                               |
| **Desktop Focus & Switching**                                    |                                               |
| <kbd>super</kbd> + <kbd>Tab</kbd>                                | Focus last desktop                           |
| <kbd>super</kbd> + <kbd>grave</kbd>                              | Focus last node                              |
| <kbd>super</kbd> + <kbd>bracketleft</kbd>                       | Focus previous desktop                       |
| <kbd>super</kbd> + <kbd>bracketright</kbd>                      | Focus next desktop                           |
|                                                                 |                                               |
| **Resizing & Moving Windows**                                   |                                               |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>arrow keys</kbd>       | Resize window                                |
| <kbd>super</kbd> + <kbd>control</kbd> + <kbd>arrow keys</kbd>   | Move floating window                         |
|                                                                 |                                               |
| **Brightness & Media Controls**                                 |                                               |
| <kbd>XF86MonBrightnessUp</kbd>                                  | Increase brightness by 2%                    |
| <kbd>XF86MonBrightnessDown</kbd>                                | Decrease brightness by 2%                    |
| <kbd>XF86AudioRaiseVolume</kbd>                                 | Increase volume by 4%                        |
| <kbd>XF86AudioLowerVolume</kbd>                                 | Decrease volume by 4%                        |
| <kbd>XF86AudioMute</kbd>                                        | Toggle mute                                  |
| <kbd>XF86AudioPlay</kbd>                                        | Play/Pause media                            |
| <kbd>XF86AudioNext</kbd>                                        | Play next media                             |
| <kbd>XF86AudioPrev</kbd>                                        | Play previous media                         |
| <kbd>XF86AudioStop</kbd>                                        | Stop media playback                         |
|                                                                 |                                               |
| **VPN Management**                                              |                                               |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>l</kbd>                | Connect to HTB VPN                          |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>k</kbd>                | Kill all OpenVPN connections                 |
|                                                                 |                                               |
| **Polybar Configurations**                                      |                                               |
| <kbd>super</kbd> + <kbd>alt</kbd> + <kbd>o</kbd>                | Kill all Polybar instances                   |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>1</kbd>               | Restart Polybar with 47z1 theme              |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>2</kbd>               | Restart Polybar with pentest theme           |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>3</kbd>               | Restart Polybar with simple theme            |
| <kbd>super</kbd> + <kbd>ctrl</kbd> + <kbd>4</kbd>               | Restart Polybar with plasma theme            |
|                                                                 |                                               |
