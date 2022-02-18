const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ninja;
var bg, bgImg;

function preload(){
bgImg = loadImage('images/temporarybg.jpg');

}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  
  world = engine.world;

  ninja = createSprite(200,200);
  bg = createSprite(500,350,100,100);
  bg.addImage("background", bgImg);
  bg.scale = 1.09;
  
 
}

function draw (){
  background('grey');
  drawSprites();
}