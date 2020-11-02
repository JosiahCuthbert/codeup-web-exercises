var vowels=["a","e","i","o","u","A","E","I","O","U"]

function hasVowels(str) {
    for (var i = 0; i <= str.length; i++) {
        if (str.indexOf(vowels[i]) == -1) {
            return false;
        }
    }
    return true;
}


//make sure to use quotes. when you create a function like this, intellij will autofill your theme (in this case "name:")
//if you only want to add a single file, use git add filename. if you do a git status then begin your git add and begin typing the file name, "tab" will autocomplete
