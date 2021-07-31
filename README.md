# Pixel Art Project
This project is to implement webpage that user can create a canvas
and paint pixels on it. 

## Installation
Code editor to work with Javascript, HTML, CSS. 
I have been using Visual Studio Code for this project. 

## Directory structure
style.css
index.html
designs.js
README.md

## How to check out the webpage(i.e. index.html)
Please keep the structure of the directories and 
open a browser(e.g. chrome) and drag the index.html file to the tap session.  

## Details on variables and functions
# Global Variables
convasTable : element id of the canvas user created.
color: color that user picked.
numRow: number of rows of the canvas.
numCol: number of columns of the canvas.

# functions
makeGrid: to create a canvas with given number of rows and columns. 
filler: to paint a clicked pixel with given color. 

# eventListeners
-click event listener: to detect which pixel has been clicked and call filler function. 
-submit event listener: to create a canvas, it calls makeGrid function. 

## Future work
-Add more buttons with different functionalities such as reset button.

## Licence
Udacity