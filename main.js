var string1 = prompt("Enter any word");
var string2 = prompt("Enter any word");

var count1str = 0;
for (i = 0; i < string1.length; i++) {
    if('a'==string1[i]||'e'==string1[i]||'i'==string1[i]||'o'==string1[i]||'u'==string1[i]){
        count1str++
    }
}
console.log(count1str);
var count2str = 0;
for (i = 0; i < string2.length; i++) {
    if('a'==string2[i]||'e'==string2[i]||'i'==string2[i]||'o'==string2[i]||'u'==string2[i]){
        count2str++
    }
}
console.log(count2str);
if(count1str<count2str){
    console.log('string2 is higest vowels: '+count2str);
}
else{
    console.log('string1 is higest vowels:' +count1str);
}