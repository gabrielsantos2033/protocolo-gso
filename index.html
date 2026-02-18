<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Protocolo G.S.O.</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
font-family:'Inter',sans-serif;
background:#0b0f18;
color:#eaeefb;
min-height:100vh;
overflow-x:hidden;
position:relative;
}
body::before{
content:"";
position:fixed;
width:100%;
height:100%;
background-image:
linear-gradient(rgba(0,217,245,0.07) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,217,245,0.07) 1px, transparent 1px);
background-size:40px 40px;
animation:gridMove 30s linear infinite;
z-index:-2;
}
@keyframes gridMove{
0%{background-position:0 0}
100%{background-position:40px 40px}
}
.scanline{
position:fixed;
top:-5px;
left:0;
width:100%;
height:4px;
background:linear-gradient(90deg,transparent,#00d9f5,transparent);
animation:scan 6s linear infinite;
z-index:-1;
opacity:0.5;
}
@keyframes scan{
0%{top:-5px}
100%{top:100%}
}
header{text-align:center;padding:60px 20px 20px;}
h1{
font-size:44px;
font-weight:800;
letter-spacing:4px;
background:linear-gradient(90deg,#00f5a0,#00d9f5);
-webkit-background-clip:text;
color:transparent;
}
.subtitle{opacity:0.5;margin-top:8px;font-size:14px;}
.author{margin-top:6px;font-size:13px;opacity:0.4;}
.container{
max-width:900px;
margin:auto;
padding:40px;
border-radius:20px;
background:rgba(255,255,255,0.04);
border:1px solid rgba(0,217,245,0.15);
backdrop-filter:blur(25px);
box-shadow:0 0 50px rgba(0,0,0,0.6);
}
textarea{
width:100%;
height:170px;
background:rgba(255,255,255,0.05);
border:1px solid rgba(0,217,245,0.25);
border-radius:14px;
padding:20px;
color:white;
font-size:15px;
resize:none;
outline:none;
}
textarea:focus{
box-shadow:0 0 20px rgba(0,217,245,0.6);
background:rgba(255,255,255,0.08);
}
button{
margin-top:25px;
padding:15px 50px;
border:none;
border-radius:12px;
font-weight:700;
background:linear-gradient(90deg,#00f5a0,#00d9f5);
color:black;
cursor:pointer;
transition:0.3s;
}
button:hover{transform:scale(1.05);}
.result{margin-top:40px;display:none;}
.circle{
width:180px;height:180px;border-radius:50%;
border:8px solid rgba(0,217,245,0.2);
display:flex;align-items:center;justify-content:center;
margin:20px auto;
position:relative;
}
.risk-text{font-size:22px;font-weight:700;}
.recommendation{
margin-top:25px;padding:18px;border-radius:14px;
background:rgba(0,217,245,0.08);
border:1px solid rgba(0,217,245,0.3);
font-size:14px;line-height:1.5;
}
footer{text-align:center;margin:80px 0 30px;opacity:0.4;font-size:13px;}
</style>
</head>

<body>
<div class="scanline"></div>

<header>
<h1>PROTOCOLO G.S.O.</h1>
<div class="subtitle">Sistema Internacional de Defesa Cognitiva Digital</div>
<div class="author">Criado por Gabriel Santos Oficial</div>
</header>

<div class="container">
<textarea id="texto" placeholder="Cole aqui o texto para análise cognitiva estruturada..."></textarea>
<button onclick="analisar()">INICIAR ANÁLISE</button>

<div class="result" id="resultado">
<div class="circle">
<div class="risk-text" id="risco">0%</div>
</div>
<canvas id="grafico"></canvas>
<div class="recommendation" id="recomendacao"></div>
</div>
</div>

<footer>
Protocolo G.S.O. — Defesa Cognitiva Digital Global
</footer>

<script>
async function analisar(){
let texto=document.getElementById("texto").value;
if(texto.length<15){alert("Insira um texto maior.");return;}

let response=await fetch("/api/ia",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({texto})
});

let data=await response.json();

document.getElementById("resultado").style.display="block";
document.getElementById("risco").innerHTML=data.risco+"%";

new Chart(document.getElementById("grafico"),{
type:'radar',
data:{
labels:["Urgência","Financeiro","Pressão","Emocional","Identidade"],
datasets:[{
data:[
data.indicadores.urgencia,
data.indicadores.financeiro,
data.indicadores.pressao,
data.indicadores.emocional,
data.indicadores.identidade
],
borderColor:"#00d9f5",
backgroundColor:"rgba(0,217,245,0.2)"
}]
}
});

document.getElementById("recomendacao").innerHTML=
"<strong>Técnica Detectada:</strong> "+data.tecnica+
"<br><strong>Tipo Provável:</strong> "+data.tipo+
"<br><br>Recomendação: Não realize ações financeiras imediatas sem validação externa.";
}
</script>

</body>
</html>
