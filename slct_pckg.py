#!/usr/bin/python
import os, time, signal, sys, os.path
from sys import stdout

def signal_handler(sig, frame):
	red()
	print("\n\n\t\t<|[!]|> Ctrl+C -> Ext1t1n6...\n")
	sys.exit(1)

signal.signal(signal.SIGINT, signal_handler)

def under():
	UNDERLINE = '\033[4m'
	stdout.write(UNDERLINE)

def reset():
	RESET = '\033[0m'
	stdout.write(RESET)

def italic():
	ITALIC = '\x1B[3m'
	stdout.write(ITALIC)

def bold():
	BOLD = '\x1B[3m'
	stdout.write(BOLD)

def bold_italic():
	BITALIC = '\x1B[1;3m'
	stdout.write(BITALIC)

def close():
	CLOSE = '\x1B[0m'
	stdout.write(CLOSE)

def black():
	BLACK = '\033[30m'
	stdout.write(BLACK)

def red():
	RED = '\033[1;31m'
	stdout.write(RED)

def green():
	GREEN = '\033[0;32m'
	stdout.write(GREEN)

def yellow():
	YELLOW = '\033[1;33m'
	stdout.write(YELLOW)

def blue():
	BLUE =  '\033[1;34m'
	stdout.write(BLUE)

def mag():
	MAGENTA = '\033[35m'
	stdout.write(MAGENTA)

def cyan():
	CYAN = '\033[1;36m'
	stdout.write(CYAN)

def white():
	WHITE =  '\033[1;37m'
	stdout.write(WHITE)

def menu():
	cyan()
	bold_italic()
	print('\n\t1 -> Nvim ~ NvChad\t\t2 -> Rofi\t\t\t3 -> lsd')
	print('\t3 -> Bspwm & Sxhkd\t\t4 -> Zsh-plugins\t\t6 -> fonts')
	print('\t5 -> Polybar \t\t\t6 -> Picom\t\t\t9 -> Htb-Xplorer')
	reset()
	close()
	bold_italic()
	white()
	print("\t0 - Exit\n")

def nvim():
	cyan()
	bold_italic()
	print("\n\t[+] Installing Nvim ~ NVCHAD \n")
	time.sleep(2)
	blue()
	os.system("sudo apt purge neovim\* -y; wget https://github.com/neovim/neovim/releases/download/v0.8.1/nvim-linux64.deb; sudo apt install ./nvim-linux64.deb -y && rm nvim-linux64.deb'")
	os.system("rm -rf ~/.config/nvim; rm -rf ~/.local/share/nvim; rm -rf ~/.cache/nvim; sudo rm -rf ~/.config/nvim; sudo rm -rf ~/.local/share/nvim; sudo rm -rf ~/.cache/nvim")
	os.system("git clone 'https://github.com/neovim/neovim' && cd neovim && make CMAKE_BUILD_TYPE=RelWithDebInfo && sudo make install")
	os.system("rm -rf ~/.config/nvim; rm -rf ~/.local/share/nvim; rm -rf ~/.cache/nvim; sudo rm -rf ~/.config/nvim; sudo rm -rf ~/.local/share/nvim; sudo rm -rf ~/.cache/nvim")
	os.system("sudo rm -rf /root/.config/nvim; sudo rm -rf /root/.local/share/nvim; sudo rm -rf /root/.cache/nvim; sudo rm -rf /root/.config/nvim; sudo rm -rf /root/.local/share/nvim; sudo rm -rf /root/.cache/nvim")
	os.system("git clone 'https://github.com/NvChad/NvChad' ~/.config/nvim --depth 1 && sudo git clone 'https://github.com/NvChad/NvChad' /root/.config/nvim --depth 1")
	os.system("cd .. && rm -rf neovim")
	italic()
	yellow()
	print("\n\t\t~!~!~!~   Nvim NvChad done!   ~!~!~!~ :~D\n\n")
	reset()
	time.sleep(2)

def zsh_plugins():
	print("\n\n\t<|[+]|> Cloning zsh Plugins -->\n\n\n")
	reset()
	time.sleep(2)
	os.system("sudo rm -rf /usr/share/zsh*")
	cyan()
	os.system("sudo git clone --depth=1 'https://github.com/romkatv/powerlevel10k.git' /usr/share/zsh/powerlevel10k")
	os.system("sudo git clone 'https://github.com/zsh-users/zsh-autosuggestions' /usr/share/zsh/plugins/zsh-autosuggestions")
	os.system("sudo git clone 'https://github.com/zsh-users/zsh-syntax-highlighting.git' /usr/share/zsh/plugins/zsh-syntax-highlightiqng")
	os.system("sudo git clone --depth=1 'https://github.com/marlonrichert/zsh-autocomplete.git' /usr/share/zsh/plugins/zsh-autocomplete")
	os.system("sudo wget 'https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/plugins/sudo/sudo.plugin.zsh' -P /usr/share/zsh/plugins/")
	italic()
	yellow()
	print("\n\n\t<|[+]|> Plugins done!\n\n\n")
	reset()
	time.sleep(2)

def fonts():
	cyan()
	bold_italic()
	print("\n\t<|[+]|>> Downloading Fonts --> \n\n")
	reset()
	os.system("wget 'https://github.com/ryanoasis/nerd-fonts/releases/download/v2.3.3/Iosevka.zip' -O Iosevka.zip")
	os.system("unzip Iosevka.zip -d ~/.local/share/fonts && rm -rf Iosevka.zip && fc-cache -v")
	italic()
	yellow()
	print("\n\t\t<|[*]|>Fonts done!<|[*]|>\n\n")
	reset()
	time.sleep(2)

def lsd():
	cyan()
	bold_italic()
	print("\n\t<|[+]|>> Getting lsd --> \n\n")
	reset()
	os.system("wget 'https://github.com/lsd-rs/lsd/releases/download/0.23.1/lsd_0.23.1_amd64.deb' -O lsd.deb")
	os.system("sudo dpkg -i lsd.deb && rm lsd.deb2")
	italic()
	yellow()

def compile_bspwm():
	cyan()
	bold_italic()
	print("\n\n\t<|[+]|>$ Cloning bspwm:\n\n")
	reset()
	time.sleep(2)
	os.system("git clone 'https://github.com/baskerville/bspwm.git' && cd bspwm && make && sudo make install")
	print("\n\t\t<|[+]|> Cloning Sxhkd:\n\n\n")
	reset()
	time.sleep(2)
	os.system("git clone 'https://github.com/baskerville/sxhkd.git' && cd sxhkd && make && sudo make install")
	os.system("rm -rf ../../bspwm")
	print("\n\t\t<|[*]|> ~!~!~!~   Bspwm & sxhkd done!   ~!~!~!~\n\n")
	reset()
	time.sleep(2)

def compile_picom():
	cyan()
	bold_italic()
	print("\n\t|[+]|>  Cloning & compliling Picom: \n\n\n")
	reset()
	time.sleep(2)
	os.system("git clone 'https://github.com/yshui/picom.git' && cd picom")
	os.system("git submodule update --init --recursive && meson setup --buildtype=release . build")
	os.system("ninja -C build && ninja -C build install")
	os.system("rm -rf ../picom")
	italic()
	yellow()
	print("\n\t\t<|[*]|> ~!~!~!~   Picom done!   ~!~!~!~\n\n")
	reset()
	time.sleep(2)

def compile_polybar():
	cyan()
	bold_italic()
	print("\n\t|[+]|> Cloning & compiling Polybar: \n\n\n")
	reset()
	time.sleep(2)
	os.system("git clone --recursive 'https://github.com/polybar/polybar' && cd polybar")
	os.system("mkdir build && cd build && cmake ..")
	os.system("make -j$(nproc) && make -j$(nproc) && sudo make install")
	os.system("rm -rf ../../polybar")
	italic()
	yellow()
	print("\n\t\t<|[*]|> ~!~!~!~   Polybar done!   ~!~!~!~\n\n")
	reset()

def clone_rofi():
	bold_italic()
	cyan()
	print("\n\t|[+]|> Cloning & installing Rofi:\n\n\n")
	reset()
	time.sleep(2)
	os.system("git clone --depth=1 'https://github.com/adi1090x/rofi.git' && cd rofi")
	os.system("chmod +x setup.sh && ./setup.sh")
	os.system("rm -rf ../rofi")
	italic()
	yellow()
	print("\n\t\t<|[*]|> ~!~!~!~   Rofi done!   ~!~!~!~\n\n")
	reset()

def htb_Xplorer():
	folder = "/opt/h4Ck/htbXplorer-Plus"

	if os.path.isdir(folder):
		italic()
		yellow()
		print("\n<|[+]|> htb-Xplorer already in the system [:~)\n\n")
		reset()
	else:
		cyan()
		print("\n\t<|[+]|> Cloning htbXplorer from github: \n\n")
		reset()
		time.sleep(2)
		os.system("sudo mkdir -p /opt/h4Ck/htbXplorer-Plus")
		os.system("sudo git clone 'https://github.com/4tz1Lu7h/htbXplorer-Plus.git' '/opt/h4Ck/htbXplorer-Plus'")
		os.system("sudo chmod +x /opt/h4Ck/htbXplorer-Plus/htbXplorer")
		italic()
		yellow()
		print("\n\t\t~!~!~!~   HtbXplorer-Plus done!    ~!~!~!~\n\n")
		reset()
		time.sleep(2)

#---------------------------------------------------------------------------------------------------------------------------------------------------------
# --> Main
#--------------------------------------------------------------------------------------------------------------------------------------------------------

if __name__ == '__main__':

    id = os.getuid()
    if id == 0:
        red()
        print("\n\t\t[!] -> You do not need to be ROOT to execute the tool!\n")

    else:
        while True:
            # show banner & menu
            bold()
            cyan()
            time.sleep(0.3)
            print("\nChoose any especific package to clone & comiple from source:")
            reset()
            menu()

            # get user imput & launch
            bold()
            yellow()
            opcionMenu = input("<|[+]|> Select one >>  ")
            reset()

            if opcionMenu == "1":
                nvim()

            elif opcionMenu == "2":
                clone_rofi()

            elif opcionMenu == "3":
                lsd()

            elif opcionMenu == "4":
                compile_bspwm

            elif opcionMenu == "5":
                zsh_plugins()

            elif opcionMenu == "6":
                fonts()

            elif opcionMenu == "7":
                compile_polybar()

            elif opcionMenu == "8":
                compile_picom()

            elif opcionMenu == "9":
                htb_Xplorer()

            elif opcionMenu == "0":
                time.sleep(0.3)
                yellow()
                print("\n\t By3!\n\n")
                break
            else:
                red()
                print("\n[!] You did'nt press any valid key ...")

                white()
                input("\t\t\n Press any key to continue")
