//trafico - javascriptfacil - www.javascriptfacil.com
var player=1;       //número jugadores
var gameover_flag=0;//fin
var start_flag=0;
var time=60;       //tiempo del juego
var step=0;
var speed=500;
var entry;

function MakeArray(n){
	var i;
	this.length=n;
	for(i=1;i<=n;i++)
		this[i]=0;
}

function up(){
	player=player-6;
	if(player<1) player=1;
	document.images[player].src=img2.src;
	document.images[player+6].src=img1.src;
}

function down(){
	player=player+6;
	if(player>19) player=19;
	document.images[player].src=img2.src;
	document.images[player-6].src=img1.src;
}


function rivalcar(){	
	var rival,newrival,rnd,black,white,i;
	start_flag++;
	if(time<=0){
		gameover();
		gameover_flag++;
	}
	//acciones game over
	if(gameover_flag==0){
		setTimeout("rivalcar()",speed);
		time=time-speed/1000;
		rnd=Math.floor((Math.random())*100);
		document.forms.time.value=Math.floor(time); //¥Á¥§¥Ã¥¯
		document.forms.carspd.value=130-speed/10;
		var msg=new MakeArray(9);
		for (i=1;i<10;i++){
			if(step % 20 < i*2+2)
				msg[i]="¡BROOOM!";
			else { msg[i]="¡PIII PIII!";}
		}
		document.forms.mark.value=msg[1]+msg[2]+msg[3]+msg[4]+msg[5]+msg[6]+msg[7]+msg[8]+msg[9];
		//CIUDADES DEL VIAJE
		var city=new MakeArray(12);
		city[1]="MADRID";city[2]="SEGOVIA";city[3]="TOLEDO";city[4]="SORIA";
		city[5]="VITORIA";city[6]="BILBAO";city[7]="TERUEL";city[8]="BARCELONA";
		city[9]="VALENCIA";city[10]="MURCIA";city[11]="SEVILLA";city[12]="CADIZ";
		var citynum=(Math.floor(step / 20))+1;
		document.forms.here.value=city[citynum];
		document.forms.next.value=city[citynum+1];
		document.images[player].src=img2.src;
		for(rival=2;rival<25;rival++){
			if(rival % 6 != 1){
				if(document.images[rival].src==img3.src || document.images[rival].src==img7.src){
					if(rival % 6 == 2){
						document.images[rival].src=img1.src;
						//variaciones
						if(rival-1==player){
							document.images[player].src=img4.src;
						if(document.images[rival].src==img3.src) time=time-3;
						else time=time-6;
						}
						else step++;
						document.forms.cars.value=step;
						if(step<30)
						document.images[0].src=img5.src;
						else { if(step<80)
							document.images[0].src=img6.src;
						else { document.images[0].src=img5.src;
						}}
					}
					else{
						document.images[rival-1].src=document.images[rival].src;
						document.images[rival].src=img1.src;
					}
				}
			}
		}
		if(rnd<30){
			if(step>50 && rnd%3==0) document.images[6].src=img7.src;
			else document.images[6].src=img3.src;
		}
		else {
			if(rnd<50){
				if(step>50 && rnd%3==0) document.images[12].src=img7.src;
				else document.images[12].src=img3.src;
			}
			else {
				if(rnd<80){
					if(step>50 && rnd%3==0) document.images[18].src=img7.src;
					else document.images[18].src=img3.src;
				}
				else {
					if(rnd<100){
						if(step>50 && rnd%3==0) document.images[24].src=img7.src;
						else document.images[24].src=img3.src;
					}
				}
			}
		}
	}
}
			
function gameover(){
	entry=alert("RIVALES ADELANTADOS: "+step);
}
	
function spdup(){
	if(speed>100) speed=speed-100;
	document.forms.carspd.value=130-speed/10;
}

function spddown(){
	if(speed<1200) speed=speed+100;
	document.forms.carspd.value=130-speed/10;
}