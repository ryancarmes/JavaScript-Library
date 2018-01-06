let age = prompt('What is your age?', );

if (age >= 14 && age <= 90) {
    alert('You are of the right age range.');
} else if (age == '') {
    alert('Invalid input. Please input a number.')
} else {
    alert('Sorry, you do not meet the criteria.');
}