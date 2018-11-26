const shout =(string)=>{
   return (string.toUppercase())
 };

const whisper = (string)=>{
  return string.toLowercase()
}

const logWhisper= (string)=>{
  console.log(string.toLowercase())
};

const logShout= (string)=>{
  console.log(string.toUppercase())
};


const sayHiToGrandma= (string)=>{
  if ((string.toLowercase())=== string){
    return "I can't hear you!"
  }else if ((string.toUppercase())=== string){
  return "YES INDEED!"
}else if (string ==="I love you, Grandma."){
    return "I love you, too."
  }
};
