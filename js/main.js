'use strict';
{

  const nums=document.querySelectorAll('.num');
  const Operators=document.querySelectorAll('.operator');
  const textform=document.getElementById('textform');
  const equal=document.querySelector('.equal');
  const ca=document.getElementById('ca');
  let OperatorNum;
  let textlength=0;
  let LastNumber=0;
  let Result=0;



  //数字ボタンを押した時
  for(let i=0;i<nums.length;i++){
    nums[i].addEventListener('click',()=>{
      //記号を押した直後であれば、１から
      if(textlength===0){
        textform.value='';
      }
      //数字を付け足していく
      textform.value+=nums[i].value;
      textlength++;
    })
  }

  
//計算
  function calculate(num){
    if(textlength!==0){
      LastNumber=Number(textform.value);
    }
    switch(OperatorNum){
      case 0:
        Result+=LastNumber;
        break;
      case 1:
        Result-=LastNumber;
        break;
      case 2:
        Result*=LastNumber;
         break;
      case 3:
        Result/=LastNumber;
         break;
      default:
        Result=LastNumber;
    }
    textform.value=Result;
    OperatorNum=num;
    textlength=0;
    };

  //イコールを押した場合
    equal.addEventListener('click',()=>{
        calculate(OperatorNum);
    })

      //記号を押した場合
  for(let i=0;i<Operators.length;i++){
    Operators[i].addEventListener('click',()=>{
      //前回押した記号によって計算を変える
      calculate(i);
  })}

  //CAを押した場合
  ca.addEventListener('click',()=>{
    OperatorNum=0;
    textlength=0;
    LastNumber=0;
    Result=0;
    textform.value='';
  })


  }
 

  
