const readline = require('readline');


function mostPopularFlavor(votes) {
    const voteCount = [0, 0, 0, 0, 0];

    for (let i = 0; i < votes.length; i++) {
        voteCount[votes[i]]++;
    }

    let maxVotes = 0;
    let popularFlavorCode = 0;

    for (let i = 0; i < voteCount.length; i++) {
        if (voteCount[i] > maxVotes) {
            maxVotes = voteCount[i];
            popularFlavorCode = i;
        } else if (voteCount[i] === maxVotes && i < popularFlavorCode) {
            popularFlavorCode = i;
        }
    }

    return popularFlavorCode;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isValidVote(vote) {
    return vote >= 0 && vote <= 4; 
}


console.log('Enter the votes as a list of numbers between 0 and 4 (e.g., 0,1,2,3,4):');
rl.question('Votes: ', (input) => {

    const votes = input.split(',').map(Number);

    const invalidVotes = votes.filter(vote => !isValidVote(vote));
    if (invalidVotes.length > 0) {
        console.log(`Invalid votes found: ${invalidVotes.join(', ')}. Please only use numbers between 0 and 4.`);
    } else {

        const result = mostPopularFlavor(votes);
        console.log(`The most popular flavor is: ${result}`);
    }


    rl.close();
});
