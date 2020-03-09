function reverse(text) {
   if(text.length===1){
       return text
   }
   let currentCharacter = text[0];
   let box = text.substring(1, text.length);
   let reverseBox = reverse(box)
   return reverseBox + currentCharacter;

}
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

