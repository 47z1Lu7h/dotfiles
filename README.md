<img src='/street.jpg'>

<h1 align="center">✨ 47z!Lu7h Dofiles! ✨</h1>


<p align="center">
  <a href="https://github.com/Axarva/dotfiles-2.0/stargazers"><img src="https://img.shields.io/github/stars/Axarva/dotfiles-2.0?color=ffd5cd&style=for-the-badge&logo=starship"></a>
  <a href="https://github.com/Axarva/dotfiles-2.0/issues"><img src="https://img.shields.io/github/issues/Axarva/dotfiles-2.0?color=d35d6e&style=for-the-badge&logo=codecov"></a>
  <a href="https://github.com/Axarva/dotfiles-2.0/network/members"><img src="https://img.shields.io/github/forks/Axarva/dotfiles-2.0?color=84afdb&style=for-the-badge&logo=jfrog-bintray"></a>
  <a href="https://github.com/Axarva/dotfiles-2.0/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange.svg?color=90c861&style=for-the-badge&logo=mitsubishi"></a>
</p>

## ~~A Note:~~ I'm back.

## Table of Contents

- [About ⁉️](#about)
- [Gallery 📷](#gal)
- [Workflow 🖨️](#workflow)
- [Keybinds ✍️](#keybinds)
- [Installation 🤵‍](#inst)
  - [Arch Install 🌇](#arch)
  - [Other Install 🚂](#other)
- [Dependencies 📊](#deps)
- [Troubleshooting 🔫](#trouble)

<a id="about"></a>

## Starring:
![Screenshot](street.jpg)

<img src="/screenshots/EwwLogo.png" alt="eww" align="right" height="180vh">

- **Note:** Check out the `modified` branch for a newer setup. Hope you like it!
- **xmonad** ⚽ 
- **eww** (Very wacky)
- **firefox** 🦊
- **rofi** 💈
- **tint2 ([This](https://github.com/Axarva/tint2-1) fork is the only supported fork.)** 🍫
- **Inhibitors** 👁️ (Inhibitors are cool stuff that prevent auto screen lock when you're watching a video or something)
- **Healthy stuff** ❤️ (Yeah, you get notifications to fix your posture and take a break)
- *Insert more stuff here*

Hello! Thank you for dropping by! 👋

These are my xmonad configurations, and they go brr! 🚀 (Let's stop that there).

If you're here, I suppose you want to be cloning this configuration, for which look at the Installation Section below. 👇 

Even if you're not, just look through the gallery:



<a id="gal"></a>
<img src='/screenshots/sidebar.png'>
<img src='/screenshots/firefox.png'>
<img src='/screenshots/center.png'>

<a id="workflow"></a>

## Workflow 🖨️
Workflow GIF: (This is a short one, for more goodies look at the links below)

(Also, compression made it look kinda bad, but I think it shows what it needs to)


<p align="center">
  <img src="https://github.com/Axarva/gifs/blob/main/workflow.gif">
</p>

[Workflow Video by SavvyNik](https://www.youtube.com/watch?v=rMoUCnqhYfs) aka [@SavvyNik](https://github.com/SavvyNik)


[Workflow Video by Guilherme Moreno](https://www.youtube.com/watch?v=im9QKZSMUFQ) aka [@morenoled](https://github.com/morenoled)

<a id="keybinds"></a>
## Keybinds ✍️

## :four_leaf_clover: ‎ <samp>KEY BINDINGS</samp>

<details>
<summary><b>Openbox (<a href="./.config/openbox/rc.xml#L175-L827">rc.xml</a>)</b></summary>

| Key                                                                                                                                                         | Action                                            |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
|                                                                                                                                                             |                                                   |
| **Window Management and more**                                                                                                                              |                                                   |
| <kbd>super</kbd> + <kbd>⯇</kbd>                                                                                                                            | Move window focus to left-side                    |
| <kbd>super</kbd> + <kbd>⯈</kbd>                                                                                                                            | Move window focus to right-side                   |
| <kbd>super</kbd> + <kbd>⯅</kbd>                                                                                                                            | Move window focus to up-side                      |
| <kbd>super</kbd> + <kbd>⯆</kbd>                                                                                                                            | Move window focus to down-side                    |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>⯇</kbd>                                                                                                         | Move focused window to left-side                  |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>⯈</kbd>                                                                                                         | Move focused window to right-side                 |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>⯅</kbd>                                                                                                         | Move focused window to up-side                    |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>⯆</kbd>                                                                                                         | Move focused window to down-side                  |
| <kbd>super</kbd> + <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> / <kbd>6</kbd> / <kbd>7</kbd> / <kbd>8</kbd>                    | Move to N desktop/workspace                       |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> / <kbd>6</kbd> / <kbd>7</kbd> / <kbd>8</kbd> | Move focused window to N desktop/workspace        |
| <kbd>alt</kbd> + <kbd>ㅤㅤㅤㅤ</kbd>                                                                                                                         | Show (client-)menu of focused window              |
| <kbd>super</kbd> + <kbd>C</kbd>                                                                                                                             | Close/kill focused window                         |
| <kbd>super</kbd> + <kbd>D</kbd>                                                                                                                             | Toggle show desktop                               |
| <kbd>super</kbd> + <kbd>F</kbd>                                                                                                                             | Toggle fullscreen for focused window              |
| <kbd>super</kbd> + <kbd>ㅤㅤㅤㅤ</kbd>                                                                                                                       | Show desktop (root-)menu                          |
| <kbd>super</kbd> + <kbd>T</kbd>                                                                                                                             | Toggle decorations of focused window              |
| <kbd>super</kbd> + <kbd>X</kbd>                                                                                                                             | Toggle maximize for focused window                |
| <kbd>super</kbd> + <kbd>Z</kbd>                                                                                                                             | Toggle iconify (or minimize) for focused window   |
| <kbd>alt</kbd> + <kbd>tab</kbd>                                                                                                                             | Switch active window to next window               |
| <kbd>alt</kbd> + <kbd>shift</kbd> + <kbd>tab</kbd>                                                                                                          | Switch active window to previous window           |
| <kbd>super</kbd> + <kbd>esc</kbd>                                                                                                                           | Open rofi extensions menu                         |
| <kbd>super</kbd> + <kbd>prt sc</kbd>                                                                                                                        | Open rofi screenshots menu                        |
| <kbd>super</kbd> + <kbd>R</kbd>                                                                                                                             | Open rofi main menu                               |
| <kbd>prt sc</kbd>                                                                                                                                           | Screenshot                                        |
| <kbd>Meta</kbd> + <kbd>prt sc</kbd>                                                                                                                         | Countdown screenshot                              |
| <kbd>shift</kbd> + <kbd>prt sc</kbd>                                                                                                                        | Selection screenshot                              |
| <kbd>Meta</kbd> + <kbd>esc</kbd>                                                                                                                            | Pop-up notification history                       |
| <kbd>Meta</kbd> + <kbd>enter</kbd>                                                                                                                          | Open current notification context-menu            |
| <kbd>Meta</kbd> + <kbd>ㅤㅤㅤㅤ</kbd>                                                                                                                        | Close current notification                        |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>ㅤㅤㅤㅤ</kbd>                                                                                                     | Close all notifications                           |
| <kbd>super</kbd> + <kbd>E</kbd>                                                                                                                             | Open user's preferred file manager                |
| <kbd>super</kbd> + <kbd>L</kbd>                                                                                                                             | Lock current session with user's preferred locker |
| <kbd>super</kbd> + <kbd>enter</kbd>                                                                                                                         | Open user's preferred terminal emulator           |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>enter</kbd>                                                                                                      | Reverse terminal emulator background-foreground   |
| <kbd>super</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>                                                                                                          | Restart UI                                        |
|                                                                                                                                                             |                                                   |
| **Brightness Control**                                                                                                                                      |                                                   |
| <kbd>🔆+</kbd>                                                                                                                                              | Increase brightness by N%                         |
| <kbd>🔆-</kbd>                                                                                                                                              | Decrease brightness by N%                         |
|                                                                                                                                                             |                                                   |
| **Audio-volume Control**                                                                                                                                    |                                                   |
| <kbd>🔊+</kbd>                                                                                                                                              | Increase audio-volume by N%                       |
| <kbd>🔊-</kbd>                                                                                                                                              | Decrease audio-volume by N%                       |
| <kbd>🔇</kbd>                                                                                                                                               | Toggle mute                                       |
|                                                                                                                                                             |                                                   |
| **Media Control**                                                                                                                                           |                                                   |
| <kbd>⏮</kbd>                                                                                                                                               | Previous track                                    |
| <kbd>⏭</kbd>                                                                                                                                               | Next track                                        |
| <kbd>⏹</kbd>                                                                                                                                               | Stop playing music                                |
| <kbd>⏯</kbd>                                                                                                                                               | Toggle play/pause                                 |
|                                                                                                                                                             |                                                   |
| **Combo Keyboard and Pointing Device**                                                                                                                      |                                                   |
| <kbd>super</kbd> + <kbd>`left click`</kbd> (hold)                                                                                                           | Move focused window freely                        |
| <kbd>super</kbd> + <kbd>`right click`</kbd> (hold)                                                                                                          | Resize focused window freely                      |
| <kbd>super</kbd> + <kbd>`scroll up`</kbd> / <kbd>`scroll down`</kbd>                                                                                        | Move desktop/workspace to previous or next        |
|                                                                                                                                                             |                                                   |
| **Cursor on Desktop**                                                                                                                                       |                                                   |
| <kbd>`middle click`</kbd>                                                                                                                                   | Show desktop/workspace lists                      |
| <kbd>`right click`</kbd>                                                                                                                                    | Show desktop (root-)menu                          |
| <kbd>`scroll up`</kbd> / <kbd>`scroll down`</kbd>                                                                                                           | Move desktop/workspace to previous or next        |
|                                                                                                                                                             |                                                   |
| **Cursor on Window Titlebar**                                                                                                                               |                                                   |
| <kbd>`left click`</kbd> (or simply hover)                                                                                                                   | Focus and raise window                            |
| <kbd>`middle click`</kbd>                                                                                                                                   | Switch active window to previous or next window   |
| <kbd>`right click`</kbd>                                                                                                                                    | Show (client-)menu of focused window              |
| <kbd>`scroll up`</kbd> / <kbd>`scroll down`</kbd>                                                                                                           | Roll up or down focused window                    |

> **LEGEND**  
> [<kbd>super</kbd>](https://en.wikipedia.org/wiki/Super_key_(keyboard_button))

</details>

<details>
<summary><b>Parcellite (<a href="./EXTRA_JOYFUL/.config/parcellite/parcelliterc#L38-L41">parcelliterc</a>)</b></summary>

| Key                                             | Action                       |
|:------------------------------------------------|:-----------------------------|
| <kbd>Meta</kbd> + <kbd>alt</kbd> + <kbd>P</kbd> | Show menu                    |
| <kbd>Meta</kbd> + <kbd>alt</kbd> + <kbd>H</kbd> | Show history menu            |
| <kbd>Meta</kbd> + <kbd>alt</kbd> + <kbd>X</kbd> | Show persistent history menu |
| <kbd>Meta</kbd> + <kbd>alt</kbd> + <kbd>A</kbd> | Show action menu             |

</details>

<details>
<summary><b>sxhkdrc (<a href="./config/sxhkd/sxhkdrc">.sxhkdrc</a>)</b></summary>

| Key                                                          | Action                             |
|:-------------------------------------------------------------|:-----------------------------------|
|                                                              |                                    |
| **Built-in**                                                 |                                    |
| <kbd>Meta</kbd> + <kbd>Return</kbd>                          | terminal emulator    |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>C</kbd>            | Copy selection to clipboard        |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>V</kbd>            | Paste clipboard                    |
| <kbd>Meta</kbd> + <kbd>⯅</kbd>                              | Scroll up by line                  |
| <kbd>Meta</kbd> + <kbd>⯆</kbd>                              | Scroll down by line                |
| <kbd>Meta</kbd> + <kbd>home</kbd>                            | Scroll up to top                   |
| <kbd>Meta</kbd> + <kbd>end</kbd>                             | Scroll down to bottom              |
| <kbd>Meta</kbd> + <kbd>`right click`</kbd> (hold)            | Show context-menu                  |
|                                                              |                                    |
| **URL Selection (matcher)**                                  |                                    |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>U</kbd>            | Activate URL selection             |
| <kbd>⯇</kbd> / <kbd>⯅</kbd> / <kbd>⯈</kbd> / <kbd>⯆</kbd> | Navigate URL selection             |
| <kbd>enter</kbd> / <kbd>`left click`</kbd>                   | Open selected URL                  |
| <kbd>esc</kbd>                                               | Deactivate URL selection           |
|                                                              |                                    |
| **Font Resizer**                                             |                                    |
| <kbd>Meta</kbd> + <kbd>+</kbd>                               | Increase font size by Npx          |
| <kbd>Meta</kbd> + <kbd>-</kbd>                               | Decrease font size by Npx          |
| <kbd>Meta</kbd> + <kbd>=</kbd>                               | Reset font size to default         |
| <kbd>Meta</kbd> + <kbd>?</kbd>                               | Show font information              |
|                                                              |                                    |
| **Tabbed Extended**                                          |                                    |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>T</kbd>            | New tab                            |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>R</kbd>            | Rename current tab                 |
| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>W</kbd>            | Close/kill current tab             |
| <kbd>Meta</kbd> + <kbd>pg up</kbd>                           | Jump to next tab                   |
| <kbd>Meta</kbd> + <kbd>pg dn</kbd>                           | Jump to previous tab               |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>pg up</kbd>        | Move current tab to next order     |
| <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>pg dn</kbd>        | Move current tab to previous order |

> **SHELL**  
> Most shells use the readline([3](https://www.man7.org/linux/man-pages/man3/readline.3.html#EDITING_COMMANDS)) library.
> In addition, provided by shell plugins.
> ```sh
> 💲 man 3 readline | less +/EDITING\ COMMANDS
> ```


<a id="inst"></a>
## Installation 🤵‍
Alright, let's get to the main stuff.


If you feel like you don't want to read so much, here's a video, courtesy of [@SavvyNik](https://github.com/SavvyNik)!

[Nik's Installation Video for Arch Linux](https://www.youtube.com/watch?v=a8YJBGk8H4Q)



Note: Whatever method you follow, if you want the weather and quote features to work as well, you need to modify your crontab as follows: <br>
(To edit your crontab, `crontab -e` as a normal user.)



```
0,30 * * * * /home/{Your-username}/.config/eww/scripts/getweather
@reboot /home/{Your-username}/.config/eww/scripts/getquotes
```


And please follow these next few steps as well:
- Add `export PATH="$PATH:$HOME/bin"` to your `~/.bashrc` file (or a shell of your choice).
- Edit the script in `~/.config/eww/scripts/getweather`. Further steps are specified within that file.
- Open `tint2conf` and edit the theme `panellauncher.tint2rc`. In there, head over to the `Launcher` tab and set the icon theme as candy-icons.
- Get the Museo Sans 300 (ONLY THE 300 WEIGHT PLEASE, OTHERS LOOK WEIRD) font from Adobe itself or any other sources, put the `.ttf` or `.otf` file in your `~/.local/share/fonts`
  - Run `fc-cache -f` after getting the font.
- If the widgets don't work properly, go to [the main repository](https://github.com/elkowar/eww) and install `eww` as documented. Make sure the resulting binary is stored in `~/bin`.
- Issue `xmonad --recompile` after you complete all the steps, and relogin to xmonad.
- For the profile picture to load, it needs to have the full path in `eww.scss`. Open the file, search for the string containing `~/.config`(line number 329 to be exact) and edit it to point it to your image. Full path required. For example: `$HOME/path/to/image.png`.




<a id="arch"></a>

### For Arch Linux and it's derivatives (make sure you have git installed): 🌇

THIS MAKES BACKUPS TOO, SO YEAH. JUST DO IT. DO IT!


```bash
$ git clone https://github.com/Axarva/dotfiles-2.0.git
$ cd ./dotfiles-2.0
$ chmod +x ./install-on-arch.sh
$ ./install-on-arch.sh
$ sudo ln -s /usr/lib/libasan.so.8 /usr/lib/libasan.so.6 #This is here for tint2 to work.
```



That'll do the basic stuff. For a complete copy, look at the list of dependencies below.

AND DON'T FORGET TO READ WHAT'S WRITTEN AT THE END OF THE MAIN INSTALLATION SECTION [UP THERE](#inst). Further steps are specified there. (Yes. Absolutely needs to be shouty capitals.)



<a id="other"></a>

### For Gentoo Linux users (And basically any other distro): 🚂
I'm sorry I couldn't do it. You'll have to manually install dependencies.

**Piece of good advice**:  If you use `systemd`, go ahead and ignore this, and skip to [Going ahead: Others Edition](#ga-other).


In case you use something else, I recommend opening this repository in a text editor after you clone it, and global-replace the stuff that suits your system. After that, go ahead with [Going ahead: Others Edition](#ga-other).

<a id="ga-other"></a>

#### Going Ahead: Others Edition
You need to install the dependencies yourself, this script will add the fonts and the configs (and back up existing ones too):


```bash
$ git clone https://github.com/Axarva/dotfiles-2.0.git
$ cd ./dotfiles-2.0
$ chmod +x ./install-on-gentoo.sh
$ ./install-on-gentoo.sh
```

AND DON'T FORGET TO READ WHAT'S WRITTEN AT THE END OF THE MAIN INSTALLATION SECTION [UP THERE](#inst). Further steps are specified there. (Yes. Absolutely needs to be shouty capitals.)
<a id="deps"></a>
## Dependencies 📊
Here you go. Make sure you have em all.


-    xmonad
-    [eww](https://github.com/elkowar/eww) (ElKowar's Wacky Widgets, binary included, but I encourage you to build it yourself and put the binary in your ~/bin).
-    firefox (Not exactly a dependency)
-    rofi version 1.7.0 (Configs originally come from @adi1090x, been edited by me).
-    tint2 (Please use [this fork](https://github.com/Axarva/tint2-1) ONLY, or issues will occur. Binaries provided already.)
-    acpi
-    Museo Sans Font by Adobe (I think it needs some sort of acount, but get it) Or just search for it on the web and get it somewhere
-    [Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Iosevka) (I include some, but you can use any of your choice.)
-    playerctl
-    [brightnessctl](https://github.com/Hummer12007/brightnessctl)
-    [candy-icons](https://github.com/EliverLara/candy-icons)
-    dunst
-    Spotify (for cover art, else edit the eww/scripts/getart script accordingly)
-    An OpenWeatherMap Account, (view eww/scripts/getweather script for more info)
-    feh
-    NetworkManager
-    greenclip
-    alacritty
-    picom (fork of ibhagwan or jonaburg)
-    jq: Command line json parser (Needed for widgets)
-    maim and xclip for screenshots
-    mpv for low-battery sound playing (Not exactly necessary, you'll get the notification, but the sound depends on it.)
-    *Might need to be updated, so please tell me*

<a id="trouble"></a>
## Troubleshooting 🔫
And here we are:


1. If xmonad doesn't build make sure you have the `xmonad-contrib` package.
2. Bar looks weird: Try editing it a bit using `~/bin/tint2conf`. 
3. Alacritty configs are faulty: I'm not sure about this one, works perfectly fine for me. 
4. Widgets positioning weird: I hardcoded them for a 1366x768 screen, will create others if I can
5. Fonts: GET THOSE FONTS!
6. **MAKE SURE YOUR `~/bin` DIRECTORY IS IN YOUR PATH, OR NOTHING WILL WORK!** (Yes. Absolutely needs to be shouty capitals.)
7. For instructions regarding use on VirtualMachine, please do check the `VM` folder of this repository.
8. Bars not showing on Arch Linux: `sudo ln -s /usr/lib/libasan.so.8 /usr/lib/libasan.so.6`
9. The workspace indicator bar issue has been solved through the binaries in my fork.
10. Anything else? Open up an issue.
   
   
<h1 align="center">🌟 Good Luck and Cheers! 🌟</h1>
