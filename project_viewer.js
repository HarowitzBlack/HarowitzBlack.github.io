





// fill up the array with stuff
var str_list = [];

str_list[0] = {
    "project_name":"Kemosabe ",
    "project_desp":"Kemosabe is a simple bot development frameowork for messenger.",
    "link_to_project":"https://github.com/HarowitzBlack/kemosabe",
    "font":"Pacifico, cursive",
    "bgcol":"#f4ee42",
}

str_list[1] = {
    "project_name":"Simplifly Bot",
    "project_desp":"A messenger bot that hunts the internet for cheapest flights and instantly notifies users.",
    "link_to_project":"http://m.me/simplifly.io",
    "font":"Pacifico, cursive",
    "bgcol":"#ef481f",
}

str_list[2] = {
    "project_name":"Serge Bot ",
    "project_desp":"A messenger bot that keeps track of price surges of cryptocurrenies and notifies the users in real-time.",
    "link_to_project":"http://m.me/hellosergebot",
    "font":"Pacifico, cursive",
    "bgcol":"#57cacc",
}

str_list[3] = {
    "project_name":"Senor Botto ",
    "project_desp":"A messenger bot that finds the nearest restaurants and activities around you.",
    "link_to_project":"http://m.me/1916711305258472",
    "font":"Pacifico, cursive",
    "bgcol":"#57cc97",
}

str_list[4] = {
    "project_name":"Pixo  ",
    "project_desp":"Simple pixel art creator written in  python",
    "link_to_project":"https://github.com/HarowitzBlack/Pixo-python3",
    "font":"Pacifico, cursive",
    "bgcol":"#2d8748",
}

str_list[5] = {
    "project_name":"Vader Bot ",
    "project_desp":"A twitter bot that tweets random star wars quotes at people.",
    "link_to_project":"https://github.com/HarowitzBlack/VaderBot-twitter",
    "font":"Pacifico, cursive",
    "bgcol":"#492d87",
}

str_list[6] = {
    "project_name":"Wex ",
    "project_desp":"Gives you the weather forcast of a location by analizing a sentence. An overengineered piece of garbage tbh.",
    "link_to_project":"https://github.com/HarowitzBlack/WeX",
    "font":"Pacifico, cursive",
    "bgcol":"#2d5b87",
}

var glob_counter = 0;
var max_lim = str_list.length; // end of projects, start from 0 again


var tit = document.getElementById('title_text');
var desp = document.getElementById('project_desp');
var url = document.getElementById('project_url');
var bg_poster = document.getElementById('bg_header_poster');
var pcounter = document.getElementById('pcounter');

update_props();

function move_forward(){
  glob_counter +=1;
  if(glob_counter >= max_lim){
    glob_counter = 0;

  }
  update_props();


}

function move_back(){
  glob_counter -=1;
  if(glob_counter <= 0){
    glob_counter = max_lim - 1;

  }
  update_props();

}

function update_props(){
  pcounter.innerHTML = "Showing #"+ glob_counter.toString() + " of " + max_lim.toString();
  tit.innerHTML = str_list[glob_counter].project_name;
  tit.style.fontFamily = str_list[glob_counter].font;
  bg_poster.style.backgroundColor = str_list[glob_counter].bgcol;



  desp.innerHTML = str_list[glob_counter].project_desp;
  console.log(str_list[glob_counter].link_to_project);
  url.href = str_list[glob_counter].link_to_project;

}
