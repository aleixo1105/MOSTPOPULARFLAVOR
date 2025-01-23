# Flavor Voting
A simple Node.js program to determine the most popular flavor based on user votes. Users can input a list of votes (numbers between 0 and 4), and the program will calculate which flavor received the highest votes.

### Flavors and Codes
The flavors are mapped to codes as follows:

0 - Flakes  
1 - Chocolate  
2 - Strawberry  
3 - Cream  
4 - Neapolitan  

### Features
Accepts user input as a comma-separated list of votes (e.g., 0,1,2,3,4).
Validates that all votes are within the range of 0 to 4.
Displays an error message if invalid votes are entered.
Handles ties by returning the flavor with the smallest code number.

### How to Run
Prerequisites
Node.js installed on your system.
Steps

### Clone this repository:

```git clone https://github.com/aleixo1105/MOSTPOPULARFLAVOR.git```


### Install dependencies:

```npm install```


### Run the program:

``` node index.js ```

Enter the votes as prompted in the terminal:

Enter the votes as a list of numbers between 0 and 4 (e.g., 0,1,2,3,4):
Votes: 0,1,2,3,4,4

The result will be displayed:

The most popular flavor is: 4
