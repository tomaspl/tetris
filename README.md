# Tetris (in progress)

This is a initiative of creating a Tetris but without libraries, just using HTML, CSS and Vanilla JavaScript. Nowadays, so used to roll out things helped with very useful libraries made me want to go back to the roots to face a challenge. On a game like tetris things like the render of the board, the movement of the figures, their rotations, the logic to erase lines and to create random new figures I think that make a good challenging project.

## Table of Contents

- [Use](#Use)
- [Local running](#local-running)
- [Production link](#production-link)
- [How to play](#how-to-play)
- [Short summary of how it was implemented](#summary-of-how-it-was-implemented)

## Local running
- Run `git clone https://github.com/tomaspl/tetris.git` on a terminal
- Placed on the project folder, execute from terminal:

```bash
npx http-server
```
If http-server is not installed, it will ask you for installating it. After it, will be displayed the local url to see the project working.

## Production link
To see and play the current implementation of this Tetris go to https://tomaspl.github.io/tetris/

## How to play
1. Click the 'New Game' button.
2. Once the game starts, a figure is displayed, and it will move downward.
3. Pressing the left/right arrow on the keyboard will allow the figure to move to the left/right.
4. Pressing the Space bar will generate a rotation if the figure has enough space to rotate without intersecting with other figures or the edges of the board.
5. Each completed line will add 10 points.
6. This Tetris game will not increase the speed as the game progresses.
7. If there is not enough space, and the last figure is stacked at the very top of the board, touching the top edge, the game is over. It will display the points and allow the player to start a new game.

## Summary of how it was implemented
It created an internal matrix structure. In each cell, there could be a 'r,' 'v,' 'n,' 'a,' 'p,' 'z,' or 'e' character. Each character represents a different Tetris figure.
i.e:

    ```
    [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'r', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'r', 'r', 'r', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ...
    ]
    ```

Will be the L figure.
    
At the same time, an interval of 400ms will be running continuously. After 400ms, that matrix will be updated, causing the figure to move one position downward. However, if the user presses the left or right arrow, or even the space bar for rotation, it will generate a left movement, a right movement, or a rotation. It also considers if there is another figure below to determine if the moving figure should stop.

Each figure has its own class that knows how to implement the left, right, and rotation movements because the logic to draw the next line is specific to each figure.

In the DOM, the matrix structure is created with nested divs to simulate the matrix. Each cell is a square div that will undergo changes in its class. The cells with the class 'r' will be painted in red to represent the L figure.

