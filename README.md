# poco
POCO the poker coach

Simple single-page webapp allowing you to estimate value of your stack and
stacks of your opponents in a tournament.

When you load poco.html into your browser, it lets you to choose the tournament
structure and then switches to the main window.

The main window display the following info:

  * Current blinds level
  * Current blinds and antes
  * Random number from 1 to 100 updates every 5 seconds (it helps to randomize
    your decisions sometimes)
  * Number of players at the table.
    You can choose this number by pressing on spinner arrows
  * Dependency between number of "runs" (how many times a player sits on button
    with current blinds and number of players) and size of the stack

Switching to the next level is done by pressing on the "Level" button.

Restarting is done by pressing the browser's "Reload" button.

This webapp is completely self-contained and doesn't require a server to
operate.  Just do git clone or something similar, press "Ctrl-O" in your browser
and choose poco.html.

Feel free to send me pull requests and/or patches, or even fork this code.

This project is covered by GNU General Public License v3:
https://www.gnu.org/licenses/gpl.html
