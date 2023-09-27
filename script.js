
const res = document.getElementById("res");
const bnt = document.getElementById("gerar");
const som = document.getElementById("som");
const teclas_1 = [...document.getElementsByClassName("teclas_1")];
const teclas = document.querySelectorAll(".teclas");
const imagem=document.getElementById('imagem')
const img1=document.getElementById('img1')
const img2=document.getElementById('img2')
const img3=document.getElementById('img3')
const img5=document.getElementById('img5')
const btn=document.getElementById('btn')
const dica=document.getElementById('dica')
const img4=[...document.getElementsByClassName('img')]
let audio = new Audio('./imagens/gemido-whatsapp.mp3')
let audio2=new Audio('./imagens/risada-muttley-rabugento.mp3')
let num;
let palavra;
let tamanhoP;
let palavras = ["carmen", "isabel", "emilia", "camila", "bianca", "vivian", "lilian", "marina", "mirian", "paloma", "celina", "angela",'silvia','martim','emilio','xavier','afonso','hector','rafael','manuel','inacio','monica','melina','daniel','danilo','cintia','lorena','milena','mirela'];
let quant;
var palavraSorteada = "";
let jogando = false;
let acerto;
let erros = 0;
let acertou = false;
let desenho = [];
let pegarTeclas;
let pegarErro;
let pegarErro1;
let acabou;
console.log(desenho)
const gerenciarDivs = (l) => {
  let obj;
  for (let i = 0; i < 8; i++) {
    obj = document.getElementById("letra" + i).innerHTML = "";
    obj = document.getElementById("letra" + i).style.display = "none";
  }
  for (let i = 0; i < l; i++) {
    obj = document.getElementById("letra" + i).style.display = "inline-block";
  }
};
const perdeu=()=>{
  img1.style.display='none'
  desenho[6]=document.getElementById('braco1').style.display='none',3000
  img3.style.display='block'
  img4.map((e)=>{
    e.style.display='none'
  })
}
const ganhou=()=>{
  img1.style.display='none'
  desenho[6]=document.getElementById('braco1').style.display='none'
  img2.style.display='block'
  audio.play()
  setTimeout(final,4000)
}
const apagarL=()=>{
  dica.innerHTML=''
}
btn.addEventListener('click',()=>{
  dica.innerHTML="Nome com 6 letras"
  setTimeout(apagarL,2000)
})
const receberImg = () => {
  desenho[2] = document.getElementById("cabeca")
  desenho[4] = document.getElementById("corpo");
  desenho[6] = document.getElementById("braco1").style.display='block';
  desenho[5] = document.getElementById("braco2");
  desenho[3] = document.getElementById("perna1");
  desenho[1] = document.getElementById("perna2");
  for(let i=1;i<6;i++){
    desenho[i].style.display='block'
  }
};
const removerClass=()=>{
    teclas.forEach((e)=>{
      e.classList.remove('teclasErro','teclasCerto')
    })
}
      

const pegarfotos=()=>{
  let i= Math.floor(Math.random()*3)
  img1.setAttribute('src','imagens/playboy'+i+'.jpg')
  img1.style.display='block'
}
const final=()=>{
  img2.style.display='none'  
  img5.style.display='block'
  audio2.play()
}


teclas_1.map((e) => {
  e.addEventListener("click", (evt) => {
    if (
      !evt.target.className.split(" ").some((string) => string == "teclasErro")
    ) {
      console.log(evt.target);
      pegarErro = evt.target;
      pegarErro1 = evt.target;
      pegarTeclas = evt.target.id;
      let letraTmp;
      let pesq;
      acertou = false;
      pesq = palavraSorteada.match(pegarTeclas);
      if (jogando) {
        while (pesq != null) {
          letraTmp = palavraSorteada.search(pegarTeclas);
          obj = document.getElementById("letra" + letraTmp).innerHTML =
            pegarTeclas;
          palavraSorteada = palavraSorteada.replace(pegarTeclas, "0");
          acerto++;
          if(acerto<6){
            desenho[acerto].style.display = "none";
          }else{
            document.getElementById("braco1").style.display = "none";
          }
          pegarErro.classList.add("teclasCerto");
          pesq = palavraSorteada.match(pegarTeclas);
          acertou = true;
        }
        if (!acertou) {
          pegarErro.classList.add("teclasErro");
          erros++;
          if(erros == 7) {
            jogando = false;
            perdeu()
          } 
        }
        if (acerto == tamanhoP) {
          jogando = false;
          ganhou()
        }
      }
    }
  });
});
bnt.addEventListener("click", (evt) => {
  jogando = true;
  acerto = 0;
  erros = 0;
  acertou = false;
  quant = palavras.length;
  num = Math.floor(Math.random() * quant);
  palavraSorteada = palavras[num];
  console.log(palavraSorteada)
  tamanhoP = palavraSorteada.length;
  img2.style.display='none'
  img3.style.display='none'
  img5.style.display='none'
  gerenciarDivs(tamanhoP);
  receberImg(tamanhoP);
  removerClass()
  pegarfotos()
  
});
  
   
  
