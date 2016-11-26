"use strict";
//data23
$(function() {
const questions=[
	{
		question_text:'Что будет в консоле при console.log((\'5\'*5)+"5"+(+5));?',
		ansvers:['NaN55','2555','35'],
		true_ansver:[false,true,false],
		number:0
	},
	{
		question_text:'Что будет в консоле при var i=\'8\'; console.log((i++)++);?',
		ansvers:['Uncaught ReferenceError: Invalid left-hand side expression in postfix operation','Uncaught ReferenceError: Invalid type operation','10'],
		true_ansver:[true,false,false],
		number:1
	},
	{
		question_text:'Что будет в консоле при var i=[{}]; console.log(i++);?',
		ansvers:['Uncaught ReferenceError: Undefined operator ++ ','NaN','[Object]'],
		true_ansver:[false,true,false],
		number:2
	},
	{
		question_text:'Какие варианты правильно объявляют переменную для f, возвращающей сумму двух аргументов ?',
		ansvers:['var f = function(a,b) { return a+b }','var f = new Function(\'a,b\', \'return a+b\')','var f = new Function(\'a\', \'b\', \'return a+b\')','Никакие.'],
		true_ansver:[true,true,true,false],
		number:3
	},
	{
		question_text:'В каких браузерах будет работать этот код?\nelement.style.setExpression("width", "100px")',
		ansvers:[' Internet Explorer 5.0+',' Internet Explorer 6.0+','Opera',' Firefox','Safari'],
		true_ansver:[false,false,true,true,true],
		number:4
	}
];


let json_questions=JSON.stringify(questions);             
localStorage.setItem('local_storage_questions',json_questions);
let store_questions=localStorage.getItem('local_storage_questions');
store_questions=JSON.parse(store_questions);//+ object
let page_template=$('#0').html();//+ template
let tmpl = _.template(page_template);
let result = tmpl({list:store_questions});
 $('body').append(result);


function show_answer(test_result=[false]){
	let you_res=0;
	for(let  i of test_result){
    	if(i)++you_res;
	}

  
    let modal_window_template=$("#modal_window").html();//template
     modal_window_template = _.template(modal_window_template);
     let new_modal=modal_window_template({test_result:test_result,you_res:you_res});
     $('body').append(new_modal);
     $(".overlay").css({"visibility":"visible"});
	 $("#closeModal").on("click",function(){
     $(".overlay").detach();

	});
	 
}
	


function check(e){
	 e.preventDefault();
	 let test_result=[];

	for(let i of questions){
		let is_correct=false;
		let correct_counter=0;
	    let jnumber=0;
		for(let j of i.true_ansver){
            if (j===document.getElementsByName(i.number+'name')[jnumber].checked) {
         
         	correct_counter++;
            }  
           document.getElementsByName(i.number+'name')[jnumber].checked = false;
            jnumber++;
        }
        if(correct_counter===i.true_ansver.length)is_correct=true;

        test_result.push(is_correct);
	}
	show_answer(test_result);
	 
	}

	let Button=document.getElementsByClassName("Button");
	Button[0].addEventListener("click",check);

 });





